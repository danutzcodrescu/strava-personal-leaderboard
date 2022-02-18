import produce from 'immer';
import create from 'zustand';
import { redux } from 'zustand/middleware';

interface SelectedSegmentState {
  id: number | undefined;
  segmentId: string | undefined;
  segmentLine: [number, number][] | undefined;
}

export interface SetSegmentPayload {
  id: number;
  segmentId: string;
}

export type SetSegmentAction =
  | {
      type: 'setSegment';
      payload: SetSegmentPayload | null;
    }
  | { type: 'setSegmentLine'; payload: [number, number][] };

const reducer = produce(
  (draft: SelectedSegmentState, action: SetSegmentAction) => {
    switch (action.type) {
      case 'setSegment':
        draft.id = action.payload?.id || undefined;
        draft.segmentId = action.payload?.segmentId || undefined;
        if (!draft.id) {
          draft.segmentLine = undefined;
        }
        break;
      case 'setSegmentLine':
        draft.segmentLine = action.payload;
        break;
    }
    return undefined;
  }
);

export const useSegmentStore = create(
  redux(reducer, {
    id: undefined,
    segmentId: undefined,
    segmentLine: undefined,
  })
);
