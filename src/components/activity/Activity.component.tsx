import { useQuery } from '@apollo/client';
import * as React from 'react';
import { MapContainer, Marker, Polyline, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';
import { GET_ACTIVITY, GET_TOP_RESULTS } from '../../queries/activity';
import { getLineData } from '../../toolbox/map';
import { getActivity } from '../../types/getActivity';
import { getTopResults } from '../../types/getTopResults';
import { Loading } from '../utilities/Loading';
import { ActivityDetails } from './ActivityDetails.component';
import { ElevationChart } from './ElevationChart.component';
import { SegmentsTable } from './SegmentTable.component';

import { TopResults } from './TopResults.component';
import { HoverMarker } from './HoverMarker';
import { FitBounds } from './FitBounds';
import { convertPostgresCoordsToLatLng } from './utils';
import { ScreenWrapper } from '../shared/ScreenWrapper';
import { WeatherData } from '../weather/WeatherData';
import { Box, Divider, Text, useToken } from '@chakra-ui/react';

export interface Point {
  x: number;
  y: number;
}

export function Spacer() {
  return <Divider my={8} />;
}

export function ActivityComponent() {
  const { id } = useParams<{ id: string }>();
  const { data, loading } = useQuery<getActivity>(GET_ACTIVITY, {
    variables: { id },
  });
  const { data: dataResults, loading: loadingResults } =
    useQuery<getTopResults>(GET_TOP_RESULTS, {
      variables: { id },
    });
  const [mainColor] = useToken('colors', ['primary.main']);
  if (loading || loadingResults) return <Loading />;
  if (!data || !dataResults) {
    return <Text>Error</Text>;
  }
  const { line, bounds } = getLineData(data.activities_by_pk!.map.map);
  return (
    <ScreenWrapper
      bgColor="white"
      border="1px solid"
      borderColor="gray.400"
      p="5"
    >
      <ActivityDetails activity={data.activities_by_pk!} key="details" />
      <Spacer />
      <TopResults results={dataResults.segment_efforts} key="topResults" />
      <Spacer />
      <Box position="relative">
        {data.activities_by_pk?.weather ? (
          <WeatherData
            windDir={data.activities_by_pk!.weather.wind_dir}
            windSpeed={data.activities_by_pk!.weather.wind_speed}
            temperature={data.activities_by_pk!.weather.temperature}
            conditions={data.activities_by_pk!.weather.conditions}
          />
        ) : null}

        <MapContainer
          style={{ height: '270px' }}
          bounds={bounds}
          attributionControl={false}
          scrollWheelZoom={false}
          key="map"
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`}
            maxZoom={18}
            accessToken={process.env.REACT_APP_MAPBOX}
            id="mapbox/light-v10"
            key="tiles"
          />
          <Polyline color={mainColor} positions={line} key="line" />
          <Marker
            key="start"
            position={convertPostgresCoordsToLatLng(
              data.activities_by_pk!.start_point
            )}
          ></Marker>
          <Marker
            position={convertPostgresCoordsToLatLng(
              data.activities_by_pk!.end_point
            )}
            key="end"
          ></Marker>
          <HoverMarker />
          <FitBounds bounds={bounds} />
        </MapContainer>
      </Box>

      <ElevationChart
        line={line}
        distance={data.activities_by_pk!.distance}
        key="elevation-chart"
        mainMap
      />
      <Spacer />
      <SegmentsTable
        segments={data.activities_by_pk!.segment_efforts}
        activityLine={line}
        key="segments"
      />
    </ScreenWrapper>
  );
}
