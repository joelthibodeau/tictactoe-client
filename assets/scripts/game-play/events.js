'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onNewGame = event => {
  event.preventDefault()
  // const data = getFormFields(event.target) NO NEED FOR THIS?
  console.log('onNewGame ran.')
  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

module.exports = {
  onNewGame
}
