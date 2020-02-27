import React from 'react';
import styled from 'styled-components'
import { render } from 'react-dom';

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

background: linear-gradient(145deg, #dae1fe, #b8bdd5);
box-shadow:  5px 5px 7px #adb3c9, -5px -5px 7px #ebf2ff;

&:hover {
background: linear-gradient(145deg, #b8bdd5, #dae1fe);
box-shadow:  3px 3px 5px #adb3c9, -3px -3px 5px #ebf2ff;
 }

&:active {
background: #ccd2ed;
box-shadow: inset 3px 3px 5px #a7acc2, inset -3px -3px 5px #f1f8ff;
}
`

const FlatButtom = styled.button`
border: none;
border-radius: 95px;
padding: 12px 24px;
text-align: center;

background: ${props => props.color ? props.color : '#ccd2ed'};
box-shadow:  5px 5px 7px #adb3c9, -5px -5px 7px #ebf2ff;

&:hover {
box-shadow:  3px 3px 7px #adb3c9, -3px -3px 7px #ebf2ff;
 }

&:active {
background: #ccd2ed;
box-shadow: inset 3px 3px 5px #a7acc2, inset -3px -3px 5px #f1f8ff;
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
