import { bbox, lineString } from '@turf/turf';
import { latLng, latLngBounds } from 'leaflet';
// @ts-ignore
import * as polylineUtils from 'polyline-encoded';

function getBounds(line: any) {
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
