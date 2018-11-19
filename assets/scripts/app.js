'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// const authEvents = require('./auth/events.js')

// A $( document ).ready() block.
const authEvents = require('./auth/events.js')
const gamePlayEvents = require('./game-play/events.js')
const gamePlayApi = require('./game-play/api.js')
const store = require('./store.js')

$(document).ready(function () {
  // console.log('ready!')
  authEvents.addAuthHandlers()
  gamePlayEvents.addGamePlayHandlers()
  $('.cell').click(onClickCell)
  // $('.reset').click(onClickReset)
  $('.new-game').click(onClickReset)
  $('#signOutModal').click(onClickReset)

  $('body').on('hidden.bs.modal', '.modal', function () {
    $(this).find('input[type="text"], input[type="password"],textarea,select').each(function () {
      if (this.defaultValue !== '' || this.value !== this.defaultValue) {
        this.value = this.defaultValue
      } else { this.value = '' }
    })
  })
})

let movesMade = 0
const cell0 = document.getElementById('0')
const cell1 = document.getElementById('1')
const cell2 = document.getElementById('2')
const cell3 = document.getElementById('3')
const cell4 = document.getElementById('4')
const cell5 = document.getElementById('5')
const cell6 = document.getElementById('6')
const cell7 = document.getElementById('7')
const cell8 = document.getElementById('8')

// $('#sign-up').on('submit', authEvents.onSignUp)

// creates array with 9 empty strings as values.
let cells = ['', '', '', '', '', '', '', '', '']
let over = false
let currentPlayer = null
// let gameMoves = null
// const board = $('.board')

// onClickCell plays X if movesMade is odd.
// It playes O if movesMade is even.


const storeMove = function (currentPlayer, arrayIndex) {
  // put currentPlayer into specific array index of cells.
  cells[arrayIndex] = currentPlayer
}

const onClickCell = function (event) {
  // const index = $(event.target).attr('class').replace('cell id', '')
  // if statement for when cell is unplayed.
  let arrayIndex
  if (event.target.innerHTML === '' && over === false && store.game !== undefined) {
    // console.log(`the starting inner html is: ${event.target.innerHTML}`)
    movesMade++
    // console.log(`number of moves made: ${movesMade}`)
    if (movesMade % 2 === 1) {
      event.target.innerHTML = 'x'
      currentPlayer = 'x'
      // cells = $('.board').map((i, board) => board.innerHTML).get()
      // console.log(cells)
    } else {
      event.target.innerHTML = 'o'
      currentPlayer = 'o'
    }
    arrayIndex = $(event.target).attr('id')
    // TODO make this dynamic
    storeMove(currentPlayer, arrayIndex)
    // else statement from first if statement.
    checkForWinner()
    gamePlayApi.updateGameMoves(over, arrayIndex, currentPlayer)
    // then passes return of ajax request into console log
    // .then(console.log)
  } else {
    // console.log('not an empty string')
  }
  // console.log(`currrent piece played is ${currentPlayer}`)
  // console.log(`the ending inner html is: ${event.target.innerHTML}`)
  // console.log(cells)
  // console.log(`Is the game over: ${over}`)
}

const onClickReset = function () {
  movesMade = 0
  cells = ['', '', '', '', '', '', '', '', '']
  over = false
  currentPlayer = null
  store.game = undefined
  $('.winner').html('')
  $('.cell').html('')

  // console.log(`currrent piece played is ${currentPlayer}`)
  // console.log(cells)
  // console.log(`Is the game over: ${over}`)
  // console.log(`number of moves made: ${movesMade}`)
}

const isAWinner = function () {
  over = true
  $('.winner').html(`${currentPlayer} wins!`)
  // console.log(`Is the game over: ${over}`)
  // console.log('win')
}

const isADraw = function () {
  over = true
  $('.winner').html(`it's a draw!`)
  // console.log(`Is the game over: ${over}`)
  // console.log(`It's a draw.`)
}

const checkForWinner = function () {
  // console.log('check for winner runs')
  // check for all possible wins
  // check all rows
  if (cell0.innerHTML !== '' && cell0.innerHTML === cell1.innerHTML && cell0.innerHTML === cell2.innerHTML) {
    isAWinner()
  } else if (cell3.innerHTML !== '' && cell3.innerHTML === cell4.innerHTML && cell3.innerHTML === cell5.innerHTML) {
    isAWinner()
  } else if (cell6.innerHTML !== '' && cell6.innerHTML === cell7.innerHTML && cell6.innerHTML === cell8.innerHTML) {
    isAWinner()
    // check all columns
  } else if (cell0.innerHTML !== '' && cell0.innerHTML === cell3.innerHTML && cell0.innerHTML === cell6.innerHTML) {
    isAWinner()
  } else if (cell1.innerHTML !== '' && cell1.innerHTML === cell4.innerHTML && cell1.innerHTML === cell7.innerHTML) {
    isAWinner()
  } else if (cell2.innerHTML !== '' && cell2.innerHTML === cell5.innerHTML && cell2.innerHTML === cell8.innerHTML) {
    isAWinner()
    // check diagonal l–>r, r–>l
  } else if (cell0.innerHTML !== '' && cell0.innerHTML === cell4.innerHTML && cell0.innerHTML === cell8.innerHTML) {
    isAWinner()
  } else if (cell2.innerHTML !== '' && cell2.innerHTML === cell4.innerHTML && cell2.innerHTML === cell6.innerHTML) {
    isAWinner()
  } else if (movesMade === 9) {
    isADraw()
  }
}

// possible future jQuery solution.
// if ($('#cell0').html !== '' && cell0.innerHTML === cell1.innerHTML && cell0.innerHTML === cell2.innerHTML) {
