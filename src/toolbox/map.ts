import { bbox, lineString, nearestPointOnLine, point } from '@turf/turf';
import { latLng, latLngBounds } from 'leaflet';
// @ts-ignore
import * as polylineUtils from 'polyline-encoded';

export function getBounds(line: any) {
  const box = bbox(
    lineString(
      JSON.parse(JSON.stringify(line)).map((coords: [number, number]) =>
        coords.reverse()
      )
    )
  );
  return latLngBounds(
    latLng(box.slice(0, 2).reverse() as [number, number]),
    latLng(box.slice(2).reverse() as [number, number])
  );
}

export function getLineData(data: any) {
  const line = polylineUtils.decode(data);
  const bounds = getBounds(line);
  return { line, bounds };
}

interface getSegmentLineArg {
  startPoint: string;
  endPoint: string;
  line: Array<[number, number]>;
}

export function getSegmentLine({
  startPoint,
  endPoint,
  line,
}: getSegmentLineArg) {
  const parsedLine = lineString(
    JSON.parse(JSON.stringify(line)).map((coords: [number, number]) =>
      coords.reverse()
    )
  );
  const start = nearestPointOnLine(
    parsedLine,
    point(startPoint.slice(1, -1).split(',') as any)
  );
  const end = nearestPointOnLine(
    parsedLine,
    point(endPoint.slice(1, -1).split(',') as any)
  );
  if (end.properties.index! > start.properties.index!) {
    return line.slice(start.properties.index, end.properties.index);
  }
  return line.slice(end.properties.index, start.properties.index);
}

export const mapHeight = '270px';
