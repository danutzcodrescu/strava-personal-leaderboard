interface Args {
  prRank: number | null;
  goldColor: string;
  silverColor: string;
  bronzeColor: string;
}
export function trophyColors({
  prRank,
  goldColor,
  silverColor,
  bronzeColor,
}: Args) {
  return prRank === 1 ? goldColor : prRank === 2 ? silverColor : bronzeColor;
}
