import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes' // where we are going to specify our routes
import './assets/styles/app.scss'
import 'mdbreact/dist/scss/mdb.scss'
import Header from './components/header/header'
import FooterPage from './components/footer/footer'
import { IntlProvider } from './IntlContext'

ReactDOM.render(
  <IntlProvider>
    <Router>
      <main className='page-wrapper'>
        <Header />
        <div className='content'>
          <Routes />
        </div>
        <FooterPage />
      </main>
    </Router>
  </IntlProvider>,
  document.getElementById('app')
)
if (process.env.NODE_ENV !== 'production') {
  console.log('we are in development mode')
}
