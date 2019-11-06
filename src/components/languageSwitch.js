import React from 'react'
import { IntlConsumer } from '../IntlContext'

const LanguageSwitch = () => (
  <IntlConsumer>
    {({switchToEnglish, switchToArabic}) => (
      <React.Fragment>
        <button onClick={switchToEnglish}> English</button>
        <button onClick={switchToArabic}>عربي</button>
      </React.Fragment>
    )}
  </IntlConsumer>
)
export default LanguageSwitch