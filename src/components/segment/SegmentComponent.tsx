import { useToken } from '@chakra-ui/react';
import * as React from 'react';
import { MapContainer, Marker, Polyline, TileLayer } from 'react-leaflet';
import { getLineData } from '../../toolbox/map';
import { TitleTypography } from '../../toolbox/typograpies';
import { Spacer } from '../activity/Activity.component';
import { ElevationChart } from '../activity/ElevationChart.component';
import { HoverMarker } from '../activity/HoverMarker';
import { convertPostgresCoordsToLatLng } from '../activity/utils';
import { ScreenWrapper } from '../shared/ScreenWrapper';
import { useSegmentData } from './hooks';
import { SegmentLeaderboardsChart } from './SegmentChart';
import { SegmentInfo } from './SegmentInfo';
import { SegmentTable } from './SegmentTable';

export function SegmentComponent() {
  const [main] = useToken('colors', ['primary.main']);
  const { data, isLoading } = useSegmentData();
  if (isLoading) {
    return <p>Loading</p>;
  }
  if (!data || !data.segment_efforts?.length) return <p>No data</p>;
  const { line, bounds } = getLineData(
    data.segment_efforts[0].segment.map?.map
  );
  return (
    <ScreenWrapper
      bgColor="white"
      border="1px solid"
      borderColor="gray.400"
      p="5"
    >
      <TitleTypography mb={4}>{data.segment_efforts[0].name}</TitleTypography>
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
        <Polyline color={main} positions={line} key="line" />
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
