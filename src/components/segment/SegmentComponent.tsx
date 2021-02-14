import { useQuery } from '@apollo/client';
import { Theme } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import * as React from 'react';
import { MapContainer, Marker, Polyline, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';
import { GET_SEGMENT_LEADERBOARD } from '../../queries/segment';
import { getLineData } from '../../toolbox/map';
import { ScreenWrapper } from '../../toolbox/ScreenWrapper';
import { getUserInfo } from '../../toolbox/setUserToken';
import { TitleTypography } from '../../toolbox/typograpies';
import { getDetailedSegmentLeaderboards } from '../../types/getDetailedSegmentLeaderboards';
import { Spacer } from '../activity/Activity.component';
import { ElevationChart } from '../activity/ElevationChart.component';
import { HoverMarker } from '../activity/HoverMarker';
import { convertPostgresCoordsToLatLng } from '../activity/utils';
import { SegmentLeaderboardsChart } from './SegmentChart';
import { SegmentInfo } from './SegmentInfo';
import { SegmentTable } from './SegmentTable';

export function SegmentComponent() {
  const { palette } = useTheme<Theme>();
  const { id } = useParams<{ id: string }>();
  const { data } = useQuery<getDetailedSegmentLeaderboards>(
    GET_SEGMENT_LEADERBOARD,
    {
      variables: { segmentId: id, userId: getUserInfo() },
    }
  );
  if (!data || !data.segment_efforts?.length) return <p>No data</p>;
  const { line, bounds } = getLineData(
    data.segment_efforts[0].segment.map?.map
  );
  return (
    <ScreenWrapper>
      <TitleTypography>{data.segment_efforts[0].name}</TitleTypography>
      <SegmentInfo segment={data.segment_efforts[0].segment}></SegmentInfo>
      <Spacer />
      <MapContainer
        style={{ height: '270px' }}
        bounds={bounds}
        attributionControl={false}
        scrollWheelZoom={false}
        key="map"
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`}
          maxZoom={18}
          accessToken={process.env.REACT_APP_MAPBOX}
          id="mapbox/light-v10"
          key="tiles"
        />
        <Polyline color={palette.primary.main} positions={line} key="line" />
        <Marker
          key="start"
          position={convertPostgresCoordsToLatLng(
            data.segment_efforts[0].segment.start_point
          )}
        ></Marker>
        <Marker
          position={convertPostgresCoordsToLatLng(
            data.segment_efforts[0].segment.end_point
          )}
          key="end"
        ></Marker>
        <HoverMarker />
      </MapContainer>
      <ElevationChart
        line={line}
        distance={data.segment_efforts[0].segment.distance}
        key="segment-chart"
      />
      <Spacer />
      <SegmentLeaderboardsChart data={data.segment_efforts} />
      <Spacer />
      <SegmentTable segments={data.segment_efforts} />
    </ScreenWrapper>
  );
}
