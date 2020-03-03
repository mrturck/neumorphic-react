import React from 'react';
import styled from 'styled-components';
import getLight from '../../utils/getLight'
import theme from '../../utils/getTheme';
import getColors from '../../utils/getColors';

const fontSize = {
  h1: '64px',
  h2: '48px',
  h3: '32px',
  h4: '28px',
  h5: '24px',
  h6: '18px',
  p: '12px'
};

const fontWeight = {
  h1: 900,
  h2: 800,
  h3: 700,
  h4: 600,
  h5: 500,
  h6: 500,
  p: 900,
}
/**
 * NOTES ON TEXTSHADOW EFFECTS
 * 
 * Move hover and active to Button type="text"
 */
const Typography = (props) => {
  const variant = props.variant || 'p';
  const Component = variant || 'p';
  const light = getLight(props.lighting);

  const StandardTypography = styled(Component)`
    font: bold ${fontSize[variant]} arial, sans-serif;
    fontWeight: ${fontWeight[variant]};
    color: ${theme.typography.main};
    margin: 0;
  `
  const InsetTypography =  styled(Component)`
  font: bold ${fontSize[variant]} arial, sans-serif;
  fontWeight: ${fontWeight[variant]};
  background-color: ${props => props.color? props.color : '#232323'};
  color: transparent;
  text-shadow: ${light.left}2px ${light.right}2px 3px rgba(255,255,255,0.5);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  margin: 0
  // &: hover {
  //     text-shadow: ${light.left}1px ${light.right}1px 3px rgba(255,255,255,0.5);
  // }
  // &:active {
  //   text-shadow: none;
  //   color: #a8a8a8;
  //   text-shadow: ${light.left}0px ${light.right}0px 2px rgba(255,255,255,0.5);
  // }
`;

// const RaisedTypography = styled(Component)`
//   font: bold 48px arial, sans-serif;
//   color: #dddddd;
//   text-shadow: ${light.left}2px ${light.right}2px 5px rgba(86, 86, 86, .8), ${light.left}2px ${light.right}2px 5px #fff;
// `

  return (
    <div>
    { props.inset ? 
        <InsetTypography {...props} style={props.style} >{props.children}</InsetTypography>
      :
    <StandardTypography {...props} style={props.style} >{props.children}</StandardTypography>
    }
    </div>
  );
};


export default Typography;
