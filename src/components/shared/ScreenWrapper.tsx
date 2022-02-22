import { Box, BoxProps } from '@chakra-ui/react';
import * as React from 'react';
import { responsiveSizes } from '../../toolbox/sizes';

interface Props extends BoxProps {}

export const ScreenWrapper: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Box width={responsiveSizes} mx="auto" mt={10} {...rest}>
      {children}
    </Box>
  );
};
