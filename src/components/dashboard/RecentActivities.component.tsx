import { Box, HStack, Link, Skeleton, SkeletonText } from '@chakra-ui/react';
import * as React from 'react';
import { Link as RouteLink } from 'react-location';
import { routePreloadTime } from '../../toolbox/location';
import { mapHeight } from '../../toolbox/map';
import { Card } from '../shared/Card';
import { BikingIcon, RunningIcon } from '../shared/Icons';
import { useDashboardData } from './hooks';
import { RecentActivityCard } from './RecentActivity.component';

const Map = React.lazy(() =>
  import('./Map').then((res) => ({ default: res.Map }))
);

export function RecentActivities() {
  const { data, isLoading } = useDashboardData();
  if (isLoading) {
    <>
      <Card boxShadow="md" mb={4} px={8} py={6}>
        <SkeletonText />
        <Skeleton h={70} />
      </Card>
      <Card boxShadow="md" mb={4} px={8} py={6}>
        <SkeletonText />
        <Skeleton h={70} />
      </Card>
    </>;
  }
  return (
    <>
      {data?.recentActivities.map((activity) => {
        // TODO move this into a serverless function and display it as image

        return (
          <Card key={activity.external_id} boxShadow="md" mb={4} px={8} py={6}>
            <HStack gap={4} align="baseline">
              {activity.type === 'Ride' ? (
                <BikingIcon role="img" aria-label="bike ride activity" />
              ) : (
                <RunningIcon role="img" aria-label="running activity" />
              )}
              <Box flex={1}>
                <RecentActivityCard activity={activity} />
              </Box>
            </HStack>
            <Link
              as={RouteLink}
              to={`/activity/${activity.external_id}`}
              sx={{
                '& > *': {
                  height: mapHeight,
                },
              }}
              preload={routePreloadTime}
            >
              <React.Suspense fallback={<Skeleton />}>
                <Map map={activity.map.map} />
              </React.Suspense>
            </Link>
          </Card>
        );
      })}
    </>
  );
}
