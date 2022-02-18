import * as React from 'react';
import { useLeafletContext } from '@react-leaflet/core';
import { useElevationStore } from './store/elevation.store';
import { marker, Marker } from 'leaflet';

interface Props {
  mainMap: boolean;
}

export function HoverMarker({ mainMap }: Props) {
  const { map } = useLeafletContext();
  const markerRef = React.useRef<Marker | null>(null);
  React.useEffect(() => {
    useElevationStore.subscribe(
      (state) => state.elevationPoint,
      (point: [number, number] | null) => {
        if (!point) {
          map.removeLayer(markerRef.current!);
          markerRef.current = null;
          return;
        }
        if (!markerRef.current) {
          markerRef.current = marker(point).addTo(map);
        } else {
          markerRef.current = markerRef.current.setLatLng(point);
        }
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

HoverMarker.defaultProps = {
  mainMap: false,
};
