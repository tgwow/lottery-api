'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeSchema extends Schema {
  up () {
    this.create('types', (table) => {
      table.increments()
      table.string('type').notNullable()
      table.text('description', ['varchar']).notNullable()
      table.integer('range').notNullable()
      table.decimal('price', [2]).notNullable()
      table.integer('max_number').notNullable()
      table.string('color').notNullable()
      table.integer('min_cart_value').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('types')
  }
}

module.exports = TypeSchema
