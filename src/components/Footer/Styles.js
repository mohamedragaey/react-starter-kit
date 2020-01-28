import { makeStyles } from '@material-ui/core/styles'
import { white } from '../../utils/colors'

export const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: white,
    boxShadow: `0 0 9px rgba(0,0,0, 0.15)`,
    padding: theme.spacing(2, 0),
    zIndex: 1
  },
  footerCopyRights: {
    color: theme.palette.secondary.main,
    textAlign: 'center'
  }
}))
