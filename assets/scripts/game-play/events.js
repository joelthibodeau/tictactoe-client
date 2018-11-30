'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateGame = event => {
  event.preventDefault()
  // const data = getFormFields(event.target) NO NEED FOR THIS?
  // console.log('onCreateGame ran.')
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onGetStats = event => {
  event.preventDefault()
  // console.log('onGetStats ran.')
  api.getGamesPlayed()
    .then((result) => {
      console.log(result)
      $('#gameStatsData').html('hey')
    })
    // .catch(ui.createGameFailure)
}

// const onGetGamesPlayedSuccess = game => {
//   const getGamesPlayed = game.games.length
//   $('#allGamesMessage').text(`You have played ${getGames} games so far on this account. Click
//     past games button again to refresh!`).addClass('allgames')

const addGamePlayHandlers = () => {
  $('#stats-button').on('click', onGetStats)
  $('.new-game').on('click', onCreateGame)
}

module.exports = {
  onCreateGame,
  addGamePlayHandlers
}
