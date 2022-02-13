import {
  Box,
  Flex,
  Grid,
  GridItem,
  Link,
  Text,
  useToken,
} from '@chakra-ui/react';
import { trophyColors } from '../../toolbox/trophyColors';
import { TrophyIcon } from '../shared/Icons';
import { useActivityData } from './hooks';
import {
  SetSegmentAction,
  SetSegmentPayload,
  useSegmentStore,
} from './store/segment.store';

const selectResult =
  (obj: SetSegmentPayload) =>
  (fn: (action: SetSegmentAction) => void) =>
  (e: any) => {
    e.preventDefault();
    fn({ type: 'setSegment', payload: obj });
  };

export function TopResults() {
  const { data } = useActivityData();
  const [gold, silver, bronze] = useToken('colors', [
    'trophy.gold',
    'trophy.silver',
    'trophy.bronze',
  ]);
  const dispatch = useSegmentStore((state) => state.dispatch);
  return (
    <Grid gridGap={1.5} py={4} gridTemplateColumns="repeat(12, 1fr)">
      <GridItem colSpan={2} textTransform="uppercase">
        TOP RESULTS
      </GridItem>
      <GridItem colSpan={10}>
        {data?.topResults.map((elem) => (
          <Flex key={elem.id} gap={2} alignItems="center" as={Text}>
            <Box
              color={trophyColors({
                prRank: elem.pr_rank as number,
                goldColor: gold,
                silverColor: silver,
                bronzeColor: bronze,
              })}
              as="span"
            >
              <TrophyIcon role="img" />
            </Box>
            <Box as="span" fontWeight="bold">
              {elem.pr_rank}
              {elem.pr_rank === 1
                ? 'st'
                : elem.pr_rank === 2
                ? 'nd'
                : 'rd'}{' '}
              fastest on
            </Box>
            <Link
              type="button"
              onClick={selectResult({
                id: elem.id,
                segmentId: elem.segment_id,
              })(dispatch)}
              color="blue.500"
            >
              {elem.name}
            </Link>
          </Flex>
        ))}
      </GridItem>
    </Grid>
  );
}
