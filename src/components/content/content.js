import React, {Component} from 'react'
import ErrorBoundary from './../ErrorBoundary'
import Card from './../card/card'
import { FormattedMessage } from 'react-intl'

class Content extends Component {
  render () {
    return (
      <section className='content'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-sm-3 col-md-4'>
              <ErrorBoundary>
                <h3><FormattedMessage id='home.welcome' /></h3>
                <Card />
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Content
