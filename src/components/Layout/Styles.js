/**
 * General Styles For The Layout
 * @type {function(*): {}}
 */
export const useStyles = ((theme) => ({
  '@global': {
    html: { height: '100%' },
    body: { height: '100%' },
    '#root': { height: '100%' }
  },
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  content: {
    flex: '1 1 auto'
  }
}))
