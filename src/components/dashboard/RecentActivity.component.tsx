import { Box, Link, SimpleGrid, Text } from '@chakra-ui/react';
import * as React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { convertDistance, distanceElevation } from '../../toolbox/distance';
import {
  activityDate,
  convertDurationForActivityTitle,
  convertDurationForPR,
} from '../../toolbox/time';
import {
  SubtitleTypography,
  TitleTypography,
  ValueTypography,
} from '../../toolbox/typograpies';
import { GetUserDataQuery } from '../../types/graphql';
import { TrophyIcon } from '../shared/Icons';

interface Props {
  activity: GetUserDataQuery['recentActivities'][0];
}

export function RecentActivityCard({ activity }: Props) {
  return (
    <>
      <TitleTypography mb={4}>
        <Link as={RouteLink} to={`/activity/${activity.external_id}`}>
          {activity.name}
        </Link>
        <SubtitleTypography
          fontSize="0.65em"
          fontWeight="650"
          display="flex"
          alignSelf="center"
        >
          {activityDate(activity.start_date_local)}
        </SubtitleTypography>
      </TitleTypography>
      <SimpleGrid my={6} columns={4}>
        <Text>
          <SubtitleTypography as="span">Distance</SubtitleTypography>
          <ValueTypography as="span">
            {convertDistance(activity.distance)}
          </ValueTypography>
        </Text>
        <Text
          borderInline="1px"
          borderColor="gray.300"
          px={4}
          width="max-content"
        >
          <SubtitleTypography as="span">Elev gain</SubtitleTypography>
          <ValueTypography as="span">
            {distanceElevation(activity.total_elevation_gain)}
          </ValueTypography>
        </Text>
        <Text>
          <SubtitleTypography as="span">Time</SubtitleTypography>
          <ValueTypography as="span">
            {convertDurationForActivityTitle(activity.moving_time)}
            &nbsp;/&nbsp;
            {convertDurationForActivityTitle(activity.elapsed_time)}
          </ValueTypography>
        </Text>
        <Text>
          {activity.achievement_count ? (
            <>
              <SubtitleTypography align="right" as="span">
                Achievements
              </SubtitleTypography>
              <ValueTypography align="right">
                <TrophyIcon role="img" />
                <Box as="span" ml={2}>
                  {activity.achievement_count}
                </Box>
              </ValueTypography>
            </>
          ) : null}
        </Text>
      </SimpleGrid>
      <Box mb="6">
        {activity.segment_efforts.map((effort) => {
          const movingTime = convertDurationForPR(effort.moving_time);
          const totalTime = convertDurationForPR(effort.elapsed_time);
          return (
            <SubtitleTypography key={effort.id}>
              {effort.name} <strong>PR</strong> (
              {movingTime === totalTime
                ? movingTime
                : movingTime + ' / ' + totalTime}
              )
            </SubtitleTypography>
          );
        })}
      </Box>
    </>
  );
}
