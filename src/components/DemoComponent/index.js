/**
 * Demo component for Demo purpose only
 */

import React from 'react'
import { Fade } from 'react-reveal'
import Grid from '@material-ui/core/Grid'
import { FormattedMessage } from 'react-intl'
import { withStyles } from '@material-ui/styles'
import Container from '@material-ui/core/Container'
import { useStyles } from './Styles'
import TalentServices from '../../Services/Consumers/TalentServices'
import FanServices from '../../Services/Consumers/FanServices'
import { StorageService } from '../../Services/StorageService'

class DemoComponent extends React.PureComponent {
  componentDidMount () {
    /**
     * How To Call get Talent data
     */
    TalentServices.getTalentData().then((response) => {
      console.log('talent data', response)
      StorageService.set('TalentData', response.data)
        .then((r) => {
          console.log('StorageService', StorageService.get('TalentData'))
          StorageService.removeItem('TalentData')
            .then(r => console.log('StorageService should be removed', StorageService.get('TalentData')))
        })
    })
    /**
     * How To Call Post fan data
     */
    FanServices.postFanData({
      body: JSON.stringify({
        name: 'Mohamed Ragaey',
        username: 'Frontend Developer',
        id: 1
      })
    }).then((response) => {console.log('fan data', response)})
    /**
     * How To Call get fan data
     */
    FanServices.getFanData().then((response) => {console.log('fan data', response)})
  }

  render () {
    const { classes } = this.props
    return (
      <Fade>
        <section>
          <Container maxWidth="lg">
            <Grid container justify='center'>
              <Grid item xs={12}>
                <div className={classes.demoWrapper}>
                  <h1><FormattedMessage id='DemoTitle'/></h1>
                  <p><FormattedMessage id='DemoDescription'/></p>
                  <i className='icon-heart'/>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
      </Fade>
    )
  }
}

export default withStyles(useStyles)(DemoComponent)
