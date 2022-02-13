import { Box, Divider, Text, useToken } from '@chakra-ui/react';
import * as React from 'react';
import { MapContainer, Marker, Polyline, TileLayer } from 'react-leaflet';
import { getLineData } from '../../toolbox/map';
import { ScreenWrapper } from '../shared/ScreenWrapper';
import { Loading } from '../utilities/Loading';
import { WeatherData } from '../weather/WeatherData';
import { ActivityDetails } from './ActivityDetails.component';
import { ElevationChart } from './ElevationChart.component';
import { FitBounds } from './FitBounds';
import { useActivityData } from './hooks';
import { HoverMarker } from './HoverMarker';
import { SegmentsTable } from './SegmentTable.component';
import { TopResults } from './TopResults.component';
import { convertPostgresCoordsToLatLng } from './utils';

export interface Point {
  x: number;
  y: number;
}

export function Spacer() {
  return <Divider my={8} />;
}

export function ActivityComponent() {
  const { data, isLoading } = useActivityData();
  const [mainColor] = useToken('colors', ['primary.main']);
  if (isLoading) return <Loading />;
  if (!data) {
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
      <ActivityDetails key="details" />
      <Spacer />
      <TopResults key="topResults" />
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
              data.activities_by_pk?.start_point as string
            )}
          ></Marker>
          <Marker
            position={convertPostgresCoordsToLatLng(
              data.activities_by_pk?.end_point as string
            )}
            key="end"
          ></Marker>
          <HoverMarker />
          <FitBounds bounds={bounds} />
        </MapContainer>
      </Box>

      <ElevationChart
        line={line}
        distance={data.activities_by_pk?.distance as number}
        key="elevation-chart"
        mainMap
      />
      <Spacer />
      <SegmentsTable activityLine={line} key="segments" />
    </ScreenWrapper>
  );
}
