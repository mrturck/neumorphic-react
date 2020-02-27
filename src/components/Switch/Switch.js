import React, {useState} from 'react';
import styled from 'styled-components';
import getLight from '../../utils/getLight'
import Typography from '../Typography';

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
  background: ${props => props.checked ? 'linear-gradient(145deg, #97a5e8, #4160e8)' : '#ccd2ed'};
  background-color: #ccd2ed;
  box-shadow: ${props => !props.checked ? 'inset 3px 3px 5px #a7acc2, inset -3px -3px 5px #f1f8ff' : '' };
  -webkit-transition: .4s;
  -ms-transition: .4s;
  transition: .4s;

  &:focus {
    box-shadow: 0 0 1px #2196F3;
  }

  &:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 6px;
    border-radius: 180px;
    box-shadow: ${props => !props.checked && 'inset 5px 5px 7px #adb3c9, inset -5px -5px 7px #ebf2ff'};
    bottom: 4px;
    background-color: #ccd2ed;
    -webkit-transition: 0.4s;
    -ms-transition: 0.4s;
    transition: 0.4s ease;
    -webkit-transform: ${ props => props.checked ? 'translateX(24px)' : ''};
    -ms-transform: ${ props => props.checked ? 'translateX(24px)' : ''};
    transform: ${ props => props.checked && 'translateX(24px)'}

  }
  
  &:hover {
    box-shadow: inset 1px 1px 3px #a7acc2, inset -1px -1px 3px #f1f8ff;
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
