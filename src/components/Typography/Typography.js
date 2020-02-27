import React from 'react';
import styled from 'styled-components';
import getLight from '../../utils/getLight'

/**
 * NOTES ON TEXTSHADOW EFFECTS
 * 
 * Move hover and active to Button type="text"
 */
const Typography = (props) => {
  const { variant } = props;
  const Component = variant || 'span';
  const light = getLight(props.lighting);

  const InsetTypography =  styled(Component)`
  font: bold 48px arial, sans-serif;
  background-color: #565656;
  color: transparent;
  text-shadow: ${light.left}2px ${light.right}2px 3px rgba(255,255,255,0.5);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  &: hover {
      text-shadow: ${light.left}1px ${light.right}1px 3px rgba(255,255,255,0.5);
  }
  &:active {
    text-shadow: none;
    color: #a8a8a8;
    text-shadow: ${light.left}0px ${light.right}0px 2px rgba(255,255,255,0.5);
  }
`;

const RaisedTypography = styled(Component)`
  font: bold 48px arial, sans-serif;
  color: #dddddd;
  text-shadow: ${light.left}2px ${light.right}2px 5px rgba(86, 86, 86, .8), ${light.left}2px ${light.right}2px 5px #fff;
`

  return (
    <div>
    { props.raised ? 
    <RaisedTypography style={props.style} >{props.children}></RaisedTypography>
      :
    <InsetTypography style={props.style} >{props.children}</InsetTypography>
    }
    </div>
  );
};


export default Typography;
