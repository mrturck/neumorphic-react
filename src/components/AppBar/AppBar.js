import React from 'react';
import styled from 'styled-components';
import getLight from '../../utils/getLight';
import Paper from '../Paper';
import theme from '../../utils/getTheme';
import getColors from '../../utils/getColors';

const AppBar = (props) => {
  const colors = getColors(theme.palette.background.main);
  const light = getLight(props.lighting);

  const AppBarRoot = styled.div`
  display: flex;
  margin: 0px;
  border-radius: 0;
  min-height: 56px;
  min-width: 100%;
  width: 100%;
  position: static;
  background: ${theme.palette.background.main};
  box-shadow:  5px 5px 7px ${colors.darkShadow}, -5px -5px 7px ${colors.lightShadow};
`

  return (
    <AppBarRoot>{props.children}</AppBarRoot>
  );
};


export default AppBar;
