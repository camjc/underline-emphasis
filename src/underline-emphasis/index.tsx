import * as React from 'react';
import { createLCGenerator } from './utils/create-lc-generator';
import { getArrayByFunction } from './utils/get-array-by-function';
import { getSeed } from './utils/get-seed';
import { normaliseArray } from './utils/normalise-array';
import { sortArrayNumerically } from './utils/sort-array-numerically';
import { isOdd } from './utils/is-odd';

const fixedStyle: React.CSSProperties = {
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% auto',
  display: 'inline',
  fontStyle: 'inherit',
  overflow: 'visible',
};

export const UnderlineEmphasis: React.FunctionComponent<{
  children?: string;
}> = ({ children }) => {
  if (typeof window === 'undefined' || !children || !children.length) {
    return null;
  }
  const width = 20 * children.length;
  const height = 16;
  const seed = getSeed(children);
  const lcGenerator = createLCGenerator({ seed: seed });
  const pointCountArray: number[] = getArrayByFunction({
    getArrayValue: lcGenerator,
    length: 3,
  });
  const normalisedPointCountArray = normaliseArray({
    array: pointCountArray,
    max: height,
    min: 0,
  });
  const pointCount = 3 + Math.floor(normalisedPointCountArray[0]);
  const xArray = getArrayByFunction({
    getArrayValue: lcGenerator,
    length: pointCount,
  });
  const yArray = getArrayByFunction({
    getArrayValue: lcGenerator,
    length: pointCount,
  });
  sortArrayNumerically(xArray);
  sortArrayNumerically(yArray).reverse();

  const strokeWidth = 4;

  const normalisedXArray = normaliseArray({
    array: xArray.map(
      (value, index) => 0.5 + (isOdd(index) ? -1 : 1) * width * (value * 0.5)
    ),
    max: width - strokeWidth,
    min: strokeWidth,
  });
  const normalisedYArray = normaliseArray({
    array: yArray.map(value => value * height),
    max: height - strokeWidth,
    min: strokeWidth,
  });
  const pointArray = normalisedXArray.map((_value, index) => [
    normalisedXArray[index],
    normalisedYArray[index],
  ]);
  const pointString = pointArray.map(tuple => tuple.join(',')).join(' ');

  const svgImage = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="${pointString}" stroke="#9855D4" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" />
  </svg>`;

  const encodedSvg = window.btoa(svgImage);
  return (
    <em
      style={{
        ...fixedStyle,
        backgroundImage: "url('data:image/svg+xml;base64," + encodedSvg + "')",
      }}
    >
      {children}
    </em>
  );
};
