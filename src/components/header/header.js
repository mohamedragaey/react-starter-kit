import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink
} from 'mdbreact'
import { FormattedMessage } from 'react-intl'
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
      <Navbar color='indigo' dark expand='md' scrolling>
        <div className='container'>
          <NavbarBrand tag='div'>
            <NavLink className='logo-link' to='/'>Home</NavLink>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem><NavLink to='/'><FormattedMessage id='home.nav.home' /></NavLink></NavItem>
              <NavItem><NavLink to='/About'><FormattedMessage id='home.nav.about' /></NavLink></NavItem>
              <NavItem><NavLink to='/Topics'><FormattedMessage id='home.nav.topics' /></NavLink></NavItem>
            </NavbarNav>
            <NavbarNav right><LanguageSwitch /></NavbarNav>
          </Collapse>
        </div>
      </Navbar>
    )
  }
}

export default Header
