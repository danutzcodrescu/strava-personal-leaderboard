import {
  Box,
  Flex,
  Grid,
  GridItem,
  Link,
  useToken,
  Text,
} from '@chakra-ui/react';
import { getTopResults_segment_efforts } from '../../types/getTopResults';
import {
  SetSegmentPayload,
  useSegmentStore,
  SetSegmentAction,
} from './store/segment.store';
import { TrophyIcon } from '../shared/Icons';
import { trophyColors } from '../../toolbox/trophyColors';

const selectResult =
  (obj: SetSegmentPayload) =>
  (fn: (action: SetSegmentAction) => void) =>
  (e: any) => {
    e.preventDefault();
    fn({ type: 'setSegment', payload: obj });
  };

interface Props {
  results: getTopResults_segment_efforts[];
}

export function TopResults({ results }: Props) {
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
        {results.map((elem) => (
          <Flex key={elem.id} gap={2} alignItems="center" as={Text}>
            <Box
              color={trophyColors({
                prRank: elem.pr_rank,
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
