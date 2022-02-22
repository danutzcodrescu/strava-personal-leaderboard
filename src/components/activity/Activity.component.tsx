import { Box, Divider, Skeleton, Text } from '@chakra-ui/react';
import * as React from 'react';
import { getLineData, mapHeight } from '../../toolbox/map';
import { ScreenWrapper } from '../shared/ScreenWrapper';
import { Loading } from '../shared/Loading';
import { WeatherData } from '../weather/WeatherData';
import { ActivityDetails } from './ActivityDetails.component';
import { ElevationChart } from './ElevationChart.component';
import { useActivityData } from './hooks';
import { SegmentsTable } from './SegmentTable.component';
import { TopResults } from './TopResults.component';

const Map = React.lazy(() =>
  import('./ActivityMap').then((mod) => ({ default: mod.ActivityMap }))
);
export interface Point {
  x: number;
  y: number;
}

export function Spacer() {
  return <Divider my={8} />;
}

export function ActivityComponent() {
  const { data, isLoading } = useActivityData();

  if (isLoading)
    return (
      <>
        <ScreenWrapper
          bgColor="white"
          border="1px solid"
          borderColor="gray.400"
          p="5"
        >
          <ActivityDetails />
          <Spacer />
          <Skeleton height={mapHeight} />
          <Skeleton height={mapHeight} mt={4} />
        </ScreenWrapper>
      </>
    );
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
      {data.topResults?.length ? (
        <>
          <TopResults key="topResults" /> <Spacer />
        </>
      ) : null}

      <Box position="relative">
        {data.activities_by_pk?.weather ? (
          <WeatherData
            windDir={data.activities_by_pk!.weather.wind_dir}
            windSpeed={data.activities_by_pk!.weather.wind_speed}
            temperature={data.activities_by_pk!.weather.temperature}
            conditions={data.activities_by_pk!.weather.conditions}
          />
        ) : null}
        <React.Suspense fallback={<Skeleton height={mapHeight} />}>
          <Map
            line={line}
            bounds={bounds}
            startPoint={data.activities_by_pk?.start_point}
            endPoint={data.activities_by_pk?.end_point}
          />
        </React.Suspense>
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
