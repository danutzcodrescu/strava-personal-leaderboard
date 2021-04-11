import create from 'zustand';
import { combine } from 'zustand/middleware';
import produce from 'immer';

interface ElevationChartState {
  elevationPoint: [number, number] | null;
}

type Action = {
  type: 'setPoint';
  payload: { location: [number, number] | null } | null;
};

const reducer = produce((draft: ElevationChartState, action: Action) => {
  switch (action.type) {
    case 'setPoint':
      draft.elevationPoint = action.payload?.location || null;
      break;
  }
  return undefined;
});

export const useElevationStore = create(
  combine(
    {
      elevationPoint: null,
      data: [],
    },
    (set) => ({
      // @ts-ignore
      dispatch: (action: Action) => set((state) => reducer(state, action)),
    })
  )
);
