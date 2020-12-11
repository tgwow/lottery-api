'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.only(['name', 'email', 'password'])

    const user = await User.create(data)
    return user
  }

  async index () {
    return User.all()
  }
}

module.exports = UserController
