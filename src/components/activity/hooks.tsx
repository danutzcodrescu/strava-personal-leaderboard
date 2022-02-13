import { useMatch } from 'react-location';
import { LocationGenerics } from '../../toolbox/location';
import { useGetActivityQuery } from '../../types/graphql';

export function useActivityData() {
  const {
    params: { activityId: id },
  } = useMatch<LocationGenerics>();
  const { data, isLoading } = useGetActivityQuery({ id });
  return { data, isLoading };
}
