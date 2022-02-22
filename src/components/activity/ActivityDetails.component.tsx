import { Box, Grid, SimpleGrid, SkeletonText, Text } from '@chakra-ui/react';
import * as React from 'react';
import { convertDistance } from '../../toolbox/distance';
import { convertSpeed } from '../../toolbox/speed';
import {
  activityDate,
  convertDurationForActivityTitle,
} from '../../toolbox/time';
import {
  SubtitleTypography,
  TitleTypography,
  ValueTypography,
} from '../../toolbox/typograpies';
import { useActivityData } from './hooks';

export function ActivityDetails() {
  const { data, isLoading } = useActivityData();
  return (
    <Grid
      templateColumns={{
        base: '100%',
        lg: '40% 1fr',
      }}
      gridGap={2}
    >
      <Box>
        {isLoading ? (
          <SkeletonText noOfLines={2} maxW="40%" />
        ) : (
          <>
            <TitleTypography>{data?.activities_by_pk?.name}</TitleTypography>
            <SubtitleTypography>
              {activityDate(data?.activities_by_pk?.start_date_local)}
            </SubtitleTypography>
          </>
        )}
      </Box>
      <Box>
        <SimpleGrid columns={3}>
          <Box>
            {isLoading ? (
              <SkeletonText noOfLines={2} maxW="50%" />
            ) : (
              <>
                <ValueTypography>
                  {convertDistance(data?.activities_by_pk?.distance)}
                </ValueTypography>
                <SubtitleTypography>Distance</SubtitleTypography>
              </>
            )}
          </Box>
          <Box>
            {isLoading ? (
              <SkeletonText noOfLines={2} maxW="50%" />
            ) : (
              <>
                <ValueTypography>
                  {convertDurationForActivityTitle(
                    data?.activities_by_pk?.elapsed_time as number
                  )}
                </ValueTypography>
                <SubtitleTypography>elapsed time</SubtitleTypography>
              </>
            )}
          </Box>
          <Box>
            {isLoading ? (
              <SkeletonText noOfLines={2} maxW="50%" mb={2} />
            ) : (
              <>
                <ValueTypography>
                  {convertDurationForActivityTitle(
                    data?.activities_by_pk?.moving_time as number
                  )}
                </ValueTypography>
                <SubtitleTypography>moving time</SubtitleTypography>
              </>
            )}
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={3} as={Text}>
          {isLoading ? (
            <>
              <SkeletonText noOfLines={1} maxW="50%" />
              <SkeletonText noOfLines={1} maxW="50%" />
              <SkeletonText noOfLines={1} maxW="50%" />
            </>
          ) : (
            <>
              <Box as="span">Speed</Box>
              <Box as="span">
                {convertSpeed(data?.activities_by_pk?.average_speed as number)}
              </Box>
              <Box as="span">
                {convertSpeed(data?.activities_by_pk?.max_speed as number)}
              </Box>
            </>
          )}
        </SimpleGrid>
      </Box>
    </Grid>
  );
}
