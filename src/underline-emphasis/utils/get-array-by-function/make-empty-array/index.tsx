export const makeEmptyArray = (length: number) =>
  Array.apply(null, Array(length)).map(() => null);
