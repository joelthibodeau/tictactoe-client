'use strict'

const store = require('../store.js')

const emptyMessage = () => {
  setTimeout(function () {
    $('.message').text('')
  }, 3000)
}

const signUpSuccess = data => {
  $('.message').text('signed up successfully')
  $('.message').attr('class', 'message') // removes all classes except the default of 'message'
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
  $('.message').text('Error on sign in')
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
  $('.message').text('Error on sign out')
  $('.message').attr('class', 'message')
  $('.message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
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
  signOutFailure
}
