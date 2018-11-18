'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createGame = () => {
//   game = {
//     'game': {
//       'cells': ['', '', '', '', '', '', '', '', ''],
//       'over': false,
//       'player_x': {
//         'id': store.user.id,
//         'email': store.user.email
//       },
//       'player_o': null
//     }
//   }
// }
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // data: {}
  })
}

const updateGameMoves = (over, index, value) => {
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
  updateGameMoves
}
