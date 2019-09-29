import React from "react";

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

/**
 * @param {number} length
 */
const getRandomArray = length => makeEmptyArray(length).map(Math.random);

/**
 * @param {number[]} array
 */
const sortArrayNumerically = array => array.sort((a, b) => a - b);

/**
 * @param {number[]} array
 */
const normaliseArray = array =>
  array.map(value =>
    normalizeBetweenTwoRanges(
      value,
      Math.min(...array),
      Math.max(...array),
      0,
      1
    )
  );

const UnderlineEmphasis = ({ children }) => {
  const maxWidth = 100;
  const pointCount = 4 + Math.floor(Math.random() * 7);

  const xArray = getRandomArray(pointCount);
  const yArray = getRandomArray(pointCount);

  sortArrayNumerically(xArray);
  sortArrayNumerically(yArray).reverse();

  const normalisedXArray = normaliseArray(xArray.map(value => value * 0.5));
  const normalisedYArray = normaliseArray(yArray);

  const pointArray = normalisedXArray.map((value, index) => [
    (0.5 + (isOdd(index) ? -1 : 1) * normalisedXArray[index]) * maxWidth,
    normalisedYArray[index] * 10
  ]);
  console.log("pointArray", pointArray);

  const pointString = pointArray.map(tuple => tuple.join(",")).join(" ");

  const svgImage = `<svg width="100" height="10" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <polyline points="${pointString}" stroke="#9855D4" stroke-width="2" stroke-linecap="round" />
  </svg>`;

  const encodedSvg = window.btoa(svgImage);

  const fixedStyle = {
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% auto",
    display: "inline",
    whiteSpace: "nowrap",
    overflow: "visible"
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
