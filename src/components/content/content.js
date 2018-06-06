import React, {Component} from 'react'
import ErrorBoundary from './../ErrorBoundary'
import Loadable from 'react-loadable'
import Loading from '../loading/loading'
import './content.scss'

const Cards = Loadable({
  loader: () => import('./../header/header'),
  loading: Loading
})

class Content extends Component {
  render () {
    return (
      <section className='content'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-sm-3 col-md-4'>
              <ErrorBoundary>
                <Cards />
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Content
