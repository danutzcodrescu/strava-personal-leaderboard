import * as React from 'react';
import { useLeafletContext } from '@react-leaflet/core';
import { LatLngBounds, Polyline, polyline } from 'leaflet';
import { useSegmentStore } from './store/segment.store';

interface Props {
  bounds: LatLngBounds;
}

export function FitBounds({ bounds }: Props) {
  const { map } = useLeafletContext();
  const segmentLine = useSegmentStore((state) => state.segmentLine);
  const lineRef = React.useRef<Polyline<any> | undefined>(undefined);

  React.useEffect(() => {
    if (segmentLine) {
      lineRef.current = polyline(segmentLine, {
        color: 'blue',
      }).addTo(map);
      map.fitBounds(lineRef.current.getBounds());
    }
    if (!segmentLine && lineRef.current) {
      map.removeLayer(lineRef.current!);
      map.fitBounds(bounds);
      lineRef.current = undefined;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [segmentLine]);
  return null;
}
