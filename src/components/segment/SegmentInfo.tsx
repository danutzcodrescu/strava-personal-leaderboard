import { SimpleGrid, GridItem, Text, SkeletonText } from '@chakra-ui/react';
import * as React from 'react';
import { convertDistance } from '../../toolbox/distance';
import { SubtitleTypography } from '../../toolbox/typograpies';
import { useSegmentData } from './hooks';

export function SegmentInfo() {
  const { data, isLoading } = useSegmentData();
  const segment = data?.segment_efforts?.[0].segment;
  return (
    <>
      <SimpleGrid columns={5}>
        <GridItem as={Text}>
          {isLoading ? (
            <SkeletonText noOfLines={2} maxW="25%" />
          ) : (
            <>
              {' '}
              <SubtitleTypography>Distance:</SubtitleTypography>
              <SubtitleTypography>
                {convertDistance(segment!.distance)}
              </SubtitleTypography>
            </>
          )}
        </GridItem>
        <GridItem as={Text}>
          {isLoading ? (
            <SkeletonText noOfLines={2} maxW="25%" />
          ) : (
            <>
              {' '}
              <SubtitleTypography>Avg grade:</SubtitleTypography>
              <SubtitleTypography>{segment!.average_grade}%</SubtitleTypography>
            </>
          )}
        </GridItem>
        <GridItem as={Text}>
          {isLoading ? (
            <SkeletonText noOfLines={2} maxW="25%" />
          ) : (
            <>
              <SubtitleTypography>Lowest elev:</SubtitleTypography>
              <SubtitleTypography>{segment!.elevation_low}m</SubtitleTypography>
            </>
          )}
        </GridItem>
        <GridItem as={Text}>
          {isLoading ? (
            <SkeletonText noOfLines={2} maxW="25%" />
          ) : (
            <>
              {' '}
              <SubtitleTypography>Highest elev:</SubtitleTypography>
              <SubtitleTypography>
                {segment!.elevation_high}m
              </SubtitleTypography>
            </>
          )}
        </GridItem>
        <GridItem as={Text}>
          {isLoading ? (
            <SkeletonText noOfLines={2} maxW="25%" />
          ) : (
            <>
              <SubtitleTypography>Elev difference:</SubtitleTypography>
              <SubtitleTypography>
                {segment!.total_elevation_gain}m
              </SubtitleTypography>
            </>
          )}
        </GridItem>
      </SimpleGrid>
    </>
  );
}
