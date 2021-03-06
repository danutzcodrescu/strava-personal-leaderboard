import convert from 'convert-units';

export function distanceElevation(elevation: number) {
  return `${Math.ceil(elevation)} m`;
}

export function convertDistance(distance: number) {
  const dist = convert(distance).from('m').toBest();
  if (dist.val === 0) return dist.val;
  return `${dist.unit === 'm' ? dist.val.toFixed(2) : dist.val.toFixed(1)} ${
    dist.unit
  }`;
}

export function distanceForSegment(distance: number) {
  return `${convert(distance).from('m').to('km').toFixed(2)}km`;
}
