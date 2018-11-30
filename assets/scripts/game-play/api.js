'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data: {}
  })
}

const getGamesPlayed = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data: {}
  })
}

const updateGameMoves = (over, index, value, cells) => {
  const gameMoves = {
    'game': {
      'cell': {
        'index': index,
        'value': value
      },
      'over': over
    }
  }
  console.log('game moves', gameMoves)
  console.log(cells)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: gameMoves
  })
}

module.exports = {
  createGame,
  getGamesPlayed,
  updateGameMoves
}
