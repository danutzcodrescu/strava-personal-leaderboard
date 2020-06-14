import { Box, Grid, useTheme } from '@material-ui/core';
import { DirectionsBike, DirectionsRun } from '@material-ui/icons';
import { bbox, lineString } from '@turf/turf';
import { latLng, latLngBounds } from 'leaflet';
// @ts-ignore
import * as polylineUtils from 'polyline-encoded';
import * as React from 'react';
import { Map, Polyline, TileLayer } from 'react-leaflet';
import { getRecentActivities_activities } from '../../types/getRecentActivities';
import { RecentActivityCard } from './RecentActivity.component';
import { useRecentActivities } from './styles/RecentActivities.styles';

interface Props {
  activities: getRecentActivities_activities[];
}

export function RecentActivities({ activities }: Props) {
  const classes = useRecentActivities();
  const { palette } = useTheme();
  return (
    <>
      {activities.map((activity) => {
        // TODO move this into a serverless function and display it as image
        const line = polylineUtils.decode(activity.map.map);
        const box = bbox(
          lineString(
            JSON.parse(JSON.stringify(line)).map((coords: [number, number]) =>
              coords.reverse()
            )
          )
        );
        const bounds = latLngBounds(
          latLng(box.slice(0, 2).reverse() as [number, number]),
          latLng(box.slice(2).reverse() as [number, number])
        );
        return (
          <Box
            key={activity.external_id}
            boxShadow={3}
            className={classes.card}
          >
            <Grid container spacing={2}>
              <Grid item sm={2}>
                {activity.type === 'Ride' ? (
                  <DirectionsBike />
                ) : (
                  <DirectionsRun />
                )}
              </Grid>
              <Grid item sm={10}>
                <RecentActivityCard activity={activity} />
              </Grid>
            </Grid>

            <Map
              className={classes.map}
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
              <Polyline color={palette.primary.main} positions={line} />
            </Map>
          </Box>
        );
      })}
    </>
  );
}
