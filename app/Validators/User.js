'use strict'

const Antl = use('Antl')

class User {
  get validateAll () {
    return false
  }

  get rules () {
    return {
      email: 'required|email|unique:users',
      password: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = User
