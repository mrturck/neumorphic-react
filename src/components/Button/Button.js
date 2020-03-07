import React from 'react';
import styled from 'styled-components'
import { render } from 'react-dom';
import { getColors, getGradient, theme} from '../../utils';

const colors = getColors(theme.palette.background.main);

const buttonColors = {
    default: colors.base,
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main
}
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
padding: 12px 24px;
text-align: center
color: ${props => props.color ? 'white' : theme.typography.main};

background: ${props => props.color ? getGradient(buttonColors[props.color]) : colors.base};
box-shadow:  5px 5px 7px ${colors.darkShadow}, -5px -5px 7px ${colors.lightShadow};

&:hover {
background: ${props => props.color ? getColors(buttonColors[props.color]).lightBase : colors.base};
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
color: ${props => props.color ? 'white' : theme.typography.main};

background: ${props => props.color ? buttonColors[props.color] : colors.base};
box-shadow:  5px 5px 7px ${colors.darkShadow}, -5px -5px 7px ${colors.lightShadow};

&:hover {
  background: ${props => props.color ? getColors(buttonColors[props.color]).lightShadow : colors.lightBase};
  box-shadow:  3px 3px 7px  ${colors.darkShadow}, -3px -3px 7px ${colors.lightShadow};
 }

&:active {
background: ${colors.base};
color:  ${theme.typography.main};
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
