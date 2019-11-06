import React, { Component } from 'react'
import LanguageSwitch from '../languageSwitch'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false
    }
    this.onClick = this.onClick.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  onClick () {
    this.setState({
      collapse: !this.state.collapse
    })
  }

  toggle () {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render () {
    return (
      <div className='container'>
        <LanguageSwitch />
      </div>
    )
  }
}

export default Header
