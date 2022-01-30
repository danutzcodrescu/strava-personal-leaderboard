import { SimpleGrid, GridItem, Text } from '@chakra-ui/react';
import * as React from 'react';
import { convertDistance } from '../../toolbox/distance';
import { SubtitleTypography } from '../../toolbox/typograpies';
import { getDetailedSegmentLeaderboards_segment_efforts_segment } from '../../types/getDetailedSegmentLeaderboards';

interface Props {
  segment: getDetailedSegmentLeaderboards_segment_efforts_segment;
}

export function SegmentInfo({ segment }: Props) {
  return (
    <>
      <SimpleGrid columns={5}>
        <GridItem as={Text}>
          <SubtitleTypography>Distance:</SubtitleTypography>
          <SubtitleTypography>
            {convertDistance(segment.distance)}
          </SubtitleTypography>
        </GridItem>
        <GridItem as={Text}>
          <SubtitleTypography>Avg grade:</SubtitleTypography>
          <SubtitleTypography>{segment.average_grade}%</SubtitleTypography>
        </GridItem>
        <GridItem as={Text}>
          <SubtitleTypography>Lowest elev:</SubtitleTypography>
          <SubtitleTypography>{segment.elevation_low}m</SubtitleTypography>
        </GridItem>
        <GridItem as={Text}>
          <SubtitleTypography>Highest elev:</SubtitleTypography>
          <SubtitleTypography>{segment.elevation_high}m</SubtitleTypography>
        </GridItem>
        <GridItem as={Text}>
          <SubtitleTypography>Elev difference:</SubtitleTypography>
          <SubtitleTypography>
            {segment.total_elevation_gain}m
          </SubtitleTypography>
        </GridItem>
      </SimpleGrid>
    </>
  );
}
