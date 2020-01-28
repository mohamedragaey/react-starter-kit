import React from 'react'
import { IntlConsumer } from '../../IntlContext'
import { FormattedMessage } from 'react-intl'
import { useStyles } from './Styles'

let en = 'En'
let ar = 'Ar'

const LanguageSwitcher = () => {
  const classes = useStyles()
  return (
    <IntlConsumer>
      {({ switchToEnglish, switchToArabic }) => (
        <div className={classes.languageSwitcherWrapper} id='languageSwitcher'>
          <button onClick={switchToEnglish}
                  className={classes.languageSwitcherButton}
                  title='Switch to English language'
                  id='enLanguage'
          ><FormattedMessage id={en}/>
          </button>
          <button onClick={switchToArabic}
                  className={classes.languageSwitcherButton}
                  title='Switch to Arabic language'
                  id='arLanguage'
          ><FormattedMessage id={ar}/>
          </button>
          <span className="item-box"/>
        </div>
      )}
    </IntlConsumer>
  )
}
export default LanguageSwitcher
