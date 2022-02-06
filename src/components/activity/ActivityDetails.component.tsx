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
import { getActivity_activities_by_pk } from '../../types/getActivity';

interface Props {
  activity: getActivity_activities_by_pk;
}

export function ActivityDetails({ activity }: Props) {
  return (
    <Grid
      templateColumns={{
        base: '100%',
        lg: '40% 1fr',
      }}
      gridGap={2}
    >
      <Box>
        <TitleTypography>{activity.name}</TitleTypography>
        <SubtitleTypography>
          {activityDate(activity.start_date_local)}
        </SubtitleTypography>
      </Box>
      <Box>
        <SimpleGrid columns={3}>
          <Box>
            <ValueTypography>
              {convertDistance(activity.distance)}
            </ValueTypography>
            <SubtitleTypography>Distance</SubtitleTypography>
          </Box>
          <Box>
            <ValueTypography>
              {convertDurationForActivityTitle(activity.elapsed_time)}
            </ValueTypography>
            <SubtitleTypography>elapsed time</SubtitleTypography>
          </Box>
          <Box>
            <ValueTypography>
              {convertDurationForActivityTitle(activity.moving_time)}
            </ValueTypography>
            <SubtitleTypography>moving time</SubtitleTypography>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={3} as={Text}>
          <Box as="span">Speed</Box>
          <Box as="span">{convertSpeed(activity.average_speed)}</Box>
          <Box>{convertSpeed(activity.max_speed)}</Box>
        </SimpleGrid>
      </Box>
    </Grid>
  );
}
