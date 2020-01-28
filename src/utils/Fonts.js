import WebFont from 'webfontloader'
import './icons.css'

export const Cairo = 'Cairo'
export const Lato = 'Lato'
const GoogleFonts = () => {
  WebFont.load({
    google: {
      families: ['Cairo|Lato:300,400,600', 'sans-serif']
    }
  })
}
export default GoogleFonts
