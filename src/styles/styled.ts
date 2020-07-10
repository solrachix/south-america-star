import 'styled-componets'

interface Theme {
  white: string;
  grey: string;
  opaque: string;
  purple: string;
  purpleDark: string;
  green: string;
  orange: string;
  pink: string;
  blue: string;
  red: string;
  yellow: string;
  background: {
    lightest: string;
    lighter: string;
    dark: string;
    darker: string;
    darkest: string;
  }
}

declare module 'styled-components' {
  // tslint:disable-next-line:no-empty-interface
  export interface DefaultTheme {
    white: string;
    grey: string;
    opaque: string;
    purple: string;
    purpleDark: string;
    green: string;
    orange: string;
    pink: string;
    blue: string;
    red: string;
    yellow: string;
    background: {
      lightest: string;
      lighter: string;
      dark: string;
      darker: string;
      darkest: string;
    }
  }
}

export type DefaultTheme = Theme
