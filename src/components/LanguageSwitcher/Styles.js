import { makeStyles } from '@material-ui/core/styles'
import { white } from '../../utils/colors'

export const useStyles = makeStyles((theme) => ({
  languageSwitcherWrapper: {
    marginLeft: 10,
    position: 'relative',
    '& .item-box': {
      top: 0,
      left: 0,
      width: 42,
      height: 42,
      position: 'absolute',
      background: 'transparent',
      border: '1px solid transparent',
      pointerEvents: 'none',
      transition: 'all 0.5s cubic-bezier(1, 0.01, 0, 1.22)',
      [theme.breakpoints.between('sm', 'md')]: {
        height: 38
      }
    }
  },
  languageSwitcherButton: {
    width: 44,
    color: theme.palette.primary.main,
    backgroundColor: white,
    padding: 12,
    display: 'inline-block',
    border: `1px solid ${theme.palette.grey.A700}`,
    transition: 'all 0.3s ease-in-out',

    '&:not(:last-of-type)': {
      borderRight: 0
    },

    '&:nth-child(1):hover ~ .item-box': {
      transform: 'translate3d(0, 0, 0)',
      border: `1px solid ${theme.palette.primary.main}`
    },

    '&:nth-child(2):hover ~ .item-box': {
      transform: 'translate3d(100%, 0, 0)',
      border: `1px solid ${theme.palette.primary.main}`
    },

    '&:nth-child(3):hover ~ .item-box': {
      transform: 'translate3d(200%, 0, 0)',
      border: `1px solid ${theme.palette.primary.main}`
    },

    '&:hover': {
      color: theme.palette.primary.main
    },

    [theme.breakpoints.between('sm', 'md')]: {
      padding: 10
    }
  }
}))
