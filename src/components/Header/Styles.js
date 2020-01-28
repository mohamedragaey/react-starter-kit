export const useStyles = (theme) => ({
  header: {
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    zIndex: 1000,
    backgroundColor: theme.palette.primary.main,
    transition: 'all 0.5s ease-in-out',
    '& .MuiContainer-root': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }
})
