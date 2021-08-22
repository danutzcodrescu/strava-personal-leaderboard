import * as React from 'react';
import { getDetailedSegmentLeaderboards_segment_efforts } from '../../types/getDetailedSegmentLeaderboards';
import { useTable, Column, usePagination, Row, useSortBy } from 'react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from '@material-ui/core';
import {
  activityDateForSegment,
  convertDurationForPR,
} from '../../toolbox/time';
import { calculateSpeedValue } from '../../toolbox/speed';
import { useTableStyles } from './SegmentTable.styles';
import { TablePaginationActions } from './TablePagination';

const columns: Column[] = [
  {
    Header: 'Rank',
    id: 'rank',
    Cell: (param) => param.row.index + 1,
  },
  {
    Header: 'Date',
    accessor: 'start_date_local',
    Cell: (stuff) => {
      return activityDateForSegment(stuff.value);
    },
  },
  {
    Header: 'Speed',
    // @ts-ignore
    accessor: (row: getDetailedSegmentLeaderboards_segment_efforts) =>
      calculateSpeedValue(row.segment.distance, row.elapsed_time),
    id: 'speed',
    Cell: (param) => `${param.value} km/h`,
  },
  {
    Header: 'Moving speed',
    // @ts-ignore
    accessor: (row: getDetailedSegmentLeaderboards_segment_efforts) =>
      calculateSpeedValue(row.segment.distance, row.moving_time),
    id: 'moving_speed',
    Cell: (param) => `${param.value} km/h`,
  },
  {
    Header: 'Time',
    accessor: 'elapsed_time',
    Cell: (param) => convertDurationForPR(param.value),
  },
  {
    Header: 'HR',
    accessor: 'average_heartrate',
    Cell: (param) => `${param.value} bpm`,
  },
];

interface Props {
  segments: getDetailedSegmentLeaderboards_segment_efforts[];
}

export function SegmentTable({ segments }: Props) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // @ts-ignore
    page,
    // @ts-ignore
    gotoPage,
    // @ts-ignore
    state: { pageIndex, pageSize },
  } = useTable(
    {
      // @ts-ignore
      columns,
      data: segments,
      usePagination,
      initialState: {
        // @ts-ignore
        pageSize: 15,
      },
    },
    useSortBy,
    usePagination
  );

  const classes = useTableStyles();
  return (
    <Table {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup) => (
          <TableRow
            {...headerGroup.getHeaderGroupProps()}
            classes={{ root: classes.tableRow }}
          >
            {headerGroup.headers.map((column) => (
              <TableCell
                // @ts-expect-error
                {...column.getHeaderProps(column.getSortByToggleProps())}
                classes={{ root: classes.headerCell }}
              >
                {column.render('Header')}

                <TableSortLabel
                  // @ts-expect-error
                  active={column.isSorted}
                  // react-table has a unsorted state which is not treated here
                  // @ts-expect-error
                  direction={column.isSortedDesc ? 'desc' : 'asc'}
                />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps}>
        {page.map(
          (row: Row<getDetailedSegmentLeaderboards_segment_efforts>) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          }
        )}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[pageSize]}
            count={rows.length}
            rowsPerPage={pageSize}
            page={pageIndex}
            onPageChange={(_, page) => gotoPage(page)}
            ActionsComponent={TablePaginationActions as any}
          />
        </TableRow>
      </TableFooter>
    </Table>
  );
}
