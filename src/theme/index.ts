import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
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
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: {
          fontWeight: 'bold',
          textDecoration: 'none',
          color: 'black',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
});
