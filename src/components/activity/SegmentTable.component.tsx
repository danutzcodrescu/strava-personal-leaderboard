import { useLazyQuery } from '@apollo/client';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Paper,
} from '@material-ui/core';
import { EmojiEventsOutlined } from '@material-ui/icons';
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
import { SegmentDetails } from './SegmentDetails';
import { SegmentPersonalLeaderboard } from './SegmentPersonalLeaderboard';
import { StyledGrid } from './styles/SegmentTable.styles';

interface Props {
  segments: getActivity_activities_by_pk_segment_efforts[];
  activityLine: any;
}

interface ToggledSegment {
  id: number;
  segmentId: string;
}

export function SegmentsTable({ segments, activityLine }: Props) {
  const [expanded, setExpanded] = React.useState<ToggledSegment | null>(null);

  const [loadLeaderboards, { data }] = useLazyQuery<
    getSegmentLeaderboards,
    getSegmentLeaderboardsVariables
  >(GET_SEGMENT_LEADERBOARDS);

  const handleChange = (data: ToggledSegment) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? data : null);
    if (isExpanded) {
      loadLeaderboards({
        variables: {
          segmentId: data.segmentId,
          userId: parseInt(getUserInfo()!),
        },
      });
    }
  };
  return (
    <>
      <TitleTypography>Segments</TitleTypography>
      <Paper>
        <StyledGrid container>
          <StyledGrid item md={1}></StyledGrid>
          <StyledGrid item md={3}>
            <strong>Name</strong>
          </StyledGrid>
          <StyledGrid item md={2}>
            <strong>Timee</strong>
          </StyledGrid>
          <StyledGrid item md={2}>
            <strong>Speed</strong>
          </StyledGrid>
          <StyledGrid item md={2}>
            <strong>Power</strong>
          </StyledGrid>
          <StyledGrid item md={2}>
            <strong>HR</strong>
          </StyledGrid>
        </StyledGrid>

        {segments.map((segment) => {
          return (
            <Accordion
              square
              expanded={expanded?.id === segment.id}
              onChange={handleChange({
                id: segment.id,
                segmentId: segment.segment.external_id,
              })}
              key={segment.id}
              TransitionProps={{ unmountOnExit: true }}
            >
              <AccordionSummary
                aria-controls={`${segment.name}-content`}
                id={`${segment.name}-header`}
              >
                <StyledGrid container>
                  <StyledGrid
                    item
                    md={1}
                    style={{
                      color: trophyColors(segment.pr_rank),
                    }}
                  >
                    {segment.pr_rank ? <EmojiEventsOutlined /> : null}
                  </StyledGrid>
                  <StyledGrid item md={3}>
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
                  </StyledGrid>
                  <StyledGrid item md={2}>
                    {convertDurationForPR(segment.elapsed_time)}
                  </StyledGrid>
                  <StyledGrid item md={2}>
                    {calculateSpeed(
                      segment.segment.distance,
                      segment.elapsed_time
                    )}
                  </StyledGrid>
                  <StyledGrid item md={2}>
                    {segment.average_watts}w
                  </StyledGrid>
                  <StyledGrid item md={2}>
                    {segment.average_heartrate
                      ? `${segment.average_heartrate}bpm`
                      : '--'}
                  </StyledGrid>
                </StyledGrid>
              </AccordionSummary>
              <AccordionDetails>
                <StyledGrid container>
                  <Grid item container md={6}>
                    <Grid item md={3}>
                      <TitleTypography>
                        {convertDurationForPR(segment.elapsed_time)}
                      </TitleTypography>
                      <SubtitleTypography>This effort</SubtitleTypography>
                    </Grid>
                    <Grid item md={3}>
                      <SubtitleTypography>
                        {convertDurationForPR(segment.moving_time)}
                      </SubtitleTypography>
                      <SubtitleTypography>Moving effort</SubtitleTypography>
                    </Grid>
                    <Grid item md={3}>
                      <SubtitleTypography>
                        {segment.average_heartrate}bpm avg heartrate
                      </SubtitleTypography>
                    </Grid>
                    <Grid item md={3}>
                      <SubtitleTypography>
                        {segment.max_heartrate}bpm max heartrate
                      </SubtitleTypography>
                    </Grid>
                    <Grid item md={12}>
                      {expanded ? (
                        <SegmentDetails
                          startPoint={segment.segment.start_point}
                          endPoint={segment.segment.end_point}
                          activityLine={activityLine}
                          segmentId={segment.id}
                          distance={segment.segment!.distance}
                        />
                      ) : null}
                    </Grid>
                  </Grid>
                  <StyledGrid item md={6}>
                    {expanded?.id === segment.id && data ? (
                      <SegmentPersonalLeaderboard
                        segment_efforts={data.segment_efforts}
                        distance={segment.segment.distance}
                      />
                    ) : null}
                  </StyledGrid>
                </StyledGrid>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Paper>
    </>
  );
}
