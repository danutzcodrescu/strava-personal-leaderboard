import { distance, lineOverlap, lineString, point, simplify } from '@turf/turf';
import * as eCharts from 'echarts';
import { LatLngTuple } from 'leaflet';
import { cloneDeep, debounce, isEqualWith } from 'lodash';

interface DrawChartArgs {
  ref: HTMLDivElement;
  values: {
    x: number;
    y: number;
    location: [number, number];
  }[];
  palette: { lineColor: string; textColor: string };
  mainMap: boolean;
  onHover: (obj: { location: [number, number] } | null) => void;
}

export function drawChart({
  ref,
  palette,
  values,
  onHover,
  mainMap,
}: DrawChartArgs) {
  const chart = eCharts.init(ref);
  chart.setOption({
    title: {
      show: false,
    },
    dataset: {
      source: values,
    },
    ...(!mainMap
      ? {
          grid: {
            right: 0,
            left: 50,
          },
        }
      : {}),
    color: [palette.lineColor],
    xAxis: {
      type: 'category',
      boundaryGap: false,
      splitLine: {
        show: true,
        lineStyle: {
          color: palette.lineColor,
        },
      },
      axisLabel: {
        interval: mainMap ? 10 : 25,
        formatter: (value: string) => {
          return `${
            parseFloat(value) >= 1
              ? parseFloat(value).toFixed(0)
              : parseFloat(value).toFixed(1)
          } km`;
        },
      },
      triggerEvent: true,
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          color: palette.lineColor,
        },
      },
      triggerEvent: true,
      axisLabel: {
        formatter: '{value} m',
        showMinLabel: false,
      },
      axisLine: {
        show: true,
      },
    },
    tooltip: {
      trigger: 'axis',
      position: function (point: any) {
        // fixed at top
        return [point[0], '30%'];
      },

      axisPointer: {
        axis: 'x',
        type: 'line',
        lineStyle: {
          color: palette.textColor,
          type: 'solid',
        },
      },
      formatter: (params: any) => {
        return `
                Dist: <b>${params[0].data.x.toFixed(1)} km</b><br />
                Elev: <b>${params[0].data.y.toFixed(1)} m</b>
                `;
      },
    },
    series: [
      {
        encode: {
          x: 'x',
          y: 'y',
          tooltip: ['y', 'location'],
        },
        type: 'line',
        areaStyle: {},
        symbol: 'none',
        lineStyle: {
          width: 0,
        },
        emphasis: {
          areaStyle: {
            color: palette.lineColor,
          },
        },
        smooth: true,
      },
    ],
  });
  chart.getZr().on(
    'mousemove',
    debounce((event) => {
      // No "target" means that mouse/pointer is not on
      // any of the graphic elements, which is "blank".
      const point = [event.offsetX, event.offsetY];
      const pointInGrid = chart.convertFromPixel('grid', point);
      if (chart.containPixel('grid', point)) {
        const item = (chart.getOption().dataset as any)[0].source[
          pointInGrid[0]
        ];
        if (item) {
          onHover({ location: item.location });
        }
      }
    }, 8)
  );
  chart.getZr().on('mouseout', () => {
    onHover(null);
  });
  return chart;
}

export function convertPostgresCoordsToLatLng(coords: string): LatLngTuple {
  // @ts-ignore
  return coords.slice(1, -1).split(',').reverse();
}

export function isAnyPartOfElementInViewport(el: Element) {
  const rect = el.getBoundingClientRect();

  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;

  return vertInView;
}

interface HighlightedSector {
  segmentLine: [number, number][];
  data: {
    x: number;
    y: number;
    location: [number, number];
  }[];
}

// check distance between points in order to create elevation chart highlight of the sector
// the segment line and data points could be slightly different because of the simplification algorithm
function comparePoints(coord1: [number, number], coord2: [number, number]) {
  const dist = distance(point(coord1), point(coord2), { units: 'kilometers' });
  if (dist < 0.4) return true;
  return false;
}

export function getHighlightedSector({ segmentLine, data }: HighlightedSector) {
  const segment = lineString(segmentLine);
  const line = lineString([...data.map((elem) => elem.location)]);
  const overlap = lineOverlap(segment, line, { tolerance: 0.3 });
  const first = data.findIndex((elem) =>
    isEqualWith(
      elem.location.reverse(),
      cloneDeep(overlap.features[0].geometry.coordinates[0]).reverse(),
      comparePoints
    )
  );

  const last = data.findIndex((elem) =>
    isEqualWith(
      elem.location.reverse(),
      cloneDeep(
        overlap.features[0].geometry.coordinates[
          overlap.features[0].geometry.coordinates.length - 1
        ]
      ).reverse(),
      comparePoints
    )
  );
  return {
    start: first <= last ? first : last,
    end: first <= last ? last : first,
  };
}

export const getLine = (line: [number, number][]) =>
  simplify(lineString(line), {
    highQuality: true,
    tolerance: 0.0009,
  });
