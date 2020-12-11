'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

// eslint-disable-next-line camelcase
Factory.blueprint('App/Models/Type', (faker, _, { type, description, range, price, max_number, color, min_cart_value }) => {
  return {
    type,
    description,
    range,
    price,
    max_number,
    color,
    min_cart_value
  }
})
