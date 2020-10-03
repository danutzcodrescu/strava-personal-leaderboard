import * as React from 'react';

const SelectedSegmentContext = React.createContext<any>(undefined);

interface SelectedSegmentState {
  id: number | undefined;
  segmentId: string | undefined;
}

interface Props {
  children: React.ReactNode;
}

export function SelectedSegmentProvider({ children }: Props) {
  const [state, setSegment] = React.useState({ id: undefined });
  const value = React.useMemo(() => [state, setSegment], [state]);
  return (
    <SelectedSegmentContext.Provider value={value}>
      {children}
    </SelectedSegmentContext.Provider>
  );
}

export function useSegmentData() {
  const [state, dispatch] = React.useContext(SelectedSegmentContext);
  const setValue = React.useCallback(
    (id: number, segmentId: number) => dispatch({ id, segmentId }),
    [dispatch]
  );
  return { state, setValue } as {
    state: SelectedSegmentState;
    setValue: ReturnType<typeof setValue>;
  };
}
