'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Type extends Model {
  bets () {
    return this.hasMany('App/Models/Bet', 'id', 'bet_id')
  }
}

module.exports = Type
