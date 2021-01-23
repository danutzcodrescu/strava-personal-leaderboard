import { Theme, useTheme } from '@material-ui/core';
import * as React from 'react';
import { MapContainer, Polyline, TileLayer } from 'react-leaflet';
import { getBounds, getSegmentLine } from '../../toolbox/map';
import { ElevationChart } from './ElevationChart.component';
import { HoverMarker } from './HoverMarker';

interface Props {
  startPoint: string;
  endPoint: string;
  activityLine: any;
  distance: number;
  segmentId: number;
}

export const SegmentDetails = React.memo(function ({
  startPoint,
  endPoint,
  activityLine,
  distance,
  segmentId,
}: Props) {
  const { palette } = useTheme<Theme>();
  const segmentLine = getSegmentLine({
    startPoint: startPoint,
    endPoint: endPoint,
    line: activityLine,
  });
  const bounds = getBounds(segmentLine);
  return (
    <>
      <ElevationChart
        distance={distance}
        line={segmentLine}
        chartHeight={220}
      ></ElevationChart>
      <MapContainer
        style={{ height: '170px' }}
        bounds={bounds}
        attributionControl={false}
        zoomControl={false}
        scrollWheelZoom={false}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`}
          maxZoom={18}
          accessToken={process.env.REACT_APP_MAPBOX}
          id="mapbox/light-v10"
        />
        <Polyline color={palette.primary.main} positions={activityLine} />
        <Polyline color="blue" positions={segmentLine} />
        <HoverMarker />
      </MapContainer>
    </>
  );
});
