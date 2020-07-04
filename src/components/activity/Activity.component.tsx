import { useQuery } from '@apollo/client';
import { Typography } from '@material-ui/core';
import { Theme, useTheme } from '@material-ui/core/styles';
import * as React from 'react';
import { Map, Marker, Polyline, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';
import { GET_ACTIVITY } from '../../queries/activity';
import { getLineData } from '../../toolbox/map';
import { getActivity } from '../../types/getActivity';
import { Loading } from '../utilities/Loading';
import { ActivityDetails } from './ActivityDetails.component';
import { ElevationChart } from './ElevationChart.component';
import { SegmentsTable } from './SegmentTable.component';

export function ActivityComponent() {
  const { id } = useParams();
  const { data, loading, error } = useQuery<getActivity>(GET_ACTIVITY, {
    variables: { id },
  });
  const { palette } = useTheme<Theme>();
  if (loading) return <Loading />;
  if (!data) {
    return <Typography>Error</Typography>;
  }
  const { line, bounds } = getLineData(data.activities_by_pk!.map.map);
  return (
    <>
      <ActivityDetails activity={data.activities_by_pk!} />
      <Map
        style={{ height: '270px' }}
        bounds={bounds}
        attributionControl={false}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`}
          maxZoom={18}
          accessToken={process.env.REACT_APP_MAPBOX}
          id="mapbox/light-v10"
        />
        <Polyline color={palette.primary.main} positions={line} />
        <Marker
          position={data
            .activities_by_pk!.start_point.slice(1, -1)
            .split(',')
            .reverse()}
        ></Marker>
        <Marker
          position={data
            .activities_by_pk!.end_point.slice(1, -1)
            .split(',')
            .reverse()}
        ></Marker>
      </Map>
      <ElevationChart line={line} />
      <SegmentsTable segments={data.activities_by_pk!.segment_efforts} />
    </>
  );
}
