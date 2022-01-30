import { extendTheme, theme as baseTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: {
      main: '#FC5200',
      light: '#FF853C',
      dark: '#C11300',
    },
    secondary: {
      main: '#79D7BD',
      light: '#ACFFEF',
      dark: '#46A58D',
    },
    trophy: {
      gold: 'yellow.400',
      silver: 'gray.300',
      bronze: 'orange.700',
    },
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'gray.100',
      },
    },
  },
  fonts: {
    heading: `Roboto, ${baseTheme.fonts.heading}`,
    body: `Roboto, ${baseTheme.fonts.body}`,
  },
});
