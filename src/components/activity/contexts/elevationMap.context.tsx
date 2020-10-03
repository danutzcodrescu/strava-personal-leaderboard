import produce from 'immer';
import * as React from 'react';
import { Point } from '../Activity.component';

const ElevationChartContext = React.createContext<any>(undefined);

interface ElevationChartState {
  elevationPoint: [number, number] | null;
  data: Point[];
}

interface Props {
  children: React.ReactNode;
}

type Action =
  | { type: 'setData'; payload: Point[] }
  | { type: 'setPoint'; payload: [number, number] | null };

const reducer = produce((draft: ElevationChartState, action: Action) => {
  switch (action.type) {
    case 'setPoint':
      draft.elevationPoint = action.payload;
      break;
    case 'setData':
      draft.data = action.payload;
  }
  return undefined;
});

export function ElevationChartProvider({ children }: Props) {
  const [state, dispatch] = React.useReducer(reducer, {
    elevationPoint: null,
    data: [],
  });
  const value = React.useMemo(() => [state, dispatch], [state]);
  return (
    <ElevationChartContext.Provider value={value}>
      {children}
    </ElevationChartContext.Provider>
  );
}

export function useElevationData() {
  const [state, dispatch]: [
    ElevationChartState,
    React.Dispatch<any>
  ] = React.useContext(ElevationChartContext);
  const setValue = React.useCallback(
    (val: [number, number] | null) =>
      dispatch({ type: 'setPoint', payload: val }),
    [dispatch]
  );
  return {
    state,
    setValue,
  };
}
