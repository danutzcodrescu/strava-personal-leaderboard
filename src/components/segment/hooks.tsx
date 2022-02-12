import { useParams } from 'react-router-dom';
import { getUserInfo } from '../../toolbox/setUserToken';
import { useGetDetailedSegmentLeaderboardsQuery } from '../../types/graphql';

export function useSegmentData() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetDetailedSegmentLeaderboardsQuery({
    segmentId: id,
    userId: parseInt(getUserInfo() as string),
  });
  return { data, isLoading };
}
