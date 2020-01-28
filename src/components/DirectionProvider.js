import React, { PureComponent } from 'react'
import { create } from 'jss'
import rtl from 'jss-rtl'
import { StylesProvider, ThemeProvider, jssPreset } from '@material-ui/styles'
import { createGenerateClassName, createMuiTheme } from '@material-ui/core/styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { Cairo } from '../utils/Fonts'
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] })
const generateClassName = createGenerateClassName()

class DirectionProvider extends PureComponent {
  state = {
    font: ''
  }

  componentWillMount () {
    this.getAppFontName()
  }

  getAppFontName = async () => {
    let storageFont = await localStorage.getItem('AppFontName')
    if (!storageFont) {
      this.setState({ font: Cairo })
    } else {
      this.setState({ font: storageFont })
    }
  }

  render () {
    const { children } = this.props
    let theme = createMuiTheme({
      direction: localStorage.getItem('AppDirection'),
      palette: {
        primary: {
          main: '#f59423'
        },
        secondary: {
          main: '#5f5f5f'
        }
      },
      typography: {
        'fontFamily': this.state.font,
        'fontSize': 14,
        'fontWeightLight': 300,
        'fontWeightRegular': 400,
        'fontWeightMedium': 500
      }
      // breakpoints: { values: { xs: 0, sm: 768, md: 992, lg: 1200 } }
    })

    return (
      <StylesProvider jss={jss} generateClassName={generateClassName}>
        <ThemeProvider theme={theme}>
          <Router>
            {children}
          </Router>
        </ThemeProvider>
      </StylesProvider>
    )
  }
}

export default DirectionProvider
