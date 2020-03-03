import React from 'react';
import styled from 'styled-components'
import getLight from '../../utils/getLight';
import theme from '../../utils/getTheme';
import getColors from '../../utils/getColors';

/**
 * NOTES
 * - use theme default font
 * - use theme default font color
 */
/**
 * Inspiration from https://codepen.io/swapnet/pen/QWwPVwE
 */
const Input = (props, {placeholder = "default"}) => {
  const colors = getColors(theme.palette.background.main);
  const light = getLight(props.lighting);

  const InsetInput = styled.input`
    padding: 0px 24px;
    minWidth: 64px;
    height: 48px;
    fontSize: 18px;
    margin-right: $ruler/2;
    border: none;
    background: ${colors.base};
    border-radius: 180px;
    box-shadow: inset 5px 5px 5px ${colors.darkShadow}, inset -5px -5px 5px ${colors.lightShadow};
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    appearance: none;
    -webkit-appearance: none;

    &:focus {
      box-shadow: inset 2px 2px 2px ${colors.darkShadow}, inset -2px -2px 2px ${colors.lightShadow};
    }
  `


  return (
    <InsetInput {...props} style={props.style}>{props.children}</InsetInput>
  );
};


export default Input;
