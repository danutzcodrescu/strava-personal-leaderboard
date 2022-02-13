import { Box, Skeleton } from '@chakra-ui/react';
import * as React from 'react';
import { getBounds, getSegmentLine } from '../../toolbox/map';
import { useGetWeatherForSegmentQuery } from '../../types/graphql';
import { WeatherData } from '../weather/WeatherData';
import { ElevationChart } from './ElevationChart.component';
import { useSegmentStore } from './store/segment.store';

const Map = React.lazy(() =>
  import('./SegmentDetailsMap').then((mod) => ({
    default: mod.SegmentDetailsMap,
  }))
);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <React.Suspense fallback={<Skeleton height="170px" />}>
          <Map
            bounds={bounds}
            activityLine={activityLine}
            segmentLine={segmentLine}
          />
        </React.Suspense>
      </Box>
    </>
  );
});
