'use strict'

const store = require('../store.js')

const createGameSuccess = data => {
  // console.log(data.user.token)
  // $('.message').text('You created a new game!')
  // $('.message').attr('class', 'message')
  // $('.message').addClass('success')
  // found 'store.game = data.game' here:
  // https://git.generalassemb.ly/ga-wdi-boston/game-project-api/issues/23
  store.game = data.game
  console.log('createGameSuccess ran. Data is:', data)
}

const createGameFailure = error => {
  // $('.message').text('error on create new game')
  // $('.message').attr('class', 'message')
  // $('.message').addClass('failure')
  console.error('createGameFailure ran. Error is :', error)
}

module.exports = {
  createGameSuccess,
  createGameFailure
}
