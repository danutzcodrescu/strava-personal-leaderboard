import { getDetailedSegmentLeaderboards_segment_efforts } from '../../../types/getDetailedSegmentLeaderboards';

export function sortByDate(
  a: getDetailedSegmentLeaderboards_segment_efforts,
  b: getDetailedSegmentLeaderboards_segment_efforts
) {
  return new Date(a.start_date_local).getTime() >
    new Date(b.start_date_local).getTime()
    ? -1
    : 1;
}

export function getDirection(angle: number) {
  const directions = ['N', 'NW', 'W', 'SW', 'S', 'SE', 'E', 'NE'];
  const index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
  return directions[index];
}
