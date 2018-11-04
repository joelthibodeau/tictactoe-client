'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// const authEvents = require('./auth/events.js')
// A $( document ).ready() block.
const player_x = 'X'
const player_o = 'O'
let movesMade = 0
// let currentMove = 1
// let play = true
const cells = ['', '', '', '', '', '', '', '', '']

$(document).ready(function () {
  console.log('ready!')
})

$('.cell').click(function () {
  // finding odd numbers
  movesMade++
  console.log(movesMade)
  if (event.target.innerHTML === '') { // BEGIN FUNCTION FOR SECOND CLICK
    if (movesMade % 2 === 1) {
      event.target.innerHTML = player_x
      console.log('X')
    } else {
      event.target.innerHTML = player_o
      console.log('O')
    }
  }
})

const checkForWinner = function () {
  const cell0 = document.GetElementById('cell0')
  const cell1 = document.GetElementById('cell1')
  const cell2 = document.GetElementById('cell2')
  const cell3 = document.GetElementById('cell3')
  const cell4 = document.GetElementById('cell4')
  const cell5 = document.GetElementById('cell5')
  const cell6 = document.GetElementById('cell6')
  const cell7 = document.GetElementById('cell7')
  const cell8 = document.GetElementById('cell8')

  // check for all possible wins
  // check all rows
  if (cell0.innerHTML !== '' && cell0.innerHTML === cell1.innerHTML && cell0.innerHTML === cell2.innerHTML) {
    console.log('win')
  } else if (cell3.innerHTML !== '' && cell3.innerHTML === cell4.innerHTML && cell3.innerHTML === cell5.innerHTML) {
    console.log('win')
  } else if (cell6.innerHTML !== '' && cell6.innerHTML === cell7.innerHTML && cell6.innerHTML === cell8.innerHTML) {
    console.log('win')
    // check all columns
  } else if (cell0.innerHTML !== '' && cell0.innerHTML === cell3.innerHTML && cell0.innerHTML === cell6.innerHTML) {
    console.log('win')
  } else if (cell1.innerHTML !== '' && cell1.innerHTML === cell4.innerHTML && cell1.innerHTML === cell7.innerHTML) {
    console.log('win')
  } else if (cell2.innerHTML !== '' && cell2.innerHTML === cell5.innerHTML && cell2.innerHTML === cell8.innerHTML) {
    console.log('win')
    // check diagonal l–>r, r–>l
  } else if (cell0.innerHTML !== '' && cell0.innerHTML === cell4.innerHTML && cell0.innerHTML === cell8.innerHTML) {
    console.log('win')
  } else if (cell2.innerHTML !== '' && cell2.innerHTML === cell4.innerHTML && cell2.innerHTML === cell6.innerHTML) {
    console.log('win')
  }
}

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
