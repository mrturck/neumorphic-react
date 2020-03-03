import React from 'react';
import styled from 'styled-components'
import { render } from 'react-dom';
import theme from '../../utils/getTheme';
import getColors from '../../utils/getColors';

const colors = getColors(theme.palette.background.main);

/**
 * FIX ISSUE WITH WEIRD BACKGROUND COLORS AT LEAST WITH PAPER COMPONENT
 * 
 */

/**
 * Button component
 * 
 * Use below link to figure out color conversions
 * https://www.hexcolortool.com/#7276a7
 * 
 * Study differences and how they vary with intensity
 * - hue seems to stay constant while saturation and value change
 * - style guidelines:
 *   - white background seems poor choice due to inability to create lighter shade for effect
 *   - use an off-white for base background
 * 
 */
const RoundedButton = styled.button`
border: none;
border-radius: 95px;
padding: 8px 12px;
text-align: center;

background: ${colors.base}; //linear-gradient(145deg, ${colors.lightBase}, ${colors.darkBase});
box-shadow:  5px 5px 7px ${colors.darkShadow}, -5px -5px 7px ${colors.lightShadow};

&:hover {
background: ${colors.base}; //linear-gradient(145deg, ${colors.darkBase}, ${colors.lightBase});
box-shadow:  3px 3px 5px ${colors.darkShadow}, -3px -3px 5px ${colors.lightShadow};
 }

&:active {
background: ${colors.base};
box-shadow: inset 3px 3px 5px ${colors.darkShadow}, inset -3px -3px 5px ${colors.lightShadow};
}
`

const FlatButtom = styled.button`
border: none;
border-radius: 95px;
padding: 12px 24px;
text-align: center;

background: ${props => props.color ? props.color : colors.base};
box-shadow:  5px 5px 7px ${colors.darkShadow}, -5px -5px 7px ${colors.lightShadow};

&:hover {
box-shadow:  3px 3px 7px  ${colors.darkShadow}, -3px -3px 7px ${colors.lightShadow};
 }

&:active {
background: ${colors.base};
box-shadow: inset 3px 3px 5px  ${colors.darkShadow}, inset -3px -3px 5px ${colors.lightShadow};
}
`;

const Button = (props) => (
  <div style={props.style}>
    { props.flat ? 
      <FlatButtom {...props} style={props.style}>{props.children}</FlatButtom>
  :
      <RoundedButton {...props} style={props.style}>{props.children}</RoundedButton>}
  </div>
)


export default Button;
