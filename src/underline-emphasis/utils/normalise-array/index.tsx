import { normalizeBetweenTwoRanges } from './normalize-between-two-ranges';

export const normaliseArray = ({
  array,
  max,
  min,
}: {
  array: number[];
  max: number;
  min: number;
}) =>
  array.map(value =>
    normalizeBetweenTwoRanges(
      value,
      Math.min(...array),
      Math.max(...array),
      min,
      max
    )
  );
