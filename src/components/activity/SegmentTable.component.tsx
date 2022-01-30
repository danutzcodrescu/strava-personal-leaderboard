import { useLazyQuery } from '@apollo/client';
import {
  Accordion,
  Box,
  Grid,
  GridItem,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  SimpleGrid,
  useToken,
} from '@chakra-ui/react';
import * as React from 'react';
import { GET_SEGMENT_LEADERBOARDS } from '../../queries/activity';
import { distanceForSegment } from '../../toolbox/distance';
import { getUserInfo } from '../../toolbox/setUserToken';
import { calculateSpeed } from '../../toolbox/speed';
import { convertDurationForPR } from '../../toolbox/time';
import { trophyColors } from '../../toolbox/trophyColors';
import { SubtitleTypography, TitleTypography } from '../../toolbox/typograpies';
import { getActivity_activities_by_pk_segment_efforts } from '../../types/getActivity';
import {
  getSegmentLeaderboards,
  getSegmentLeaderboardsVariables,
} from '../../types/getSegmentLeaderboards';
import { TrophyIcon } from '../shared/Icons';
import { SegmentDetails } from './SegmentDetails';
import { SegmentPersonalLeaderboard } from './SegmentPersonalLeaderboard';
import { useSegmentStore } from './store/segment.store';
import { isAnyPartOfElementInViewport } from './utils';

const templateColumns = '1fr 4fr repeat(4, 2fr)';

interface Props {
  segments: getActivity_activities_by_pk_segment_efforts[];
  activityLine: any;
}

interface ToggledSegment {
  id: number;
  segmentId: string;
  startPoint: string;
  endPoint: string;
}

export function SegmentsTable({ segments, activityLine }: Props) {
  const dispatch = useSegmentStore((state) => state.dispatch);
  const id = useSegmentStore((state) => state.id);
  const indexRef = React.useRef(-1);
  const [loadLeaderboards, { data }] = useLazyQuery<
    getSegmentLeaderboards,
    getSegmentLeaderboardsVariables
  >(GET_SEGMENT_LEADERBOARDS);
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
              id: segments[index].id,
              segmentId: segments[index].segment.external_id,
              startPoint: segments[index].segment.start_point,
              endPoint: segments[index].segment.end_point,
            }
          : null;
      dispatch({ type: 'setSegment', payload: segment });
      if (index > -1) {
        loadLeaderboards({
          variables: {
            segmentId: segment?.segmentId,
            userId: parseInt(getUserInfo()!),
          },
        });
      }
    },
    [dispatch, loadLeaderboards, segments]
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
  if (segments[indexRef.current]?.id !== id) {
    indexRef.current = segments.findIndex((segment) => segment.id === id);
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
          {segments.map((segment, index) => {
            return (
              <AccordionItem key={segment.id} data-id={segment.id}>
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
                        prRank: segment.pr_rank,
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
                        {id ? (
                          <SegmentDetails
                            startPoint={segment.segment.start_point}
                            endPoint={segment.segment.end_point}
                            activityLine={activityLine}
                            segmentId={segment.id}
                            distance={segment.segment!.distance}
                            weatherId={segment.weather_id}
                          />
                        ) : null}
                      </Box>
                    </SimpleGrid>
                    <Box>
                      {id === segment.id && data ? (
                        <SegmentPersonalLeaderboard
                          segment_efforts={data.segment_efforts}
                          distance={segment.segment.distance}
                          selectedId={id!}
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
