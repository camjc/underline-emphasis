import React from "react";

/**
 * @param {string} children
 */
const getSeed = children =>
  children.split("").reduce((accumulator, _currentValue, index) => accumulator + children.charCodeAt(index), 0);

const createLCGenerator = ({
  seed = 1,
  multiplier = 16807,
  increment = 0,
  modulus = 2147483647
} = {}) => {
  if (multiplier <= 0) {
    throw Error("`multiplier` must be strictly larger than 0");
  }
  if (multiplier >= modulus) {
    throw Error("`multiplier` must be smaller than `modulus`");
  }
  if (increment < 0) {
    throw Error("`increment` must not be negative");
  }
  if (increment >= modulus) {
    throw Error("`increment` must be smaller than `modulus`");
  }
  if (seed < 0) {
    throw Error("`seed` must not be negative");
  }
  if (seed >= modulus) {
    throw Error("`seed` must be smaller than `modulus`");
  }
  if (seed === 0 && increment === 0) {
    throw Error("`seed` cannot be 0 if `increment` is 0");
  }

  var state = Math.abs(seed);
  return () => {
    var result = (state * multiplier + increment) % modulus;
    state = result;
    return result / modulus;
  };
};

/**
 * @param {number} length
 */
const makeEmptyArray = length =>
  Array.apply(null, Array(length)).map(() => null);

/**
 * @param {number} number
 */
const isOdd = number => number % 2;

/**
 * @param {number} val
 * @param {number} minVal
 * @param {number} maxVal
 * @param {number} newMin
 * @param {number} newMax
 */
const normalizeBetweenTwoRanges = (val, minVal, maxVal, newMin, newMax) =>
  newMin + ((val - minVal) * (newMax - newMin)) / (maxVal - minVal);

const getArrayByFunction = ({ getArrayValue, length }) =>
  makeEmptyArray(length).map(getArrayValue);

/**
 * @param {number[]} array
 */
const sortArrayNumerically = array => array.sort((a, b) => a - b);

const normaliseArray = ({ array = [], max = 1, min = 0 } = {}) =>
  array.map(value =>
    normalizeBetweenTwoRanges(
      value,
      Math.min(...array),
      Math.max(...array),
      min,
      max
    )
  );

const UnderlineEmphasis = ({ children }) => {
  const width = 20 * children.length;
  const height = 10;
  const seed = getSeed(children);
  const lcGenerator = createLCGenerator({ seed: seed });

  const pointCountArray = getArrayByFunction({
    getArrayValue: lcGenerator,
    length: 3
  });

  const normalisedPointCountArray = normaliseArray({
    array: pointCountArray,
    max: 10
  });

  const pointCount = 5 + Math.floor(normalisedPointCountArray[0]);

  const xArray = getArrayByFunction({
    getArrayValue: lcGenerator,
    length: pointCount
  });
  const yArray = getArrayByFunction({
    getArrayValue: lcGenerator,
    length: pointCount
  });

  sortArrayNumerically(xArray);
  sortArrayNumerically(yArray).reverse();

  const normalisedXArray = normaliseArray({
    array: xArray.map(
      (value, index) => 0.5 + (isOdd(index) ? -1 : 1) * width * (value * 0.5)
    ),
    max: width
  });
  const normalisedYArray = normaliseArray({
    array: yArray.map(value => value * 10),
    max: height
  });

  const pointArray = normalisedXArray.map((_value, index) => [
    normalisedXArray[index],
    normalisedYArray[index]
  ]);

  const pointString = pointArray.map(tuple => tuple.join(",")).join(" ");

  const svgImage = `<svg width="${width}" height="10" viewBox="0 0 ${width} 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <polyline points="${pointString}" stroke="#9855D4" stroke-width="2" stroke-linecap="round" />
  </svg>`;

  const encodedSvg = window.btoa(svgImage);

  const fixedStyle = {
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto",
    display: "inline",
    fontStyle: "inherit",
    overflow: "visible",
    whiteSpace: "nowrap",
  };

  return (
    <em
      style={{
        ...fixedStyle,
        backgroundImage: "url('data:image/svg+xml;base64," + encodedSvg + "')"
      }}
    >
      {children}
    </em>
  );
};
export default UnderlineEmphasis;
