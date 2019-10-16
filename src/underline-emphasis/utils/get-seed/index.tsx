export const getSeed = (children: string) =>
  children
    .split('')
    .reduce(
      (accumulator, _currentValue, index) =>
        accumulator + children.charCodeAt(index),
      0
    );
