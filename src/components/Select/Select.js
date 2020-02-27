import React, {useState} from 'react';
import styled from 'styled-components';
import Typography from '../Typography';
import ArrowUp from './arrow_up';
import ArrowDown from './arrow_down';

const styles={
  selectLabel: {
    fontSize: 18,
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
  min-width: 300px;
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
  background-color: #ccd2ed;
  box-shadow:  ${props => !props.open ? '5px 5px 7px #adb3c9, -5px -5px 7px #ebf2ff'
  : 'inset 3px 3px 5px #a7acc2, inset -3px -3px 5px #f1f8ff'};
  font: inherit;
  color:white;
  border:0;
  height: 24px;
  padding: 12px 8px;
  &:hover {
    box-shadow:  ${props => !props.open && '1px 1px 3px #adb3c9, -1px -1px 3px #ebf2ff'};

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
        <Typography style={styles.selectLabel}>{props.value}</Typography>
        {open ? <ArrowDown style={styles.arrow} /> : <ArrowUp style={styles.arrow}/> }
        <div style={{marginLeft: -8, marginTop: 48}}>
        { open && props.children}
        </div>
      </SelectRoot>
    </div>
  );
};


export default Select;
