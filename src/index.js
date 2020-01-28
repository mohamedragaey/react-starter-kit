import React from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider } from './IntlContext'
import * as serviceWorker from './serviceWorker'
import DirectionProvider from './components/DirectionProvider'
import Layout from './components/Layout'

ReactDOM.render(
  <IntlProvider>
    <DirectionProvider>
      <Layout/>
    </DirectionProvider>
  </IntlProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
