import React, {useState} from 'react';
import styled from 'styled-components';
import Typography from '../Typography';
import ArrowUp from './arrow_up';
import ArrowDown from './arrow_down';
import theme from '../../utils/getTheme';
import getColors from '../../utils/getColors';

const colors = getColors();
const styles={
  selectLabel: {
    height: '16px',
    verticalAlign: 'middle',
    display: 'inline',
    position: 'absolute',
  },
  arrow: {
    position: 'relative',
    float: 'right',
    fill: '#565656',
    backgroundColor: '#565656',
    backgroundClip: 'text',
    color: 'transparent',
    filter: 'drop-shadow(3px 3px 5px rgba(255,255,255,0.5)',
    display: 'inline'
  }
};

const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
  min-width: 150px;
  height: 24px;
`
const Hidden = styled.select`
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

const StyledSelect = styled.div`
  border-radius: 8px;
  position: absolute
  display: inline-block;
  background-color: ${colors.base};
  box-shadow:  ${props => !props.open ? `5px 5px 7px ${colors.darkShadow}, -5px -5px 7px ${colors.lightShadow}`
  : `inset 3px 3px 5px ${colors.darkBase}, inset -3px -3px 5px ${colors.lightBase}`};
  border:0;
  padding: 24px;
  color: #565656;
  font: bold 18px arial, sans-serif;
  height: 24px;
  padding: 12px;
  &:hover {
    box-shadow:  ${props => !props.open && `1px 1px 3px ${colors.darkShadow}, -1px -1px 3px ${colors.lightShadow}`};

  }
  `

const SelectRoot = (props) => (
  <SelectContainer {...props}>
    <Hidden/>
    <StyledSelect open={props.open}>{props.children}</StyledSelect>
  </SelectContainer>
)

const Select = (props) => {
  const [open, setOpen] = useState(true)

  const handleOpen = (e) => {
    setOpen(!open); 
  }
  
  return (
      <div>
      <SelectRoot open={open} onClick={handleOpen} style={props.style}>
        {props.value}
        {open ? <ArrowDown style={styles.arrow} /> : <ArrowUp style={styles.arrow}/> }
        <div style={{marginLeft: -8, marginTop: 28}}>
        { open && props.children}
        </div>
      </SelectRoot>
    </div>
  );
};


export default Select;
