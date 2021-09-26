import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
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
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          textDecoration: 'none',
          color: 'black',
          cursor: 'pointer',
          '&:hover': {
            textDecoration: 'underline',
            color: '#007FB6',
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          '&::after': {
            position: 'absolute',
            height: 'calc(100% + 16px)',
            top: '-16px',
            left: 0,
            zIndex: 1000,
            content: '""',
            width: '7px',
          },
          '&$expanded': {
            '&::after': {
              backgroundColor: '#FC5200',
            },
          },
        },
      },
    },
  },
});
