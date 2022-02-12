import { useParams } from 'react-router-dom';
import { useGetActivityQuery } from '../../types/graphql';

export function useActivityData() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetActivityQuery({ id });
  return { data, isLoading };
}
