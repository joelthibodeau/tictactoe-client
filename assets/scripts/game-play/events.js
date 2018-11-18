'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateGame = event => {
  event.preventDefault()
  // const data = getFormFields(event.target) NO NEED FOR THIS?
  console.log('onCreateGame ran.')
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const addGamePlayHandlers = () => {
  $('.new-game').on('click', onCreateGame)
}

module.exports = {
  onCreateGame,
  addGamePlayHandlers
}
