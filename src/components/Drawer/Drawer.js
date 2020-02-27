import React from 'react';
import styled from 'styled-components';
import Paper from '../Paper';

const DrawerRoot = styled.div`
  height: 100vh;
  padding: 12px;
  width: 25%;
  left: ${props => props.anchor == "right" ? false : 0};
  right: ${props => props.anchor == "right" ? 0 : false};
  background: #ccd2ed;
  box-shadow:  5px 5px 7px #adb3c9, -5px -5px 7px #ebf2ff;
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top *
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s;

`
const Drawer = (props, {anchor="left"}) => {
  return (
    <div>
    { props.open == true ?
    <DrawerRoot anchor={anchor} {...props}/>
    : false
    }
    </div>
  );
};


export default Drawer;
