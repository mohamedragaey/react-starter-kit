import React, {Component} from 'react'
import ErrorBoundary from './../ErrorBoundary'
import Card from './../card/card'
import './content.scss'

class Content extends Component {
  render () {
    return (
      <section className='content'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-sm-3 col-md-4'>
              <ErrorBoundary>
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
