import React from 'react'
import { Helmet } from 'react-helmet'
import { IntlProvider } from 'react-intl'
import arMessages from './translations/ar.json'
import enMessages from './translations/en.json'
import GoogleFonts, { Cairo, Lato } from './utils/Fonts'

const { Provider, Consumer } = React.createContext()

class IntlProviderWrapper extends React.Component {
  constructor (...args) {
    super(...args)

    GoogleFonts()

    this.switchToEnglish = () => {
      this.setState({ locale: 'en', messages: enMessages, dir: 'ltr' })
      localStorage.setItem('AppLanguage', 'en')
      localStorage.setItem('AppDirection', 'ltr')
      localStorage.setItem('AppFontName', Lato)
    }

    this.switchToArabic = () => {
      this.setState({ locale: 'ar', messages: arMessages, dir: 'rtl' })
      localStorage.setItem('AppLanguage', 'ar')
      localStorage.setItem('AppDirection', 'rtl')
      localStorage.setItem('AppFontName', Cairo)
    }

    this.state = {
      dir: 'rtl',
      locale: 'ar',
      font: Cairo,
      messages: arMessages,
      loading: true,
      switchToArabic: this.switchToArabic,
      switchToEnglish: this.switchToEnglish
    }
  }

  getAppLanguage = async () => {
    let lang = await localStorage.getItem('AppLanguage') ? await localStorage.getItem('AppLanguage') : this.state.locale
    let dir = await localStorage.getItem('AppDirection') ? await localStorage.getItem('AppDirection') : this.state.dir
    let font = await localStorage.getItem('AppFontName') ? await localStorage.getItem('AppFontName') : this.state.font
    lang === 'ar' ? this.setState({ messages: arMessages }) : this.setState({ messages: enMessages })
    this.setState({ locale: lang, dir: dir, font: font })
  }

  componentWillMount () {
    this.getAppLanguage()
  }

  render () {
    let title = 'Arkdev'
    const { children } = this.props
    const { locale, messages, dir } = this.state
    return (
      <Provider value={this.state}>
        <Helmet>
          <html lang={locale} dir={dir}/>
          <body dir={dir}/>
          <title>{title}</title>
        </Helmet>
        <IntlProvider
          key={locale}
          locale={locale}
          messages={messages}
          defaultLocale='ar'
        >
          {children}
        </IntlProvider>
      </Provider>
    )
  }
}

export { IntlProviderWrapper as IntlProvider, Consumer as IntlConsumer }
