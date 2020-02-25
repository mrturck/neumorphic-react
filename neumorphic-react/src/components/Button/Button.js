import React from 'react';
import styled from 'styled-components'
import { render } from 'react-dom';

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
const RoundButton = styled.button`
border: none;
border-radius: 95px;
padding: 12px;
text-align: center;

background: linear-gradient(145deg, #dae1fe, #b8bdd5);
box-shadow:  7px 7px 14px #adb3c9, -7px -7px 14px #ebf2ff;

&:hover {
background: linear-gradient(145deg, #b8bdd5, #dae1fe);
box-shadow:  7px 7px 14px #adb3c9, -7px -7px 14px #ebf2ff;
 }

&:active {
background: #ccd2ed;
box-shadow: inset 7px 7px 14px #a7acc2, inset -7px -7px 14px #f1f8ff;
}
`
const Button = (props) => (
  <div style={props.style}>
    { props.flat ? 
      <button>{props.children}</button>
  :
  <RoundButton>{props.children}</RoundButton>}
  </div>
)


export default Button;
