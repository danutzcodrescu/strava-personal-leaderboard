import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import * as React from 'react';
import { distanceForSegment } from '../../toolbox/distance';
import { calculateSpeed } from '../../toolbox/speed';
import { convertDurationForPR } from '../../toolbox/time';
import { SubtitleTypography, TitleTypography } from '../../toolbox/typograpies';
import { getActivity_activities_by_pk_segment_efforts } from '../../types/getActivity';
import { StyledTableCell } from './styles/SegmentTable.styles';

interface Props {
  segments: getActivity_activities_by_pk_segment_efforts[];
}

export function SegmentsTable({ segments }: Props) {
  return (
    <>
      <TitleTypography>Segments</TitleTypography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Time</StyledTableCell>
              <StyledTableCell>Speed</StyledTableCell>
              <StyledTableCell>Power</StyledTableCell>
              <StyledTableCell>HR</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {segments.map((segment) => (
              <TableRow key={segment.id}>
                <TableCell component="th" scope="row">
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
                </TableCell>
                <TableCell>
                  {convertDurationForPR(segment.elapsed_time)}
                </TableCell>
                <TableCell>
                  {calculateSpeed(
                    segment.segment.distance,
                    segment.elapsed_time
                  )}
                </TableCell>
                <TableCell>{segment.average_watts}w</TableCell>
                <TableCell>
                  {segment.average_heartrate
                    ? `${segment.average_heartrate}bpm`
                    : '--'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
