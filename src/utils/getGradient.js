import {getColors} from '.';

const getGradient = (color) => {
  let colors = getColors(color);
  return `linear-gradient(145deg, ${colors.lightShadow}, ${colors.darkShadow})`;
}


export default getGradient;