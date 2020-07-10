import { shade } from 'polished'
import { DefaultTheme } from './styled'

const defaultTheme: DefaultTheme = {
  white: '#F4F4F4',
  grey: shade(0.3, '#F4F4F4'),
  opaque: '#41414D',
  purple: '#6633cc',
  purpleDark: '#5A4B81',
  green: '#67e480',
  orange: '#FF7C3F',
  pink: '#FF79C6',
  blue: '#5964FF',
  red: '#E96379',
  yellow: '#e7de79',
  background: {
    lightest: '#252131',
    lighter: '#201B2D',
    dark: '#191B21',
    darker: '#15121E',
    darkest: '#13111B'
  }
}

export default defaultTheme
