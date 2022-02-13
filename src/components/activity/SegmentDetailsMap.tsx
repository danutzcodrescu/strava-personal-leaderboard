import { useToken } from '@chakra-ui/react';
import { LatLng, LatLngBounds } from 'leaflet';
import * as React from 'react';
import { MapContainer, Polyline, TileLayer } from 'react-leaflet';
import { HoverMarker } from './HoverMarker';

interface Props {}

interface Props {
  bounds: LatLngBounds;
  activityLine: LatLng[];
  segmentLine: [number, number][];
}

export function SegmentDetailsMap({
  bounds,
  activityLine,
  segmentLine,
}: Props) {
  const [primary, blue] = useToken('colors', ['primary.main', 'blue.600']);
  return (
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
      <Polyline color={primary} positions={activityLine} />
      <Polyline color={blue} positions={segmentLine} />
      <HoverMarker />
    </MapContainer>
  );
}
