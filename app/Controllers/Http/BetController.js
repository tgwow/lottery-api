'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Bet = use('App/Models/Bet')
const Database = use('Database')
/**
 * Resourceful controller for interacting with bets
 */
class BetController {
  /**
   * Show a list of all bets.
   * GET bets
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ auth }) {
    const id = auth.user.id
    const bets = await Database.table('types')
      .innerJoin('bets', 'types.id', 'bets.type_id')
      .select('bets.id', 'numbers', 'name', 'price', 'bets.created_at as date', 'bets.user_id as user_id').where('user_id', id)

    return bets
  }

  /**
   * Create/save a new bet.
   * POST bets
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const { bets } = request.only(['bets'])
    const id = auth.user.id

    const betsArr = bets.map(bet => {
      return {
        ...bet,
        user_id: id
      }
    })

    try {
      const result = await Bet.createMany(betsArr)

      return result
    } catch (err) {
      console.log(err)
      return response.status(err.status).send(err)
    }
  }

  /**
   * Display a single bet.
   * GET bets/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const id = params.id

    const bets = await Bet
      .query()
      .where('user_id', id)
      .with('type')
      .fetch()

    return bets
  }

  /**
   * Update bet details.
   * PUT or PATCH bets/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a bet with id.
   * DELETE bets/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = BetController
