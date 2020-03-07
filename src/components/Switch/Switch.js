import React, {useState} from 'react';
import styled from 'styled-components';
import getLight from '../../utils/getLight'
import Typography from '../Typography';
import theme from '../../utils/getTheme';
import getColors from '../../utils/getColors';

const colors = getColors();
const themeColors = getColors(theme.palette.primary.main);

const styles = {
  root: {
    margin: 4
  },
  label: {
    fontSize: 16,
    display: 'inline-block'
  }
}

const SwitchRoot = ({ className, checked, ...props }) => (
  <SwitchContainer className={className}>
    <HiddenSwitch checked={checked} {...props} />
    <StyledSwitch checked={checked} {...props} />
  </SwitchContainer>
);


const HiddenSwitch = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  display: inline-block;
  border: 0;
  opacity: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
  width: 1px;
  -webkit-transform: ${ props => props.checked ? 'translate(26px,0px)' : '' };
  -ms-transform: ${ props => props.checked ? 'translate(26px,0px)' : ''};
  transform: ${ props => props.checked && 'translate(26px,0px)'}

`

const StyledSwitch = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 24px;
  background: ${props => props.checked ? `linear-gradient(145deg, ${themeColors.lightShadow}, ${themeColors.darkShadow})` : colors.base};
  background-color: ${colors.base};
  box-shadow: ${props => !props.checked ? `inset 3px 3px 5px ${colors.darkShadow}, inset -3px -3px 5px ${colors.lightShadow}` 
      : `inset 3px 3px 5px ${themeColors.darkShadow}, inset -3px -3px 5px ${themeColors.lightShadow}`
  };
  -webkit-transition: .2s;
  -ms-transition: .2s;
  transition: .2s;

  &:focus {
    box-shadow: 0 0 1px ${themeColors.base};
  }

  &:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 6px;
    border-radius: 180px;
    border: 3px solid linear-gradient(135deg, ${ themeColors.lightShadow}, ${themeColors.darkShadow });
    box-shadow: ${props => !props.checked && `3px 3px 5px ${colors.darkShadow}, -3px -3px 5px ${colors.lightShadow}`};
    bottom: 4px;
    background-color:  ${colors.base};
    -webkit-transition: 0.2s;
    -ms-transition: 0.2s;
    transition: 0.2s ease;
    -webkit-transform: ${ props => props.checked ? 'translateX(24px)' : ''};
    -ms-transform: ${ props => props.checked ? 'translateX(24px)' : ''};
    transform: ${ props => props.checked && 'translateX(24px)'}
    &:hover {
        box-shadow: inset 1px 1px 1px ${colors.darkShadow}, inset -1px -1px 1px ${colors.lightShadow};
    }
  }
  
  &:hover {
    box-shadow: ${props => !props.checked ? `inset 1px 1px 3px ${colors.darkShadow}, inset -1px -1px 3px ${colors.lightShadow}` 
      : `inset 3px 3px 5px ${themeColors.darkShadow}, inset -3px -3px 5px ${themeColors.lightShadow}`
      };
  }
`

const SwitchContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  `




const Switch = (props) => {
  const light = getLight(props.lighting);
  const [checked, setChecked] = useState(false);

  const handleChecked = () => setChecked(!checked);

  return (
    <div style={styles.root} style={props.style}>
      <label >
        <SwitchRoot
          checked={checked}
          onChange={handleChecked}
          {...props}
          light={light}
        />
        <Typography {...props} style={styles.label}>{props.label}</Typography>
      </label>
    </div >  
  )}
;


export default Switch;
