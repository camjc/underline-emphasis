import invariant from 'tiny-invariant';

export const createLCGenerator = ({
  seed = 1,
  multiplier = 16807,
  increment = 0,
  modulus = 2147483647,
} = {}) => {
  invariant(multiplier > 0, '`multiplier` must be strictly larger than 0');
  invariant(
    multiplier < modulus,
    '`multiplier` must be smaller than `modulus`'
  );
  invariant(increment >= 0, '`increment` must not be negative');
  invariant(increment < modulus, '`increment` must be smaller than `modulus`');
  invariant(seed >= 0, '`seed` must not be negative');
  invariant(seed < modulus, '`seed` must be smaller than `modulus`');
  invariant(
    seed !== 0 || increment !== 0,
    '`seed` cannot be 0 if `increment` is 0'
  );
  var state = Math.abs(seed);
  return () => {
    var result = (state * multiplier + increment) % modulus;
    state = result;
    return result / modulus;
  };
};
