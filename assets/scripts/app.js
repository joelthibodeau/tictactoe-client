'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// const authEvents = require('./auth/events.js')

// A $( document ).ready() block.
const authEvents = require('./auth/events.js')

$(document).ready(function () {
  // console.log('ready!')
  $('#signed-in').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('body').on('hidden.bs.modal', '.modal', function () {
    $(this).find('input[type="text"], input[type="password"],textarea,select').each(function () {
      if (this.defaultValue !== '' || this.value !== this.defaultValue) {
        this.value = this.defaultValue
      } else { this.value = '' }
    })
  })
  // $('.cell').on('click', events.onClickCell)
  // $('.cell').on('click', .onClickCell)
})

let movesMade = 0
const cell0 = document.getElementById('cell0')
const cell1 = document.getElementById('cell1')
const cell2 = document.getElementById('cell2')
const cell3 = document.getElementById('cell3')
const cell4 = document.getElementById('cell4')
const cell5 = document.getElementById('cell5')
const cell6 = document.getElementById('cell6')
const cell7 = document.getElementById('cell7')
const cell8 = document.getElementById('cell8')

// $('#sign-up').on('submit', authEvents.onSignUp)

// creates array with 9 empty strings as values.
let cells = ['', '', '', '', '', '', '', '', '']
let over = false
let currentPlayer = null

// onClickCell plays X if movesMade is odd.
// It playes O if movesMade is even.
const onClickCell = function () {
  const index = $(event.target).attr("class").replace('cell id', '')
  // if statement for when cell is unplayed.
  if (event.target.innerHTML === '' && over === false) {
    console.log(`the starting inner html is: ${event.target.innerHTML}`)
    movesMade++
    console.log(`number of moves made: ${movesMade}`)
    if (movesMade % 2 === 1) {
      event.target.innerHTML = 'x'
      currentPlayer = 'x'
    } else {
      event.target.innerHTML = 'o'
      currentPlayer = 'o'
    }
    // else statement from first if statement.
  } else {
    console.log('not an empty string')
  }
  console.log(`currrent piece played is ${currentPlayer}`)
  console.log(`the ending inner html is: ${event.target.innerHTML}`)
  console.log(cells)
  console.log(`Is the game over: ${over}`)
  if (over === false) {
    checkForWinner()
  }
}

$('.cell').click(onClickCell)

const onClickReset = function () {
  movesMade = 0
  cells = ['', '', '', '', '', '', '', '', '']
  over = false
  currentPlayer = null
  $('.winner').html('')
  $('.cell').html('')

  console.log(`currrent piece played is ${currentPlayer}`)
  console.log(cells)
  console.log(`Is the game over: ${over}`)
  console.log(`number of moves made: ${movesMade}`)
}

$('.reset').click(onClickReset)

const isAWinner = function () {
  over = true
  $('.winner').html(`${currentPlayer} wins!`)
  console.log(`Is the game over: ${over}`)
  console.log('win')
}

const isADraw = function () {
  over = true
  $('.winner').html(`it's a draw!`)
  console.log(`Is the game over: ${over}`)
  console.log(`It's a draw.`)
}

const checkForWinner = function () {
  console.log('check for winner runs')
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

/*

$(() => {
  // your JS code goes here
  const player_x = 'X'
  const player_o = 'O'
  let currentMove = 1
  let movesCompleted = 0
  const box = $('.box')
  const winnerContainer = $('.winner')
  const reset = $('.reset')
  const makeMove = function (e) {
  // code here
  }
  box.on('click', function () {
    movesCompleted++
    // finding odd numbers
    if (event.target.innerHTML === '') { // BEGIN FUNCTION FOR SECOND CLICK
      if (currentMove % 2 === 1) {
        event.target.innerHTML = player_x
        // event.target.style.color = 'red'
        currentMove++
        console.log('X')
      } else {
        event.target.innerHTML = player_o
        // event.target.style.color = 'green'
        currentMove--
        console.log('O')
      }
    }
    // $(this).off('click') TRIED USING .off
    // function boxClick(inner) {
    // if (inner.innerHTML === "X" || inner.innerHTML === "O") {
    //     return;
    // }
    if (checkForWinner()) {
      // if currentMove is equal to 1, player_o wins (because opposite), else player_x wins.
      const theWinner = currentMove === 1 ? player_o : player_x
      declareWinner(theWinner)
    }
  // } END FUNCTION TO PREVENT SECOND CLICK
  })
  reset.on('click', function (e) {
    const moves = Array.prototype.slice.call($('.text'))
    // gets array length?
    // console.log(moves.length)
    moves.map((m) => {
      m.innerHTML = ''
    })
    winnerContainer.html('')
    winnerContainer.css('display', 'none')
    currentMove = 1
    movesCompleted = 0
  })
  function checkForWinner () {
    if (movesCompleted > 4) {
      const moves = Array.prototype.slice.call($('.text'))
      const results = moves.map(function (box) {
        return box.innerHTML
         // console.log(box.innerHTML)
      })
      const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
      return winCombos.find(function (combo) {
        if (results[combo[0]] !== '' &&
         results[combo[1]] !== '' &&
         results[combo[2]] !== '' &&
         results[combo[0]] === results[combo[1]] && results[combo[1]] ===
         results[combo[2]]) {
          return true
        } else {
          return false
        }
      })
    }
  }
  function declareWinner (winner) {
    winnerContainer.css('display', 'block')
    reset.css('display', 'block')
    winner = winner === player_x ? 'x' : 'o'
    winnerContainer.html(winner + ' wins!')
    console.log(winner + ' wins!')
  }
})

*/
