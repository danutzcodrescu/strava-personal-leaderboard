import { startOfWeek, startOfYear } from 'date-fns';
import { getUserInfo } from '../../toolbox/setUserToken';
import { useGetUserDataQuery } from '../../types/graphql';

export function useDashboardData() {
  const { isLoading, data } = useGetUserDataQuery({
    id: parseInt(getUserInfo() as string),
    weekStart: startOfWeek(new Date(), { weekStartsOn: 1 }),
    yearStart: startOfYear(new Date()),
  });
  return { isLoading, data };
}
