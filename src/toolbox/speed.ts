import convert from 'convert-units';
export function convertSpeed(speed: number) {
  const converted = convert(speed).from('m/s').to('km/h');

  return `${converted.toFixed(1)}km/h`;
}

export function calculateSpeed(distance: number, time: number) {
  const speed = distance / time;
  return `${convert(speed).from('m/s').to('km/h').toFixed(1)}km/h`;
}
