import React from 'react';
import styled from 'styled-components'
import getLight from '../../utils/getLight';

/**
 * NOTES
 * - use theme default font
 * - use theme default font color
 */
/**
 * Inspiration from https://codepen.io/swapnet/pen/QWwPVwE
 */
const Input = (props, {placeholder = "default"}) => {
  const light = getLight(props.lighting);

  const InsetInput = styled.input`
    padding: 0px 24px;
    minWidth: 64px;
    height: 48px;
    fontSize: 18px;
    margin-right: $ruler/2;
    border: none;
    background: #ccd2ed;
    border-radius: 180px;
    box-shadow: inset 5px 5px 5px #a7acc2, inset -5px -5px 5px #dae1fe;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    appearance: none;
    -webkit-appearance: none;

    &:focus {
      box-shadow: inset 2px 2px 2px #a7acc2, inset -2px -2px 2px #dae1fe;
    }
  `


  return (
    <InsetInput {...props} style={props.style}>{props.children}</InsetInput>
  );
};


export default Input;
