import { Palette } from '@material-ui/core/styles/createPalette';
import * as eCharts from 'echarts';
import { LatLngTuple } from 'leaflet';
import debounce from 'lodash/debounce';
import { lineString, lineOverlap } from '@turf/turf';

interface DrawChartArgs {
  ref: HTMLDivElement;
  values: {
    x: number;
    y: number;
    location: [number, number];
  }[];
  palette: Palette;
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
    color: [palette.grey[300]],
    xAxis: {
      type: 'category',
      boundaryGap: false,
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
      splitLine: false,
      triggerEvent: true,
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
          color: palette.text.primary,
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
            color: palette.grey[300],
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
    }, 20)
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

export function getHighlightedSector({ segmentLine, data }: HighlightedSector) {
  const segment = lineString(segmentLine);
  const line = lineString([...data.map((elem) => elem.location)]);
  const overlap = lineOverlap(segment, line, { tolerance: 0.3 });
  const first = data.findIndex(
    (elem) =>
      elem.location === overlap.features[0].geometry.coordinates[0].reverse()
  );
  const last = data.findIndex(
    (elem) =>
      elem.location ===
      overlap.features[0].geometry.coordinates[
        overlap.features[0].geometry.coordinates.length - 1
      ].reverse()
  );
  return {
    start: first < last ? first : last,
    end: first < last ? last : first,
  };
}
