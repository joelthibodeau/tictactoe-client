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
      // console.log(result)
      // code inspired by memory game exercise
      // 1. create new div
      // 2. add id to newly created div
      // 3. add class to newly created div
      // 4. make newly created div the child of #gameStatsData div
      // 5. add game stats result to the newly created div for specific game
      for (let i = 0; i < result.games.length; i++) {
        const elementStats = document.createElement('div') // 1.
        elementStats.setAttribute('id', 'stats-game-' + i) // 2.
        elementStats.setAttribute('class', 'stats-game-element') // 3.
        document.getElementById('gameStatsData').appendChild(elementStats) // 4.
        document.getElementById('stats-game-' + i).innerHTML = 'Game #' + (i + 1) + ' pieces played: ' + result.games[i].cells // 5.
      }
    })
    .catch((error) => {
      console.log(error)
    })
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
