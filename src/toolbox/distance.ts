import convert from 'convert-units';

export function distanceElevation(elevation: number) {
  return `${Math.ceil(elevation)} m`;
}

export function convertDistance(distance: number) {
  const dist = convert(distance).from('m').toBest();
  return `${dist.unit === 'm' ? dist.val.toFixed(2) : dist.val.toFixed(1)} ${
    dist.unit
  }`;
}
