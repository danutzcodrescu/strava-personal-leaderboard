import { Theme, Box } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import * as React from 'react';
import { useElevationStore } from './store/elevation.store';
import { drawChart } from './utils';

interface Props {
  line: Array<[number, number]>;
  chartHeight: number;
  distance: number;
  mainMap: boolean;
}

const chartHeight = 300;
export function ElevationChart({
  line,
  chartHeight,
  distance,
  mainMap,
}: Props) {
  const { palette } = useTheme<Theme>();
  const dispatch = useElevationStore((state) => state.dispatch);
  const chartRef = React.useRef<HTMLDivElement>();
  React.useLayoutEffect(() => {
    const elevator = new google.maps.ElevationService();
    elevator.getElevationAlongPath(
      {
        path: line.map((val) => ({ lat: val[0], lng: val[1] })) as any,
        samples: 100,
      } as any,
      (results) => {
        const parsed = results.map((data, index) => ({
          x: (distance / 100 / 1000) * index,
          y: data.elevation,
          location: [data.location.lat(), data.location.lng()] as [
            number,
            number
          ],
        }));
        drawChart({
          ref: chartRef.current!,
          palette,
          mainMap,
          onHover: (
            payload: {
              location: [number, number];
            } | null
          ) =>
            dispatch({
              type: 'setPoint',
              payload,
            }),
          values: parsed,
        });
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // @ts-expect-error
  return <Box ref={chartRef as any} height={chartHeight} width="100%" />;
}

ElevationChart.defaultProps = {
  chartHeight,
  id: 'elevationChart',
  mainMap: false,
};
