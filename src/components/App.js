import React, {Component} from 'react'
import Header from './header/header'
import Content from './content/content'
import Footer from './footer/footer'
import './app.scss'

class App extends Component {
  render () {
    return (
      <main className='page-wrapper'>
        <Header />
        <Content />
        <Footer />
      </main>
    )
  }
}

export default App
