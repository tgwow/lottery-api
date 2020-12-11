'use strict'

const errorMessages = (e) => {
  const messages = {
    'PasswordMisMatchException': 'Invalid Password.',
    'UserNotFoundException': 'This email does not exists.'
  }
  return messages[e] || 'Something was wrong!'
}

class SessionController {
  async store ({ request, response, auth }) {
    const { email, password } = request.all()

    try {
      const token = await auth.attempt(email, password)
      return token
    } catch (err) {
      const errorMessage = errorMessages(err.name)
      return response.status(err.status).send({ error: { message: errorMessage}})
    }
    // TODO: Como retornar o expiresIn pro front
  }

  async index ({ auth, response }) {
    try {
      return await auth.check()
    } catch (error) {
      response.status(404).send({ error: { message: 'Token has expired or is invalid' }})
    }
  }
}

module.exports = SessionController
