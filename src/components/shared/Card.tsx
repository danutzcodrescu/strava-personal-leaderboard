import { Box, BoxProps } from '@chakra-ui/react';
import * as React from 'react';

interface Props extends BoxProps {}

export function Card({ children, ...rest }: React.PropsWithChildren<Props>) {
  return (
    <Box boxShadow="base" bgColor="white" {...rest}>
      {children}
    </Box>
  );
}
