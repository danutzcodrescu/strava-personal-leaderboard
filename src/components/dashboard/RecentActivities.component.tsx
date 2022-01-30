import { Box, HStack, Link } from '@chakra-ui/react';
import * as React from 'react';
import { MapContainer, Polyline, TileLayer } from 'react-leaflet';
import { Link as RouteLink } from 'react-router-dom';
import { getLineData } from '../../toolbox/map';
import { getRecentActivities_activities } from '../../types/getRecentActivities';
import { Card } from '../shared/Card';
import { BikingIcon, RunningIcon } from '../shared/Icons';
import { RecentActivityCard } from './RecentActivity.component';

interface Props {
  activities: getRecentActivities_activities[];
}

export function RecentActivities({ activities }: Props) {
  return (
    <>
      {activities.map((activity) => {
        // TODO move this into a serverless function and display it as image
        const { line, bounds } = getLineData(activity.map.map);
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
                '& .map': {
                  height: '270px',
                },
              }}
            >
              <MapContainer
                className="map"
                bounds={bounds}
                zoomControl={false}
                attributionControl={false}
                scrollWheelZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`}
                  maxZoom={18}
                  accessToken={process.env.REACT_APP_MAPBOX}
                  id="mapbox/light-v10"
                />
                <Polyline
                  color="var(--chakra-colors-primary-main)"
                  positions={line}
                />
              </MapContainer>
            </Link>
          </Card>
        );
      })}
    </>
  );
}
