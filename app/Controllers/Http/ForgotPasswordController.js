'use strict'

const User = use('App/Models/User')
const Mail = use('Mail')
const crypto = require('crypto')

const moment = require('moment')

class ForgotPasswordController {
  async store ({ request, response }) {
    const email = request.input('email')

    try {
      const user = await User.findByOrFail('email', email)
      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()
      await user.save()

      try {
        // eslint-disable-next-line no-unused-expressions
        await Mail.send(
          ['emails.reset_password', 'emails.reset_password-text'],
          {
            name: user.name,
            email,
            link: `${request.input('redirect_url')}?token=${user.token}`,
            token: user.token
          },
          (message) => {
            message.to(email)
            message.from('thiago.2809@outlook.com.br', 'Thiago | Lottery App')
            message.subject('Recuperação de senha')
          }
        )
        return response.status(200).send({ data: { message: 'Email has been sent.', token: user.token } })
      } catch (err) {
        return response.status(err.status).send({ error: { message: 'Email could not be sent, please, try again later.' } })
      }
    } catch (err) {
      return response.status(err.status).send({ error: { message: 'This email does not exists.', code: 'EMAIL_NOT_EXISTS' } })
    }
  }

  async update ({ request, response }) {
    const password = request.input('password')
    const { token } = request.get()
    try {
      const user = await User.findByOrFail('token', token)
      const isExpired = moment().subtract('2', 'days').isAfter(user.token_created_at)

      if (isExpired) {
        return response.status(401).send({ error: { message: 'Your token has been expired.' } })
      }
      user.token = null
      user.token_created_at = null
      user.password = password

      await user.save()

      return user
    } catch (err) {
      return response.status(err.status).send({ error: { message: 'Your token is invalid.' } })
    }
  }
}

module.exports = ForgotPasswordController
