import create from 'zustand';
import { combine } from 'zustand/middleware';
import produce from 'immer';

interface SelectedSegmentState {
  id: number | undefined;
  segmentId: string | undefined;
  startPoint: string | undefined;
  endPoint: string | undefined;
}

export interface SetSegmentPayload {
  id: number;
  segmentId: string;
  startPoint: string;
  endPoint: string;
}

export type SetSegmentAction = {
  type: 'setSegment';
  payload: SetSegmentPayload | null;
};

const reducer = produce(
  (draft: SelectedSegmentState, action: SetSegmentAction) => {
    switch (action.type) {
      case 'setSegment':
        draft.id = action.payload?.id || undefined;
        draft.segmentId = action.payload?.segmentId || undefined;
        draft.startPoint = action.payload?.startPoint || undefined;
        draft.endPoint = action.payload?.endPoint || undefined;
        break;
    }
    return undefined;
  }
);

export const useSegmentStore = create(
  combine(
    {
      id: undefined,
      segmentId: undefined,
      startPoint: undefined,
      endPoint: undefined,
    } as {
      id: number | undefined;
      segmentId: string | undefined;
      startPoint: string | undefined;
      endPoint: string | undefined;
    },
    (set) => ({
      dispatch: (action: SetSegmentAction) =>
        set((state) => reducer(state, action)),
    })
  )
);
