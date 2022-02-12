import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
  GridItem,
  SimpleGrid,
  useToken,
} from '@chakra-ui/react';
import * as React from 'react';
import { useQueryClient } from 'react-query';
import { fetcher } from '../../toolbox/client';
import { distanceForSegment } from '../../toolbox/distance';
import { getUserInfo } from '../../toolbox/setUserToken';
import { calculateSpeed } from '../../toolbox/speed';
import { convertDurationForPR } from '../../toolbox/time';
import { trophyColors } from '../../toolbox/trophyColors';
import { SubtitleTypography, TitleTypography } from '../../toolbox/typograpies';
import {
  GetSegmentLeaderboardsDocument,
  GetSegmentLeaderboardsQuery,
  GetSegmentLeaderboardsQueryVariables,
} from '../../types/graphql';
import { TrophyIcon } from '../shared/Icons';
import { useActivityData } from './hooks';
import { SegmentDetails } from './SegmentDetails';
import { SegmentPersonalLeaderboard } from './SegmentPersonalLeaderboard';
import { useSegmentStore } from './store/segment.store';
import { isAnyPartOfElementInViewport } from './utils';

const templateColumns = '1fr 4fr repeat(4, 2fr)';

interface Props {
  activityLine: any;
}

interface ToggledSegment {
  id: number;
  segmentId: string;
  startPoint: string;
  endPoint: string;
}

export function SegmentsTable({ activityLine }: Props) {
  const queryClient = useQueryClient();
  const { data } = useActivityData();
  const dispatch = useSegmentStore((state) => state.dispatch);
  const id = useSegmentStore((state) => state.id);
  const indexRef = React.useRef(-1);
  const [goldColor, silverColor, bronzeColor] = useToken('colors', [
    'trophy.gold',
    'trophy.silver',
    'trophy.bronze',
  ]);

  const handleChange = React.useCallback(
    (index: number) => {
      indexRef.current = index;
      const segment: ToggledSegment | null =
        index > -1
          ? {
              id: data?.activities_by_pk?.segment_efforts[index].id!,
              segmentId:
                data?.activities_by_pk?.segment_efforts[index].segment_id,
              startPoint:
                data?.activities_by_pk?.segment_efforts[index].segment
                  .start_point!,
              endPoint:
                data?.activities_by_pk?.segment_efforts[index].segment
                  .end_point!,
            }
          : null;
      dispatch({ type: 'setSegment', payload: segment });
    },
    [dispatch, data?.activities_by_pk?.segment_efforts]
  );

  React.useLayoutEffect(() => {
    const el = document.querySelector(`[data-id="${id}"]`);
    if (el && !isAnyPartOfElementInViewport(el)) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [id]);

  React.useEffect(() => {
    return () => {
      dispatch({ type: 'setSegment', payload: null });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (data?.activities_by_pk?.segment_efforts[indexRef.current]?.id !== id) {
    indexRef.current = data?.activities_by_pk?.segment_efforts.findIndex(
      (segment) => segment.id === id
    ) as number;
  }

  return (
    <>
      <TitleTypography mb={6}>Segments</TitleTypography>
      <Box role="table">
        <Grid
          gridTemplateColumns={templateColumns}
          role="row"
          bgColor="gray.100"
          py={1.5}
          textAlign="left"
          width="100%"
        >
          <GridItem gridColumnStart={2} role="columnheader">
            <strong>Name</strong>
          </GridItem>
          <GridItem role="columnheader">
            <strong>Time</strong>
          </GridItem>
          <GridItem role="columnheader">
            <strong>Speed</strong>
          </GridItem>
          <GridItem role="columnheader">
            <strong>Power</strong>
          </GridItem>
          <GridItem role="columnheader">
            <strong>HR</strong>
          </GridItem>
        </Grid>
        <Accordion allowToggle index={indexRef.current} onChange={handleChange}>
          {data?.activities_by_pk?.segment_efforts.map((segment, index) => {
            return (
              <AccordionItem
                key={segment.id}
                data-id={segment.id}
                onMouseOver={() =>
                  queryClient.prefetchQuery(
                    [
                      'getSegmentLeaderboards',
                      {
                        segmentId: segment.segment_id,
                        userId: parseInt(getUserInfo() as string),
                      },
                    ],
                    fetcher<
                      GetSegmentLeaderboardsQuery,
                      GetSegmentLeaderboardsQueryVariables
                    >(GetSegmentLeaderboardsDocument, {
                      userId: parseInt(getUserInfo() as string),
                      segmentId: segment.segment_id,
                    })
                  )
                }
              >
                <AccordionButton
                  px={0}
                  width="100%"
                  role="rowgroup"
                  _hover={{ bgColor: 'gray.100' }}
                >
                  <Grid
                    gridTemplateColumns={templateColumns}
                    role="row"
                    aria-rowindex={index + 1}
                    textAlign="left"
                    width="100%"
                    alignItems="center"
                  >
                    <GridItem
                      role="cell"
                      color={trophyColors({
                        goldColor,
                        silverColor,
                        bronzeColor,
                        prRank: segment.pr_rank!,
                      })}
                      textAlign="center"
                    >
                      {segment.pr_rank ? <TrophyIcon /> : null}
                    </GridItem>
                    <GridItem role="cell">
                      {segment.name}
                      <SubtitleTypography>
                        <span title="Distance">
                          {distanceForSegment(segment.segment.distance)}
                        </span>
                        &nbsp;
                        <span title="Elevation difference">
                          {(
                            segment.segment.elevation_high -
                            segment.segment.elevation_low
                          ).toFixed(0)}
                          m
                        </span>
                        &nbsp;
                        <span title="Average grade">
                          {segment.segment.average_grade.toFixed(0)}%
                        </span>
                      </SubtitleTypography>
                    </GridItem>
                    <GridItem role="cell">
                      {convertDurationForPR(segment.elapsed_time)}
                    </GridItem>
                    <GridItem role="cell">
                      {calculateSpeed(
                        segment.segment.distance,
                        segment.elapsed_time
                      )}
                    </GridItem>
                    <GridItem role="cell">{segment.average_watts}w</GridItem>
                    <GridItem role="cell">
                      {segment.average_heartrate
                        ? `${segment.average_heartrate}bpm`
                        : '--'}
                    </GridItem>
                  </Grid>
                </AccordionButton>
                <AccordionPanel>
                  <SimpleGrid columns={2}>
                    <SimpleGrid columns={2} alignItems="flex-end" rowGap={2.5}>
                      <Box>
                        <TitleTypography mb={1.5}>
                          {convertDurationForPR(segment.elapsed_time)}
                        </TitleTypography>
                        <SubtitleTypography>This effort</SubtitleTypography>
                      </Box>
                      <Box>
                        <SubtitleTypography mb={1.5}>
                          {convertDurationForPR(segment.moving_time)}
                        </SubtitleTypography>
                        <SubtitleTypography>Moving effort</SubtitleTypography>
                      </Box>
                      <Box>
                        <SubtitleTypography>
                          <b>AVG:</b> {segment.average_heartrate}bpm
                        </SubtitleTypography>
                      </Box>
                      <Box>
                        <SubtitleTypography>
                          <b>MAX</b> {segment.max_heartrate}bpm
                        </SubtitleTypography>
                      </Box>
                      <Box>
                        {id === segment.id ? (
                          <SegmentDetails
                            startPoint={segment.segment.start_point}
                            endPoint={segment.segment.end_point}
                            activityLine={activityLine}
                            distance={segment.segment!.distance}
                            weatherId={segment.weather_id}
                          />
                        ) : null}
                      </Box>
                    </SimpleGrid>
                    <Box>
                      {id === segment.id ? (
                        <SegmentPersonalLeaderboard
                          distance={segment.segment.distance}
                          selectedId={segment.segment_id}
                        />
                      ) : null}
                    </Box>
                  </SimpleGrid>
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Box>
    </>
  );
}
