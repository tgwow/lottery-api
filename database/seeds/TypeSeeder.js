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
    await Factory
      .model('App/Models/Type')
      .create({
        name: 'Lotofácil',
        description: 'Escolha 15 números para apostar na lotofácil. Você ganha acertando 11, 12, 13, 14 ou 15 números. São muitas chances de ganhar, e agora você joga de onde estiver!',
        range: 25,
        price: 2.5,
        max_number: 15,
        color: '#7F3992',
        min_cart_value: 30
      })
    await Factory
      .model('App/Models/Type')
      .create({
        name: 'Mega-Sena',
        description: 'Escolha  6 números dos 60 disponíveis na mega-sena. Ganhe com 6, 5 ou 4 acertos. São realizados dois sorteios semanais para você apostar e torcer para ficar milionário.',
        range: 60,
        price: 4.5,
        max_number: 6,
        color: '#01AC66',
        min_cart_value: 30
      })
    await Factory
      .model('App/Models/Type')
      .create({
        name: 'Quina',
        description: 'Escolha 5 números dos 80 disponíveis na quina.  5, 4, 3 ou 2 acertos. São seis sorteios semanais e seis chances de ganhar.',
        range: 80,
        price: 2,
        max_number: 5,
        color: '#F79C31',
        min_cart_value: 30
      })
  }
}

module.exports = TypeSeeder
