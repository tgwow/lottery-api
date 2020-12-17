'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Bet extends Model {
  static get dates () {
    return super.dates.concat(['due_date'])
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

  type () {
    return this.belongsTo('App/Models/Type')
  }
}

module.exports = Bet
