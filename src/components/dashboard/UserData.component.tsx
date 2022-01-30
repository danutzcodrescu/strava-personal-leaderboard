import {
  Avatar,
  Box,
  Center,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { convertDistance } from '../../toolbox/distance';
import { convertDurationForActivityTitle } from '../../toolbox/time';
import {
  PeriodTypography,
  SubtitleTypography,
} from '../../toolbox/typograpies';
import {
  getUserData_activitiesWeek_aggregate,
  getUserData_activitiesYear_aggregate,
  getUserData_user_dashboard_summary,
} from '../../types/getUserData';
import { Card } from '../shared/Card';
import { DistanceIcon, DurationIcon, ElevationIcon } from '../shared/Icons';

export interface UserDataProps {
  profile: string;
  first_name: string;
  last_name: string;
  username: string;
  summary: getUserData_user_dashboard_summary;
  weekSummary: getUserData_activitiesWeek_aggregate;
  yearSummary: getUserData_activitiesYear_aggregate;
}

export function UserData({
  profile,
  first_name,
  last_name,
  username,
  summary,
  weekSummary,
  yearSummary,
}: UserDataProps) {
  return (
    <Card w="xs" p="2" position="relative">
      <Center
        top={`calc(var(--chakra-sizes-24) / 2 * -1)`}
        position="absolute"
        width="100%"
      >
        <Avatar boxShadow="2xl" size="xl" name={username} src={profile} />
      </Center>
      <Heading
        as="h2"
        fontSize="1.3rem"
        textAlign="center"
        fontWeight="bold"
        mb={4}
        mt={14}
      >
        {first_name} {last_name}
      </Heading>
      <HStack justify="space-between">
        <Box as={Text}>
          <SubtitleTypography
            color="primary.main"
            as="span"
            display="block"
            textAlign="center"
            fontWeight="bold"
            fontSize="1rem"
          >
            Activities
          </SubtitleTypography>
          <Text as="span" align="center" display="block">
            {summary.activities}
          </Text>
        </Box>
        <Box as={Text}>
          <SubtitleTypography
            as="span"
            display="block"
            color="primary.main"
            textAlign="center"
            fontSize="1rem"
            fontWeight="bold"
          >
            Distance
          </SubtitleTypography>
          <Text as="span" align="center" display="block">
            {convertDistance(summary.distance)}
          </Text>
        </Box>
      </HStack>
      <PeriodTypography>
        <>This week&nbsp;</>
        <>{weekSummary.count} activities</>
      </PeriodTypography>
      <SimpleGrid fontSize="0.8rem" gap={4} columns={3}>
        <HStack alignItems="center" as={Text}>
          <DistanceIcon
            aria-label="total distance covered this week"
            role="img"
          />
          <Text as="span">{convertDistance(weekSummary.sum!.distance)}</Text>
        </HStack>
        <HStack alignItems="center" as={Text}>
          <DurationIcon aria-label="total ride duration this week" role="img" />
          <Text as="span">
            {convertDurationForActivityTitle(weekSummary.sum!.moving_time!)}
          </Text>
        </HStack>
        <HStack alignItems="center" as={Text}>
          <ElevationIcon aria-label="total elevation this week" role="img" />
          <Text as="span">
            {convertDistance(weekSummary.sum!.total_elevation_gain!)}
          </Text>
        </HStack>
      </SimpleGrid>
      <PeriodTypography>
        <>This year&nbsp;</>
        <>{yearSummary.count} activities</>
      </PeriodTypography>
      <SimpleGrid columns={3} fontSize="0.8rem" gap={4}>
        <HStack alignItems="center" as={Text}>
          <DistanceIcon aria-label="total ride distance this year" role="img" />
          <Text as="span">{convertDistance(yearSummary.sum!.distance)}</Text>
        </HStack>
        <HStack alignItems="center" as={Text}>
          <DurationIcon role="img" aria-label="total ride duration this year" />
          <Text as="span">
            {convertDurationForActivityTitle(yearSummary.sum!.moving_time!)}
          </Text>
        </HStack>
        <HStack alignItems="center" as={Text}>
          <ElevationIcon role="img" aria-label="total elevation this year" />
          <Text as="span">
            {convertDistance(yearSummary.sum!.total_elevation_gain!)}
          </Text>
        </HStack>
      </SimpleGrid>
    </Card>
  );
}
