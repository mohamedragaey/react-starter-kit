import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles((theme) => ({
  logo: {
    display: 'inline-block',
    '& img': {
      [theme.breakpoints.between('md', 'lg')]: {
        width: 180
      },
      [theme.breakpoints.between('sm', 'md')]: {
        width: 150
      },
      [theme.breakpoints.down('sm')]: {
        width: 100
      },
      width: 200,
      transition: 'all 0.3s ease-in-out'
    }
  }
}))
