import React from 'react';
import styled from 'styled-components';


const MenuItem = styled.option`
  height: 16px;
  min-width: 200px;
  background: #ccd2ed;
  padding: 24px;
  color: #565656;
  font: bold 18px arial, sans-serif;
  box-shadow: 5px 5px 7px #adb3c9;

  &:hover {
    background:#adb3c9;
  }
  &:first-child {
    border-radius: 12px 12px 0px 0px;
    border-bottom: 1px solid #adb3c9;

    :hover {
          background: #adb3c9

    }
  }

  &:not(:first-child):not(:last-child) {
    border-bottom: 1px solid #adb3c9;
  }

  &:last-child {
    border-radius: 0px 0px 12px 12px;

    :hover {
      background: #adb3c9
    }
  }
`


export default MenuItem;
