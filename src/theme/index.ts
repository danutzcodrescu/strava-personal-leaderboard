import {
  extendTheme,
  theme as baseTheme,
  withDefaultProps,
} from '@chakra-ui/react';

export const theme = extendTheme(
  withDefaultProps({
    defaultProps: {
      startColor: 'gray100',
      endColor: 'gray200',
    },
    components: ['Skeleton', 'SkeletonText', 'SkeletonCircle'],
  }),
  {
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
  }
);
