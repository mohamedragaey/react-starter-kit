import React, {Component} from 'react'
import './card.scss'

class Card extends Component {
  render () {
    return (
      <div className='thumbnail'>
        <img src='http://via.placeholder.com/242x200' alt='place holder image' />
        <div className='caption'>
          <h3>Thumbnail label</h3>
          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget
            metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
          <p>
            <a href='#' className='btn btn-primary' role='button'>Button</a>
            <a href='#' className='btn btn-default' role='button'>Button</a></p>
        </div>
      </div>
    )
  }
}

export default Card
