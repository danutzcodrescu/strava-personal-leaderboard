import { Center, CircularProgress } from '@chakra-ui/react';
import * as React from 'react';

export function Loading() {
  return (
    <Center width="100vw" height="100vh">
      <CircularProgress color="primary.main" isIndeterminate size="20" />
    </Center>
  );
}
