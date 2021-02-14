import { Box, useTheme } from '@material-ui/core';
import * as React from 'react';
import { chartHeight } from '../activity/ElevationChart.component';
import * as eCharts from 'echarts';
import { getDetailedSegmentLeaderboards_segment_efforts } from '../../types/getDetailedSegmentLeaderboards';
import {
  activityDateForSegment,
  convertDurationForPR,
} from '../../toolbox/time';
import { sortByDate } from './utils';
import { calculateSpeed } from '../../toolbox/speed';

interface Props {
  data: getDetailedSegmentLeaderboards_segment_efforts[];
}

export function SegmentLeaderboardsChart({ data }: Props) {
  const chartRef = React.useRef<HTMLDivElement>();
  const { palette } = useTheme();
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
          const data: getDetailedSegmentLeaderboards_segment_efforts =
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
            color: palette.grey[700],
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
                  color: palette.primary.main,
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
              color: palette.primary.main,
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
  }, []);
  // @ts-expect-error
  return <Box ref={chartRef as any} height={chartHeight} width="100%" />;
}
