import React from 'react'
import { Helmet } from 'react-helmet'
import ar from 'react-intl/locale-data/ar'
import en from 'react-intl/locale-data/en'
import arMessages from './translations/ar.json'
import enMessages from './translations/en.json'
import { IntlProvider, addLocaleData } from 'react-intl'

addLocaleData([...en, ...ar])

const {Provider, Consumer} = React.createContext()

class IntlProviderWrapper extends React.Component {
  constructor (...args) {
    super(...args)

    this.switchToEnglish = () =>
      this.setState({locale: 'en', messages: enMessages, styleSheet: 'dist/css/app.css', dir: 'ltr'})

    this.switchToArabic = () =>
      this.setState({locale: 'ar', messages: arMessages, styleSheet: 'dist/css/app-rtl.css', dir: 'rtl'})

    // pass everything in state to avoid creating object inside render method
    this.state = {
      locale: 'en',
      messages: enMessages,
      styleSheet: 'dist/css/app.css',
      dir: 'ltr',
      switchToEnglish: this.switchToEnglish,
      switchToArabic: this.switchToArabic
    }
  }

  render () {
    const {children} = this.props
    const {locale, messages, styleSheet, dir} = this.state
    return (
      <Provider value={this.state}>
        <Helmet>
          <html lang={locale} dir={dir} />
          <link type='text/css' rel='stylesheet' href={styleSheet} />
        </Helmet>
        <IntlProvider
          key={locale}
          locale={locale}
          messages={messages}
          defaultLocale='en'
        >
          {children}
        </IntlProvider>
      </Provider>
    )
  }
}

export { IntlProviderWrapper as IntlProvider, Consumer as IntlConsumer }
