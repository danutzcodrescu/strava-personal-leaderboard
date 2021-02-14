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
