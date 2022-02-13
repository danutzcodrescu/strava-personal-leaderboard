import { GetDetailedSegmentLeaderboardsQuery } from '../../../types/graphql';

export function sortByDate(
  a: GetDetailedSegmentLeaderboardsQuery['segment_efforts'][0],
  b: GetDetailedSegmentLeaderboardsQuery['segment_efforts'][0]
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
