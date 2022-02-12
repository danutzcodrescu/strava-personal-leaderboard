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
import { Card } from '../shared/Card';
import { DistanceIcon, DurationIcon, ElevationIcon } from '../shared/Icons';
import { useDashboardData } from './hooks';

export function UserData() {
  const { data } = useDashboardData();
  return (
    <Card w="xs" p="2" position="relative">
      <Center
        top={`calc(var(--chakra-sizes-24) / 2 * -1)`}
        position="absolute"
        width="100%"
      >
        <Avatar
          boxShadow="2xl"
          size="xl"
          name={data?.users_by_pk?.username}
          src={data?.users_by_pk?.profile}
        />
      </Center>
      <Heading
        as="h2"
        fontSize="1.3rem"
        textAlign="center"
        fontWeight="bold"
        mb={4}
        mt={14}
      >
        {data?.users_by_pk?.first_name} {data?.users_by_pk?.last_name}
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
            {data?.user_dashboard_summary[0].activities}
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
            {convertDistance(data?.user_dashboard_summary[0].distance)}
          </Text>
        </Box>
      </HStack>
      <PeriodTypography>
        <>This week&nbsp;</>
        <>{data?.activitiesWeek.aggregate?.count} activities</>
      </PeriodTypography>
      <SimpleGrid fontSize="0.8rem" gap={4} columns={3}>
        <HStack alignItems="center" as={Text}>
          <DistanceIcon
            aria-label="total distance covered this week"
            role="img"
          />
          <Text as="span">
            {convertDistance(data?.activitiesWeek.aggregate?.sum!.distance)}
          </Text>
        </HStack>
        <HStack alignItems="center" as={Text}>
          <DurationIcon aria-label="total ride duration this week" role="img" />
          <Text as="span">
            {convertDurationForActivityTitle(
              data?.activitiesWeek.aggregate?.sum!.moving_time!
            )}
          </Text>
        </HStack>
        <HStack alignItems="center" as={Text}>
          <ElevationIcon aria-label="total elevation this week" role="img" />
          <Text as="span">
            {convertDistance(
              data?.activitiesWeek?.aggregate?.sum!.total_elevation_gain!
            )}
          </Text>
        </HStack>
      </SimpleGrid>
      <PeriodTypography>
        <>This year&nbsp;</>
        <>{data?.activitiesYear?.aggregate?.count} activities</>
      </PeriodTypography>
      <SimpleGrid columns={3} fontSize="0.8rem" gap={4}>
        <HStack alignItems="center" as={Text}>
          <DistanceIcon aria-label="total ride distance this year" role="img" />
          <Text as="span">
            {convertDistance(data?.activitiesYear?.aggregate?.sum!.distance)}
          </Text>
        </HStack>
        <HStack alignItems="center" as={Text}>
          <DurationIcon role="img" aria-label="total ride duration this year" />
          <Text as="span">
            {convertDurationForActivityTitle(
              data?.activitiesYear?.aggregate?.sum!.moving_time!
            )}
          </Text>
        </HStack>
        <HStack alignItems="center" as={Text}>
          <ElevationIcon role="img" aria-label="total elevation this year" />
          <Text as="span">
            {convertDistance(
              data?.activitiesYear?.aggregate?.sum!.total_elevation_gain!
            )}
          </Text>
        </HStack>
      </SimpleGrid>
    </Card>
  );
}
