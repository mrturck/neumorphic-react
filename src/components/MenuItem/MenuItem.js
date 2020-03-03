import React from 'react';
import styled from 'styled-components';
import theme from '../../utils/getTheme';
import getColors from '../../utils/getColors';

const colors = getColors();

const MenuItem = styled.option`
  height: 14px;
  min-width: 100px;
  background: ${colors.base};
  padding: 12px;
  color: #565656;
  font: bold 14px arial, sans-serif;
  box-shadow: 5px 5px 7px ${colors.darkShadow};

  &:hover {
    background:${colors.darkBase};
  }
  &:first-child {
    border-radius: 12px 12px 0px 0px;
    border-bottom: 1px solid ${colors.darkBase};

    :hover {
          background: ${colors.darkBase};

    }
  }

  &:not(:first-child):not(:last-child) {
    border-bottom: 1px solid ${colors.darkBase};
  }

  &:last-child {
    border-radius: 0px 0px 12px 12px;

    :hover {
      background: ${colors.darkBase};
    }
  }
`


export default MenuItem;
