'use strict'

/*
|--------------------------------------------------------------------------
| TypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class TypeSeeder {
  async run () {
    const lotofacil = await Factory
      .model('App/Models/Type')
      .create({
        type: 'Lotofácil',
        description: 'Escolha 15 números para apostar na lotofácil. Você ganha acertando 11, 12, 13, 14 ou 15 números. São muitas chances de ganhar, e agora você joga de onde estiver!',
        range: 25,
        price: 2.5,
        max_number: 15,
        color: '#7F3992',
        min_cart_value: 30
      })
    console.log(lotofacil)
  }
}

module.exports = TypeSeeder
