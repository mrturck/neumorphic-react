import React from 'react';
import styled from 'styled-components';
import getLight from '../../utils/getLight';
import Paper from '../Paper';

const AppBar = (props) => {
  const light = getLight(props.lighting);

  const AppBarRoot = styled.div`
  display: flex;
  margin: 0px;
  background: #ff0;
  border-radius: 0;
  min-height: 56px;
  min-width: 100%;
  width: 100%;
  position: static;
  background: #ccd2ed;
  box-shadow:  5px 5px 7px #adb3c9, -5px -5px 7px #ebf2ff;
`

  return (
    <AppBarRoot>{props.children}</AppBarRoot>
  );
};


export default AppBar;
