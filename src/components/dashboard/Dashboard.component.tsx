import { Box, Flex, Text } from '@chakra-ui/react';
import * as React from 'react';
import { ScreenWrapper } from '../shared/ScreenWrapper';
import { useDashboardData } from './hooks';
import { RecentActivities } from './RecentActivities.component';
import { UserData } from './UserData.component';

export function Dashboard() {
  const { isLoading, data } = useDashboardData();
  if (!data && !isLoading) {
    return <Text>Error</Text>;
  }
  return (
    <ScreenWrapper as={Flex}>
      <Box mr={3}>
        <UserData />
      </Box>
      <Box flex={1}>
        <RecentActivities />
      </Box>
    </ScreenWrapper>
  );
}
