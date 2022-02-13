import { useMatch } from 'react-location';
import { LocationGenerics } from '../../toolbox/location';
import { getUserInfo } from '../../toolbox/setUserToken';
import { useGetDetailedSegmentLeaderboardsQuery } from '../../types/graphql';

export function useSegmentData() {
  const {
    params: { segmentId: id },
  } = useMatch<LocationGenerics>();
  const { data, isLoading } = useGetDetailedSegmentLeaderboardsQuery({
    segmentId: id,
    userId: parseInt(getUserInfo() as string),
  });
  return { data, isLoading };
}
