/* eslint-disable react-hooks/exhaustive-deps */
import { useLazyQuery } from '@apollo/client';
import { Box, Theme, useTheme } from '@material-ui/core';
import * as React from 'react';
import { MapContainer, Polyline, TileLayer } from 'react-leaflet';
import { GET_WEATHER_FOR_SEGMENT } from '../../queries/segment';
import { getBounds, getSegmentLine } from '../../toolbox/map';
import {
  getWeatherForSegment,
  getWeatherForSegmentVariables,
} from '../../types/getWeatherForSegment';
import { WeatherData } from '../weather/WeatherData';
import { ElevationChart } from './ElevationChart.component';
import { HoverMarker } from './HoverMarker';
import { useSegmentStore } from './store/segment.store';

interface Props {
  startPoint: string;
  endPoint: string;
  activityLine: any;
  distance: number;
  segmentId: number;
  weatherId: number;
}

export const SegmentDetails = React.memo(function ({
  startPoint,
  endPoint,
  activityLine,
  distance,
  segmentId,
  weatherId,
}: Props) {
  const { palette } = useTheme<Theme>();
  const dispatch = useSegmentStore((state) => state.dispatch);
  const [getWeather, { data }] = useLazyQuery<
    getWeatherForSegment,
    getWeatherForSegmentVariables
  >(GET_WEATHER_FOR_SEGMENT);
  const { segmentLine, bounds } = React.useMemo(() => {
    const segmentLine = getSegmentLine({
      startPoint: startPoint,
      endPoint: endPoint,
      line: activityLine,
    });
    const bounds = getBounds(segmentLine);
    return { segmentLine, bounds };
  }, [segmentId]);
  React.useEffect(() => {
    dispatch({ type: 'setSegmentLine', payload: segmentLine });
  }, [segmentId]);
  React.useEffect(() => {
    getWeather({ variables: { weatherId } });
  }, [weatherId]);
  return (
    <>
      <ElevationChart
        distance={distance}
        line={segmentLine}
        chartHeight={220}
      ></ElevationChart>
      <Box sx={{ position: 'relative' }}>
        {data ? (
          <WeatherData
            windDir={data.weather_by_pk?.wind_dir}
            windSpeed={data.weather_by_pk?.wind_speed}
            temperature={data.weather_by_pk?.temperature}
            conditions={data.weather_by_pk?.conditions}
          />
        ) : null}

        <MapContainer
          style={{ height: '170px' }}
          bounds={bounds}
          attributionControl={false}
          zoomControl={false}
          scrollWheelZoom={false}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`}
            maxZoom={18}
            accessToken={process.env.REACT_APP_MAPBOX}
            id="mapbox/light-v10"
          />
          <Polyline color={palette.primary.main} positions={activityLine} />
          <Polyline color="blue" positions={segmentLine} />
          <HoverMarker />
        </MapContainer>
      </Box>
    </>
  );
});
