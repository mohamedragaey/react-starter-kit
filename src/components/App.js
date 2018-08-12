import React, {Component} from 'react'
import Header from './header/header'
import Content from './content/content'
import FooterPage from './footer/footer'
import '../styles/app.scss'
import 'mdbreact/dist/scss/mdb.scss'

class App extends Component {
  state = {
    loading: true
  }

  componentDidMount () {
    setTimeout(() => this.setState({loading: false}), 1500) // simulates an async action, and hides the spinner
  }

  render () {
    const {loading} = this.state
    if (loading) { // if your component doesn't have to wait for an async action, remove this block
      return null // render null when app is not ready
    }
    return (
      <main className='page-wrapper'>
        <Header />
        <Content />
        <FooterPage />
      </main>
    )
  }
}

export default App
