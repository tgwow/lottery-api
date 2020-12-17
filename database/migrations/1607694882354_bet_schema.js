'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BetSchema extends Schema {
  up () {
    this.create('bets', (table) => {
      table.increments()
      table.string('numbers').notNullable()
      table.datetime('due_date', { useTz:false }).notNullable()
      table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('type_id')
        .unsigned()
        .references('id')
        .inTable('types')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.timestamps()
    })
  }

  down () {
    this.drop('bets')
  }
}

module.exports = BetSchema
