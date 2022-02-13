import { useToken } from '@chakra-ui/react';
import { LatLng, LatLngBounds } from 'leaflet';
import * as React from 'react';
import { MapContainer, Marker, Polyline, TileLayer } from 'react-leaflet';
import { mapHeight } from '../../toolbox/map';
import { FitBounds } from './FitBounds';
import { HoverMarker } from './HoverMarker';
import { convertPostgresCoordsToLatLng } from './utils';

interface Props {
  line: LatLng[];
  bounds: LatLngBounds;
  startPoint: string;
  endPoint: string;
}

export function ActivityMap({ line, bounds, startPoint, endPoint }: Props) {
  const [mainColor] = useToken('colors', ['primary.main']);

  return (
    <MapContainer
      style={{ height: mapHeight }}
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
      <Polyline color={mainColor} positions={line} key="line" />
      <Marker
        key="start"
        position={convertPostgresCoordsToLatLng(startPoint)}
      ></Marker>
      <Marker
        position={convertPostgresCoordsToLatLng(endPoint)}
        key="end"
      ></Marker>
      <HoverMarker />
      <FitBounds bounds={bounds} />
    </MapContainer>
  );
}
