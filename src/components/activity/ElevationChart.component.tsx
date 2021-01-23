import { Theme, Box } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import { ECharts } from 'echarts';
import { stat } from 'fs/promises';
import * as React from 'react';
import shallow from 'zustand/shallow';
import { useElevationStore } from './store/elevation.store';
import { useSegmentStore } from './store/segment.store';
import { drawChart, getHighlightedSector } from './utils';

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
  const [startPoint, endPoint] = useSegmentStore(
    (state) => [state.startPoint, state.endPoint],
    shallow
  );
  const chartRef = React.useRef<HTMLDivElement>();
  const chartConfig = React.useRef<ECharts>();
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
        chartConfig.current = drawChart({
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

  // highlight the selected segment in the area chart
  React.useEffect(() => {
    if (mainMap && startPoint && endPoint && chartConfig.current) {
      const { start, end } = getHighlightedSector({
        startPoint,
        endPoint,
        data: (chartConfig.current!.getOption().dataset as any[])[0].source,
      });
      chartConfig.current!.setOption({
        visualMap: [
          {
            type: 'piecewise',
            show: false,
            dimension: 0,
            pieces: [
              {
                gte: start,
                lte: end,
                color: palette.grey[500],
              },
              {
                lt: start,
                color: palette.grey[300],
              },

              {
                gt: end,
                color: palette.grey[300],
              },
            ],
          },
        ],
      });
    }
    if (
      mainMap &&
      !startPoint &&
      !endPoint &&
      chartConfig.current &&
      chartConfig.current!.getOption().visualMap
    ) {
      chartConfig.current!.setOption({}, { replaceMerge: 'visualMap' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startPoint, endPoint]);
  // @ts-expect-error
  return <Box ref={chartRef as any} height={chartHeight} width="100%" />;
}

ElevationChart.defaultProps = {
  chartHeight,
  id: 'elevationChart',
  mainMap: false,
};
