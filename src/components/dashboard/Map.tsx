import { useToken } from '@chakra-ui/react';
import * as React from 'react';
import { MapContainer, Polyline, TileLayer } from 'react-leaflet';
import { getLineData } from '../../toolbox/map';

interface Props {
  map: string;
}

export function Map({ map }: Props) {
  const [main] = useToken('colors', ['primary.main']);
  const { line, bounds } = getLineData(map);
  return (
    <MapContainer
      className="map"
      bounds={bounds}
      zoomControl={false}
      attributionControl={false}
      scrollWheelZoom={false}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`}
        maxZoom={18}
        accessToken={process.env.REACT_APP_MAPBOX}
        id="mapbox/light-v10"
      />
      <Polyline color={main} positions={line} />
    </MapContainer>
  );
}
