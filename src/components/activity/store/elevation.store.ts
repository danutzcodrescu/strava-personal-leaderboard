import produce from 'immer';
import create from 'zustand';
import { redux, subscribeWithSelector } from 'zustand/middleware';

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
  subscribeWithSelector(
    redux(reducer, {
      elevationPoint: null,
    })
  )
);
