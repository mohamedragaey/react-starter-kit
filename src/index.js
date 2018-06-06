import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

require('./js/script')

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
if (process.env.NODE_ENV !== 'production') {
  console.log('we are in development mode')
}
