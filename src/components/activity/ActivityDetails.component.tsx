import { Box, Grid, SimpleGrid, Text } from '@chakra-ui/react';
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
  const { data } = useActivityData();
  return (
    <Grid
      templateColumns={{
        base: '100%',
        lg: '40% 1fr',
      }}
      gridGap={2}
    >
      <Box>
        <TitleTypography>{data?.activities_by_pk?.name}</TitleTypography>
        <SubtitleTypography>
          {activityDate(data?.activities_by_pk?.start_date_local)}
        </SubtitleTypography>
      </Box>
      <Box>
        <SimpleGrid columns={3}>
          <Box>
            <ValueTypography>
              {convertDistance(data?.activities_by_pk?.distance)}
            </ValueTypography>
            <SubtitleTypography>Distance</SubtitleTypography>
          </Box>
          <Box>
            <ValueTypography>
              {convertDurationForActivityTitle(
                data?.activities_by_pk?.elapsed_time as number
              )}
            </ValueTypography>
            <SubtitleTypography>elapsed time</SubtitleTypography>
          </Box>
          <Box>
            <ValueTypography>
              {convertDurationForActivityTitle(
                data?.activities_by_pk?.moving_time as number
              )}
            </ValueTypography>
            <SubtitleTypography>moving time</SubtitleTypography>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={3} as={Text}>
          <Box as="span">Speed</Box>
          <Box as="span">
            {convertSpeed(data?.activities_by_pk?.average_speed as number)}
          </Box>
          <Box as="span">
            {convertSpeed(data?.activities_by_pk?.max_speed as number)}
          </Box>
        </SimpleGrid>
      </Box>
    </Grid>
  );
}
