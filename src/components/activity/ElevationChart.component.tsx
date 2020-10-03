import { Theme } from '@material-ui/core';
import { createStyles, makeStyles, useTheme } from '@material-ui/styles';
import * as d3 from 'd3';
import * as React from 'react';
import { useElevationData } from './contexts/elevationMap.context';

interface Props {
  line: Array<[number, number]>;
  chartWidth: number;
  chartHeight: number;
  distance: number;
  id: string;
}

const margin = { top: 10, right: 10, bottom: 50, left: 50 };
const chartWidth = 860;
const chartHeight = 300;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    '@global': {
      '.axis': {
        color: theme.palette.grey[500],
        fontSize: '.5rem',
        fontWeight: 600,
      },
    },
  })
);

function drawChart(
  data: { x: number; y: number; location: [number, number] }[],
  chartFill: string,
  chartWidth: number,
  chartHeight: number,
  id: string,
  onHover: (val: [number, number] | null) => void
) {
  const width = chartWidth - margin.right - margin.left;
  const height = chartHeight - margin.top - margin.bottom;
  const curve = d3.curveLinear;
  const x = d3
    .scaleLinear()
    // @ts-ignore
    .domain(d3.extent(data, (d) => d.x))
    .range([margin.left, width - margin.right]);

  const xAxis = (g: any) =>
    g
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .attr('class', 'axis')
      .call(
        d3
          .axisBottom(x)
          .ticks(width / 80)
          .tickSizeOuter(0)
          .tickFormat((val) => `${val} km`)
      );
  const yAxis = (g: any) =>
    g
      .attr('class', 'axis')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).tickFormat((val) => `${val} m`))
      .call((g: any) =>
        g
          .select('.tick:last-of-type text')
          .clone()
          .attr('x', 3)
          .attr('text-anchor', 'start')
          .attr('font-weight', 'bold')
      );
  const y = d3
    .scaleLinear()
    // @ts-ignore
    .domain([0, d3.max(data, (d) => d.y + 120)])
    .nice()
    .range([height - margin.bottom, margin.top]);
  // @ts-ignore
  const area = d3
    .area()
    .curve(curve)
    // @ts-ignore
    .x((d) => x(d.x))
    // @ts-ignore
    .y0(y(0))
    // @ts-ignore
    .y1((d) => y(d.y));
  const svg = d3
    .select(`#${id}`)
    .append('svg')
    // @ts-ignore
    .attr('viewBox', [0, 0, width, height])
    .on('mousemove', (e: any) => {
      const bisectPoint = d3.bisector(
        (point: { x: number; y: number }) => point.x
      ).left;
      // @ts-ignore
      const dataIndex = bisectPoint(data, x.invert(d3.pointer(e)[0]), 0);
      onHover(data[dataIndex].location);
    })
    .on('mouseout', () => {
      onHover(null);
    });
  // @ts-ignore
  svg.append('path').datum(data).attr('fill', chartFill).attr('d', area);

  svg.append('g').call(xAxis);

  svg.append('g').call(yAxis);
}

export function ElevationChart({
  line,
  chartHeight,
  chartWidth,
  distance,
  id,
}: Props) {
  const { palette } = useTheme<Theme>();
  useStyles();
  const { setValue } = useElevationData();
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
        drawChart(
          parsed,
          palette.grey[300],
          chartWidth,
          chartHeight,
          id,
          setValue
        );
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div id={id} style={{ margin: '20px' }} />;
}

ElevationChart.defaultProps = {
  chartWidth,
  chartHeight,
  id: 'elevationChart',
};
