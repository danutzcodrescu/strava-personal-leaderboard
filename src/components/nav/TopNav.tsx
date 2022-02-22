import { Box, Link } from '@chakra-ui/react';
import { isNil, isObject } from 'lodash';
import * as React from 'react';
import { useMatchRoute, Link as RouterLink } from 'react-location';
import { history } from '../../toolbox/location';
import { ScreenWrapper } from '../shared/ScreenWrapper';

export function TopNav() {
  const matchRoute = useMatchRoute();
  return (
    <Box as="nav" boxShadow="md" bgColor="white" py={3}>
      <ScreenWrapper mt={0} display="flex">
        <Link
          _hover={{ color: 'secondary.main' }}
          color="primary.main"
          fontWeight="bold"
          as={RouterLink}
          to="/"
        >
          Home
        </Link>
        {!isObject(matchRoute({ to: '/' })) ? (
          <Link onClick={() => history.back()} ml="auto" color="secondary.main">
            Back
          </Link>
        ) : null}
      </ScreenWrapper>
    </Box>
  );
}
