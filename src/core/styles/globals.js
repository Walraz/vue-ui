import { normalize, fontFace } from 'polished'
import base from './base'

const injectFont = () => {
  const link = document.createElement('link')
  link.href =
    'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900'
  link.rel = 'stylesheet'
  document.head.appendChild(link)
}

injectFont()

export default {
  ...normalize(),
  ...fontFace({
    fontFamily: 'Material Icons',
    fontStyle: 'normal',
    fontWeight: 400,
    fileFormats: ['woff2'],
    fontFilePath:
      'https://fonts.gstatic.com/s/materialicons/v22/2fcrYFNaTjcS6g4U3t-Y5UEw0lE80llgEseQY3FEmqw',
  }),
  ...base,
}
