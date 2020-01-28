/**
 * Footer component
 */

import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import CopyRights from './../CopyRights'
import { useStyles } from './Styles'

const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer} id='footer'>
      <Container maxWidth="lg">
        <Grid container justify='center'>
          <Grid item xs={12}>
            <CopyRights/>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
