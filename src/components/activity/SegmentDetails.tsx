import { Box, useToken } from '@chakra-ui/react';
import * as React from 'react';
import { MapContainer, Polyline, TileLayer } from 'react-leaflet';
import { getBounds, getSegmentLine } from '../../toolbox/map';
import { useGetWeatherForSegmentQuery } from '../../types/graphql';
import { WeatherData } from '../weather/WeatherData';
import { ElevationChart } from './ElevationChart.component';
import { HoverMarker } from './HoverMarker';
import { useSegmentStore } from './store/segment.store';

interface Props {
  startPoint: string;
  endPoint: string;
  activityLine: any;
  distance: number;
  weatherId: number;
}

export const SegmentDetails = React.memo(function ({
  startPoint,
  endPoint,
  activityLine,
  distance,
  weatherId,
}: Props) {
  const [primary, blue] = useToken('colors', ['primary.main', 'blue.600']);
  const dispatch = useSegmentStore((state) => state.dispatch);
  const { data } = useGetWeatherForSegmentQuery({ weatherId });
  const { segmentLine, bounds } = React.useMemo(() => {
    const segmentLine = getSegmentLine({
      startPoint: startPoint,
      endPoint: endPoint,
      line: activityLine,
    });
    const bounds = getBounds(segmentLine);
    return { segmentLine, bounds };
  }, []);
  React.useEffect(() => {
    dispatch({ type: 'setSegmentLine', payload: segmentLine });
  }, [segmentLine, dispatch]);

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
          <Polyline color={primary} positions={activityLine} />
          <Polyline color={blue} positions={segmentLine} />
          <HoverMarker />
        </MapContainer>
      </Box>
    </>
  );
});
