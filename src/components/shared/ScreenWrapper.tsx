import { Box, BoxProps } from '@chakra-ui/react';
import * as React from 'react';

interface Props extends BoxProps {}

export const ScreenWrapper: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Box
      width={{ base: '90vw', lg: '75vw', xl: '1200px' }}
      mx="auto"
      mt={20}
      {...rest}
    >
      {children}
    </Box>
  );
};
