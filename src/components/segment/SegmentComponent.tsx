import { Skeleton, SkeletonText } from '@chakra-ui/react';
import * as React from 'react';
import { getLineData, mapHeight } from '../../toolbox/map';
import { TitleTypography } from '../../toolbox/typograpies';
import { Spacer } from '../activity/Activity.component';
import { ElevationChart } from '../activity/ElevationChart.component';
import { ScreenWrapper } from '../shared/ScreenWrapper';
import { useSegmentData } from './hooks';
import { SegmentLeaderboardsChart } from './SegmentChart';
import { SegmentInfo } from './SegmentInfo';
import { SegmentTable } from './SegmentTable';

const Map = React.lazy(() =>
  import('./SegmentMap').then((mod) => ({ default: mod.SegmentMap }))
);

export function SegmentComponent() {
  const { data, isLoading } = useSegmentData();
  if (isLoading) {
    return (
      <ScreenWrapper
        bgColor="white"
        border="1px solid"
        borderColor="gray.400"
        p="5"
      >
        <SkeletonText noOfLines={1} maxW="25%" mb={4} />
        <SegmentInfo />
        <Spacer />
        <Skeleton h={mapHeight} />
        <Skeleton h={mapHeight} mt={4} />
      </ScreenWrapper>
    );
  }
  if (!data || !data.segment_efforts?.length) return <p>No data</p>;
  const { line, bounds } = getLineData(
    data.segment_efforts[0].segment.map?.map
  );
  return (
    <ScreenWrapper
      bgColor="white"
      border="1px solid"
      borderColor="gray.400"
      p="5"
    >
      <TitleTypography mb={4}>{data.segment_efforts[0].name}</TitleTypography>
      <SegmentInfo></SegmentInfo>
      <Spacer />
      <React.Suspense fallback={<Skeleton height={mapHeight} />}>
        <Map
          startPoint={data.segment_efforts[0].segment.start_point}
          endPoint={data.segment_efforts[0].segment.end_point}
          line={line}
          bounds={bounds}
        />
      </React.Suspense>
      <ElevationChart
        line={line}
        distance={data.segment_efforts[0].segment.distance}
        key="segment-chart"
      />
      <Spacer />
      <SegmentLeaderboardsChart data={data.segment_efforts} />
      <Spacer />
      <SegmentTable segments={data.segment_efforts} />
    </ScreenWrapper>
  );
}
