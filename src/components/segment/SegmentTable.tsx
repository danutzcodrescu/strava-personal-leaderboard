import {
  Box,
  HStack,
  IconButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import * as React from 'react';
import {
  CellProps,
  Column,
  Row,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import { calculateSpeedValue } from '../../toolbox/speed';
import {
  activityDateForSegment,
  convertDurationForPR,
} from '../../toolbox/time';
import { getDetailedSegmentLeaderboards_segment_efforts } from '../../types/getDetailedSegmentLeaderboards';
import {
  ArrowDown,
  ArrowUp,
  FirstPage,
  LastPage,
  NextPage,
  PrevPage,
} from '../shared/Icons';
import { WeatherIcon } from '../weather/WeatherIcon';
import { getDirection } from './utils';

const columns: Column[] = [
  {
    Header: '#',
    id: 'rank',
    Cell: (param) => param.row.index + 1,
  },
  {
    Header: 'Date',
    accessor: 'start_date_local',
    Cell: (param) => {
      return activityDateForSegment(param.value);
    },
  },
  {
    Header: 'Speed',
    // @ts-ignore
    accessor: (row: getDetailedSegmentLeaderboards_segment_efforts) =>
      calculateSpeedValue(row.segment.distance, row.elapsed_time),
    id: 'speed',
    Cell: (param) => `${param.value} km/h`,
    canSort: true,
  },
  {
    Header: 'Moving',
    // @ts-ignore
    accessor: (row: getDetailedSegmentLeaderboards_segment_efforts) =>
      calculateSpeedValue(row.segment.distance, row.moving_time),
    id: 'moving_speed',
    Cell: (param) => `${param.value} km/h`,
    canSort: true,
  },
  {
    Header: 'Time',
    accessor: 'elapsed_time',
    Cell: (param) => convertDurationForPR(param.value),
    // @ts-ignore
    canSort: true,
  },
  {
    Header: 'Wind',
    // @ts-ignore
    accessor: (row: getDetailedSegmentLeaderboards_segment_efforts) => ({
      windSpeed: row.weather?.wind_speed,
      windDir: row.weather?.wind_dir,
    }),
    id: 'wind',
    Cell: (param) =>
      `${getDirection(param.value.windDir)} ${param.value.windSpeed} km/h`,
    canSort: true,
  },
  {
    Header: 'Gusts',
    // @ts-ignore
    accessor: (row: getDetailedSegmentLeaderboards_segment_efforts) =>
      row.weather?.wind_gust,
    id: 'wind-gusts',
    Cell: (param) => `${param.value} km/h`,
    canSort: true,
  },
  {
    Header: 'Temp',
    // @ts-ignore
    accessor: (row: getDetailedSegmentLeaderboards_segment_efforts) =>
      row.weather?.temperature,
    id: 'temperature',
    Cell: ({
      value,
      row,
    }: CellProps<getDetailedSegmentLeaderboards_segment_efforts>) => {
      return (
        <Box display="flex" alignItems="center" as="span" gap="10px">
          {Math.round(value)}&deg;{' '}
          {row.original.weather?.conditions ? (
            <WeatherIcon conditions={row.original.weather.conditions} />
          ) : null}
        </Box>
      );
    },
  },
  {
    Header: 'HR',
    accessor: 'average_heartrate',
    Cell: (param) => `${param.value} bpm`,
    // @ts-ignore
    canSort: true,
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
    page,
    gotoPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    nextPage,
    previousPage,
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
  return (
    <>
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr
              {...headerGroup.getHeaderGroupProps()}
              bgColor="gray.100"
              fontWeight="bold"
            >
              {headerGroup.headers.map((column: any) => (
                <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <Box as="span" ml={2}>
                    {column.isSorted && column.isSortedDesc ? (
                      <ArrowDown aria-label="sorted descending" />
                    ) : column.isSorted ? (
                      <ArrowUp aria-label="sorted ascending" />
                    ) : null}
                  </Box>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map(
            // @ts-ignore
            (row: Row<getDetailedSegmentLeaderboards_segment_efforts>) => {
              // @ts-ignore
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                  ))}
                </Tr>
              );
            }
          )}
        </Tbody>
      </Table>
      <HStack mt={3} justify="flex-end">
        <Box>
          {(pageIndex + 1) * pageSize - (pageSize - 1)}-
          {(pageIndex + 1) * pageSize} of {rows.length}
        </Box>
        <HStack gap={1.5}>
          <IconButton
            aria-label="go to first page"
            disabled={!canPreviousPage}
            onClick={() => gotoPage(0)}
            icon={<FirstPage />}
          />
          <IconButton
            aria-label="go to previous page"
            disabled={!canPreviousPage}
            onClick={() => previousPage()}
            icon={<PrevPage />}
          />
          <IconButton
            aria-label="go to next page"
            disabled={!canNextPage}
            onClick={() => nextPage()}
            icon={<NextPage />}
          />
          <IconButton
            aria-label="go to last page"
            disabled={!canNextPage}
            onClick={() => gotoPage(pageOptions.length - 1)}
            icon={<LastPage />}
          />
        </HStack>
      </HStack>
    </>
  );
}
