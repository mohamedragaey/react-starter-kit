/**
 * Not Found component
 */

import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { FormattedMessage } from 'react-intl'
import { useStyles } from './Styles'
import { Fade } from 'react-reveal'

const NotFound = () => {
  const classes = useStyles()
  return (
    <Fade>
      <section>
        <Container maxWidth="lg">
          <Grid container justify='center'>
            <Grid item xs={12}>
              <div className={classes.demoWrapper}>
                <h1><FormattedMessage id='not_found'/></h1>
                <p><FormattedMessage id='DemoDescription'/></p>
                <i className='icon-close'/>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </Fade>
  )
}

export default NotFound
