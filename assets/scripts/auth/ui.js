'use strict'

const store = require('../store.js')

const emptyMessage = () => {
  setTimeout(function () {
    $('.message').text('')
  }, 3000)
}

const signUpSuccess = data => {
  $('.message').text('signed up successfully')
  $('.message').attr('class', 'message') // removes all classes except the default class of 'message'
  $('.message').addClass('success')
  console.log('signUpSucces ran. Data is:', data)
  emptyMessage()
}

const signUpFailure = error => {
  $('.message').text('error on sign up')
  $('.message').attr('class', 'message')
  $('.message').addClass('failure')
  console.error('signUpFailure ran. Error is :', error)
  emptyMessage()
}

const signInSuccess = data => {
  console.log(data.user.token)
  store.user = data.user
  $('#signed-out').hide()
  $('#signed-in').show()
  $('.message').text('signed in successfully')
  $('.message').attr('class', 'message')
  $('.message').addClass('success')
  console.log('signInSuccess ran. Data is:', data)
  emptyMessage()
}

const signInFailure = error => {
  $('.message').text('error on sign in')
  $('.message').attr('class', 'message')
  $('.message').addClass('failure')
  console.error('signInFailure ran. Error is :', error)
  emptyMessage()
}

const changePasswordSuccess = data => {
  // console.log(data.user.token)
  $('.message').text('changed password successfully')
  $('.message').attr('class', 'message')
  $('.message').addClass('success')
  console.log('changedPasswordSuccess ran. Data is:', data)
  emptyMessage()
}

const changePasswordFailure = error => {
  $('.message').text('error changing password')
  $('.message').attr('class', 'message')
  $('.message').addClass('failure')
  console.error('changedPasswordFailure ran. Error is :', error)
  emptyMessage()
}

const signOutSuccess = data => {
  $('#signed-in').hide()
  $('#signed-out').show()
  $('.message').text('signed out successfully')
  store.user = {} // or = null
  $('.message').attr('class', 'message')
  $('.message').addClass('success')
  console.log('signOutSuccess ran. Data is:', data)
  emptyMessage()
}

const signOutFailure = error => {
  $('.message').text('error on sign out')
  $('.message').attr('class', 'message')
  $('.message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
  emptyMessage()
}

const newGameSuccess = data => {
  console.log(data.user.token)
  // $('.message').text('You created a new game!')
  // $('.message').attr('class', 'message')
  // $('.message').addClass('success')
  // found 'store.game = data.game' here:
  // https://git.generalassemb.ly/ga-wdi-boston/game-project-api/issues/23
  store.game = data.game
  console.log('newGameSuccess ran. Data is:', data)
  emptyMessage()
}

const newGameFailure = error => {
  // $('.message').text('error on create new game')
  // $('.message').attr('class', 'message')
  // $('.message').addClass('failure')
  console.error('newGameFailure ran. Error is :', error)
  emptyMessage()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure
}
