import React from 'react'
import { Col, Container, Row, Footer } from 'mdbreact'
import { Link } from 'react-router-dom'

class FooterPage extends React.Component {
  render () {
    return (
      <Footer color='blue' className='font-small pt-4 mt-4'>
        <Container className='text-center text-md-left'>
          <Row>
            <Col sm='6'>
              <h5 className='title'>Footer Content</h5>
              <p>Here you can use rows and columns here to organize your footer content.</p>
            </Col>
            <Col sm='6'>
              <h5 className='title'>Links</h5>
              <ul>
                <li className='list-unstyled'><Link to='/'>Home</Link></li>
                <li className='list-unstyled'><Link to='About'>About</Link></li>
                <li className='list-unstyled'><Link to='/Topics'>Topics</Link></li>
                <li className='list-unstyled'><Link to='/404'>404</Link></li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className='footer-copyright text-center py-3'>
          <Container fluid>
            &copy; {(new Date().getFullYear())} Copyright: <a href='https://mohamedragaey.github.io' target='_blank'> Mohamed Ragaey </a>
          </Container>
        </div>
      </Footer>
    )
  }
}

export default FooterPage
