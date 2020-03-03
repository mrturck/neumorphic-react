import theme from './getTheme';
const convert = require("color-convert");

const strip = (hex) => hex.replace('#','')

const hslToHex = (hsl) => `#${convert.hsl.hex(hsl)}`;

const bump = (hslArray, item, value) => {
  const hslArrayBounds = {
    0: [0,360],
    1: [0,100],
    2: [0,100],
  };

  let newArray = hslArray;
  let newItemValue = hslArray[item] + value;

  if (newItemValue > hslArrayBounds[item][1]) {
    newItemValue = hslArrayBounds[item][1]
  }
  else if (newItemValue < hslArrayBounds[item][0]) {
    newItemValue = hslArrayBounds[item][0]
  }

  newArray[item] = newItemValue;
  return newArray
  // return newArray.map(i => `#${convert.hsl.hex(i)}`);
}
const getColors = ( baseColor = theme.palette.background.main ) => {
  // convert to hsl
  const baseHsl = convert.hex.hsl(strip(baseColor));

  // perform operations
  const neumorphicColors = {
    base: hslToHex(baseHsl),
    lightShadow: hslToHex(bump(baseHsl, 2, 12)),
    darkShadow: hslToHex(bump(baseHsl, 2, -18)),
    lightBase: hslToHex(bump(baseHsl, 2, 5)),
    darkBase: hslToHex(bump(baseHsl, 2, -5)),
  }

  return neumorphicColors
}

export default getColors;
