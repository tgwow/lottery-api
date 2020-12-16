'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('users', 'UserController.store').validator('User')
Route.get('users', 'UserController.index')
Route.post('sessions', 'SessionController.store').validator('Session')
Route.get('sessions', 'SessionController.index')

Route.post('forgot_password', 'ForgotPasswordController.store').validator('ForgotPassword')
Route.put('forgot_password', 'ForgotPasswordController.update').validator('ResetPassword')

Route.group(() => {
  Route.get('types', 'TypeController.index')

  Route.resource('/bets', 'BetController')
    .apiOnly()
    .validator(new Map([
      [['bets.store'], ['Bet']]
    ]))
}).middleware(['auth'])

