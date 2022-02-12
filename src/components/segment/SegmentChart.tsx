import * as React from 'react';
import { chartHeight } from '../activity/ElevationChart.component';
import * as eCharts from 'echarts';
import {
  activityDateForSegment,
  convertDurationForPR,
} from '../../toolbox/time';
import { sortByDate } from './utils';
import { calculateSpeed } from '../../toolbox/speed';
import { Box, useToken } from '@chakra-ui/react';
import { GetDetailedSegmentLeaderboardsQuery } from '../../types/graphql';

interface Props {
  data: GetDetailedSegmentLeaderboardsQuery['segment_efforts'];
}

export function SegmentLeaderboardsChart({ data }: Props) {
  const [main, gray] = useToken('colors', ['primary.main', 'gray.700']);
  const chartRef = React.useRef<HTMLDivElement>();
  React.useLayoutEffect(() => {
    const chart = eCharts.init(chartRef.current!);
    const chartData = data
      .slice()
      .sort(sortByDate)
      .slice(0, 15)
      .reverse()
      .map((elem) => ({
        ...elem,
        elapsed_time: -elem.elapsed_time,
      }));
    chart.setOption({
      title: {
        show: false,
      },
      dataset: {
        source: chartData,
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          formatter: (value: string) => activityDateForSegment(value),
        },
      },

      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: (value: number) => convertDurationForPR(Math.abs(value)),
        },
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params: any) {
          const data: GetDetailedSegmentLeaderboardsQuery['segment_efforts'][0] =
            params[0].data;
          return `
          Date: <b>${activityDateForSegment(data.start_date_local)}</b><br />
          Time: <b>${convertDurationForPR(
            Math.abs(data.elapsed_time)
          )} min</b><br />
          Moving time: <b>${convertDurationForPR(
            data.moving_time
          )} min</b><br />
          Speed: <b>${calculateSpeed(
            data.segment.distance,
            Math.abs(data.elapsed_time)
          )}</b>
         `;
        },
        axisPointer: {
          animation: false,
        },
      },
      series: [
        {
          encode: {
            x: 'start_date_local',
            y: 'elapsed_time',
          },
          type: 'line',
          symbolSize: 6,
          itemStyle: {
            color: gray,
          },
          lineStyle: {
            width: 0,
          },
          markPoint: {
            symbol: 'circle',
            symbolSize: 16,

            data: [
              {
                type: 'max',
                itemStyle: {
                  color: main,
                },
                label: {
                  formatter: () => '',
                },
              },
            ],
          },
          markLine: {
            symbol: 'none',
            lineStyle: {
              color: main,
              width: 1.5,
            },
            label: {
              formatter: (params: any) =>
                convertDurationForPR(Math.round(Math.abs(params.value))),
            },
            data: [{ type: 'average', name: 'average time' }],
          },
        },
      ],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Box ref={chartRef as any} height={chartHeight} width="100%" />;
}
