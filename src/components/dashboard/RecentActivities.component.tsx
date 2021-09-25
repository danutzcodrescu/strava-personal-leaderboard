import { Box, Grid, Theme, useTheme } from '@mui/material';
import { DirectionsBike, DirectionsRun } from '@mui/icons-material';
import * as React from 'react';
import { MapContainer, Polyline, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { getLineData } from '../../toolbox/map';
import { getRecentActivities_activities } from '../../types/getRecentActivities';
import { RecentActivityCard } from './RecentActivity.component';
import { css } from '@mui/styled-engine';

interface Props {
  activities: getRecentActivities_activities[];
}

export function RecentActivities({ activities }: Props) {
  const { palette } = useTheme<Theme>();
  return (
    <>
      {activities.map((activity) => {
        // TODO move this into a serverless function and display it as image
        const { line, bounds } = getLineData(activity.map.map);
        return (
          <Box
            key={activity.external_id}
            boxShadow={3}
            sx={{
              marginBottom: 2,
              paddingBlock: 4,
              paddingInline: 3,
            }}
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
            <Link to={`/activity/${activity.external_id}`}>
              <MapContainer
                // @ts-ignore
                className={css`
                  height: 270px;
                `}
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
              </MapContainer>
            </Link>
          </Box>
        );
      })}
    </>
  );
}
