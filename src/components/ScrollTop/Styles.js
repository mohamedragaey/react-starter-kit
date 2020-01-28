import { white } from '../../utils/colors'

export const useStyles = ((theme) => ({
  scrollTop: {
    position: 'fixed',
    bottom: 10,
    right: 10,
    opacity: 0,
    visibility: 'hidden',
    width: 50,
    height: 50,
    borderRadius: '50%',
    border: `1px solid ${theme.palette.grey.A400}`,
    transition: `all 0.9s ease-in-out`,
    display: 'flex',
    cursor: 'pointer',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
    fontSize: 32,
    zIndex: 100,
    transform: 'translateY(0)',

    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: white,
      borderColor: theme.palette.primary.main,
      animationDuration: '1.5s',
      animationFillMode: 'both',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      animationName: 'bounce'
    },

    '&.active': {
      opacity: 1,
      visibility: 'visible',
      animationDuration: '1.5s',
      animationFillMode: 'both',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      animationName: 'bounce'
    }
  }
}))
