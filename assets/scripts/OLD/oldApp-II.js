'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// const authEvents = require('./auth/events.js')
// A $( document ).ready() block.

/*
$(document).ready(function () {
  const player_x = 'X'
  const player_o = 'O'
  let movesMade = 0
  console.log('ready!')
})

let currentMove = 1

// function checkForWin () {
  const box0 = document.GetElementById('box0')
  const box1 = document.GetElementById('box1')
  const box2 = document.GetElementById('box1')
  const box3 = document.GetElementById('box3')
  const box4 = document.GetElementById('box4')
  const box5 = document.GetElementById('box5')
  const box6 = document.GetElementById('box6')
  const box7 = document.GetElementById('box7')
  const box8 = document.GetElementById('box8')
// }
// check for all possible wins
if (box0.innerHTML !== '' && box0.innerHTML === box1.innerHTML && box0.innerHTML === box2.innerHTML) {
  console.log('win')
} else if (box3.innerHTML !== '' && box3.innerHTML === box4.innerHTML && box3.innerHTML === box5.innerHTML) {
  console.log('win')
} else if (box6.innerHTML !== '' && box6.innerHTML === box7.innerHTML && box6.innerHTML === box8.innerHTML) {
  console.log('win')
} else if (box0.innerHTML !== '' && box0.innerHTML === box3.innerHTML && box0.innerHTML === box6.innerHTML) {
  console.log('win')
} else if (box1.innerHTML !== '' && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
    console.log('win')
} else if (box2.innerHTML !== '' && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
    console.log('win')
} else if (box0.innerHTML !== '' && box0.innerHTML === box4.innerHTML && box0.innerHTML === box8.innerHTML) {
    console.log('win')
} else if (box2.innerHTML !== '' && box2.innerHTML === box4.innerHTML && box2.innerHTML === box6.innerHTML) {
    console.log('win')
}
*/

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
