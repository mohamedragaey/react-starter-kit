/**
 * Main Script file
 * Here you can add all your cutome scripts and requires.
 */
try {
  window.$ = window.jQuery = require('jquery')
  require('./bootstrap-sass')
  require('./partials/hashLocation')
} catch (e) {
  console.log('Error Message: ' + e.message)
}
