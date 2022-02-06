import { Box, useToken } from '@chakra-ui/react';
import { ECharts } from 'echarts';
import * as React from 'react';
import { useElevationStore } from './store/elevation.store';
import { useSegmentStore } from './store/segment.store';
import { drawChart, getHighlightedSector, getLine } from './utils';

interface Props {
  line: Array<[number, number]>;
  chartHeight: number;
  distance: number;
  mainMap: boolean;
}

export const chartHeight = 300;
export function ElevationChart({
  line,
  chartHeight,
  distance,
  mainMap,
}: Props) {
  const [gray500, gray300, black] = useToken('colors', [
    'gray.500',
    'gray.300',
    'black',
  ]);
  const dispatch = useElevationStore((state) => state.dispatch);
  const segmentLine = useSegmentStore((state) => state.segmentLine);
  const chartRef = React.useRef<HTMLDivElement>();
  const chartConfig = React.useRef<ECharts>();
  React.useLayoutEffect(() => {
    const elevator = new google.maps.ElevationService();
    elevator.getElevationAlongPath(
      {
        path: getLine(line).geometry.coordinates.map((val) => ({
          lat: val[0],
          lng: val[1],
        })) as any,
        samples: 100,
      } as any,
      (results) => {
        const parsed = results
          ? results.map((data, index) => ({
              x: (distance / 100 / 1000) * index,
              y: data.elevation,
              location: [
                data.location?.lat() || 0,
                data.location?.lng() || 0,
              ] as [number, number],
            }))
          : [];
        chartConfig.current = drawChart({
          ref: chartRef.current!,
          palette: { lineColor: gray300, textColor: black },
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
    if (mainMap && segmentLine && chartConfig.current) {
      const { start, end } = getHighlightedSector({
        segmentLine,
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
                color: gray500,
              },
              {
                lt: start,
                color: gray300,
              },

              {
                gt: end,
                color: gray300,
              },
            ],
          },
        ],
      });
    }
    if (
      mainMap &&
      !segmentLine &&
      chartConfig.current &&
      chartConfig.current!.getOption().visualMap
    ) {
      chartConfig.current!.setOption({}, { replaceMerge: 'visualMap' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [segmentLine]);
  return <Box ref={chartRef as any} height={chartHeight} width="100%" />;
}

ElevationChart.defaultProps = {
  chartHeight,
  id: 'elevationChart',
  mainMap: false,
};
