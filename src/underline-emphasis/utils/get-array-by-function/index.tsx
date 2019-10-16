import { makeEmptyArray } from './make-empty-array';

export const getArrayByFunction = ({
  getArrayValue,
  length,
}: {
  getArrayValue: () => number;
  length: number;
}) => makeEmptyArray(length).map(getArrayValue);
