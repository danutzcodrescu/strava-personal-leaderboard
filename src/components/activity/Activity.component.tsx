import { useQuery } from '@apollo/client';
import { Box, Divider, Typography } from '@material-ui/core';
import { Theme, useTheme } from '@material-ui/core/styles';
import * as React from 'react';
import { Map, Marker, Polyline, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';
import { GET_ACTIVITY, GET_TOP_RESULTS } from '../../queries/activity';
import { getLineData } from '../../toolbox/map';
import { getActivity } from '../../types/getActivity';
import { getTopResults } from '../../types/getTopResults';
import { Loading } from '../utilities/Loading';
import { ActivityDetails } from './ActivityDetails.component';
import { ElevationChart } from './ElevationChart.component';
import { SegmentsTable } from './SegmentTable.component';
import { StyledPaper } from './styles/Activity.styles';
import { TopResults } from './TopResults.component';

function Spacer() {
  return <Box component={Divider} my={4}></Box>;
}

export function ActivityComponent() {
  const { id } = useParams<{ id: string }>();
  const { data, loading } = useQuery<getActivity>(GET_ACTIVITY, {
    variables: { id },
  });
  const { data: dataResults, loading: loadingResults } = useQuery<
    getTopResults
  >(GET_TOP_RESULTS, {
    variables: { id },
  });
  const { palette } = useTheme<Theme>();
  if (loading || loadingResults) return <Loading />;
  if (!data || !dataResults) {
    return <Typography>Error</Typography>;
  }
  const { line, bounds } = getLineData(data.activities_by_pk!.map.map);
  return (
    <Box display="flex" justifyContent="center" my={7}>
      {/* @ts-ignore */}
      <Box component={StyledPaper} variant="outlined" px={4.5} py={6.5}>
        <ActivityDetails activity={data.activities_by_pk!} />
        <Spacer />
        <TopResults results={dataResults.segment_efforts} />
        <Spacer />
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
        <ElevationChart
          line={line}
          distance={data.activities_by_pk!.distance}
        />
        <Spacer />
        <SegmentsTable
          segments={data.activities_by_pk!.segment_efforts}
          activityLine={line}
        />
      </Box>
    </Box>
  );
}
