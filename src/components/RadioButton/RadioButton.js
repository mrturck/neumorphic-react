import React from 'react';
import styled from 'styled-components';
import getLight from '../../utils/getLight'
import Typography from '../Typography';
import { getColors, theme } from '../../utils';

const themeColors = (palette = 'primary') => getColors(theme.palette[palette].main)
const colors = getColors();

const styles = {
  root: {
    display: 'flex',
    width: 'auto'
  },
  label: {
    display: 'inline',
    fontSize: 16,

  }
}

const RadioButtonRoot = ({ className, checked, ...props }) => (
  <RadioButtonContainer className={className}>
    <HiddenRadioButton checked={checked} {...props} />
    <StyledRadioButton checked={checked} {...props} />
  </RadioButtonContainer>
)

const HiddenRadioButton = styled.input.attrs({ type: 'radio' })`
  display: inline-block;
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  `
const StyledRadioButton = styled.div`
  margin-right: 8px;
  margin-top: 3px;
  display: inline-block;
  border-radius: 180px;
  transition: all 150ms;
  border: ${ props => `1px solid linear-gradient(135deg, ${ themeColors(props.color).lightShadow }, ${ themeColors(props.color).darkShadow })`};
  width: ${props => props.size ? `${props.size}px` : '16px'};
  height: ${props => props.size ? `${props.size}px` : '16px'};

  background: ${props => props.checked ? `linear-gradient(135deg, ${themeColors(props.color).lightShadow} , ${themeColors(props.color).darkShadow})`
    : `linear-gradient(135deg, ${colors.darkBbase}, ${colors.lightBase})`
  };
  box-shadow: ${ props =>
    `${props.light.left}2px ${props.light.right}2px 3px ${colors.darkShadow},
     ${props.light.aLeft}2px ${props.light.aRight}2px 3px ${colors.lightShadow}
    `};

   ${HiddenRadioButton}:focus + & {
    box-shadow: 0 0 0 3px pink;
    background: #fff;

  }

  &:hover {
      box-shadow: ${ props =>
    `${props.light.left}1px ${props.light.right}1px 3px ${colors.darkShadow},
      ${props.light.aLeft}1px ${props.light.aRight}1px 3px ${colors.lightShadow}
      `};
  }

  &:active {
    box-shadow: inset 1px 1px 3px ${colors.darkBase}, inset -1px -1px 3px ${colors.lightBase};

  }
`
const RadioButtonContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`


const RadioButton = (props) => {
  const light = getLight(props.lighting);

  return (
    <div>
      <label style={styles.root}>
        <RadioButtonRoot
          checked={props.selected}
          onClick={props.handleChecked}
          {...props}
          light={light}
        />
        <Typography  {...props} style={styles.label}>{props.label}</Typography>
      </label>
    </div >
  )
}


export default RadioButton;
