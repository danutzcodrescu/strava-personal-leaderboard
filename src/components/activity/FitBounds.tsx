import { LatLngBounds } from 'leaflet';
import * as React from 'react';
import { useLeafletContext } from '@react-leaflet/core';
import { featureGroup, marker } from 'leaflet';
import { useSegmentStore } from './store/segment.store';
import shallow from 'zustand/shallow';
import { convertPostgresCoordsToLatLng } from './utils';

interface Props {
  bounds: LatLngBounds;
}

export function FitBounds({ bounds }: Props) {
  const { map } = useLeafletContext();
  const [start, end] = useSegmentStore(
    (state) => [state.startPoint, state.endPoint],
    shallow
  );

  React.useEffect(() => {
    if (start && end) {
      const group = featureGroup([
        marker(convertPostgresCoordsToLatLng(start)),
        marker(convertPostgresCoordsToLatLng(end)),
      ]);
      map.fitBounds(group.getBounds());
    }
    if (!start && !end) {
      map.fitBounds(bounds);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, end]);
  return null;
}
