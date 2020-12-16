'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request, response, auth }) {
    const data = request.only(['name', 'email', 'password'])
    try {
      const user = await User.create(data)
      try {
        const token = await auth.attempt(data.email, data.password)
        return token
      } catch (err) {
        return response.status(err.status).send({ error: err })
      }
    } catch (err) {
      console.log(err)
      return response.status(err.status).send({ error: { message: err.message}})
    }
  }

  async index () {
    return User.all()
  }
}

module.exports = UserController
