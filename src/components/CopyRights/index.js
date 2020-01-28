import React from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { useStyles } from './Styles'

const CopyRights = () => {
  const classes = useStyles()
  return (
    <div className={classes.footerCopyRights}>
      © {new Date().getFullYear()} <FormattedMessage id='All rights reserved by'/>
      {` `}
      <Link to="/"><FormattedMessage id='Arkdev'/></Link>
    </div>
  )
}

export default CopyRights
