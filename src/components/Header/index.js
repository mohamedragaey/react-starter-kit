import React from 'react'
import { withStyles } from '@material-ui/styles'
import Container from '@material-ui/core/Container'
import LanguageSwitcher from '../LanguageSwitcher'
import { useStyles } from './Styles'
import Logo from '../Logo'

class Header extends React.Component {
  _isMounted = false
  state = {
    class: ''
  }

  componentDidMount () {
    this._isMounted = true
    window.addEventListener('scroll', this.resizeHeaderOnScroll)
  }

  componentWillUnmount () {
    this._isMounted = false
    window.removeEventListener('scroll', this.resizeHeaderOnScroll)
  }

  resizeHeaderOnScroll = () => {
    let distanceY = window.pageYOffset || document.documentElement.scrollTop
    let shrinkOn = 50

    if (distanceY > shrinkOn) {
      this.setState({ class: 'shrink' })
    } else {
      this.setState({ class: '' })
    }
  }

  render () {
    const { classes } = this.props
    let headerClasses = this.state.class ? `${classes.header} ${this.state.class}` : classes.header
    return (
      <header className={headerClasses} id='header'>
        <Container maxWidth="lg">
          <Logo/>
          <LanguageSwitcher/>
        </Container>
      </header>
    )
  }
}

export default withStyles(useStyles)(Header)
