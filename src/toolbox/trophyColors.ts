export function trophyColors(pr_rank: number | null) {
  return pr_rank === 1 ? 'gold' : pr_rank === 2 ? 'silver' : '#cd7f32';
}
