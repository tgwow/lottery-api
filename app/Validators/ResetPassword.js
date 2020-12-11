'use strict'

const Antl = use('Antl')

class ResetPassword {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      email: 'required|email',
      password: 'required',
      token: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = ResetPassword
