import React from 'react';
import styled from 'styled-components';
import getLight from '../../utils/getLight';
import theme from '../../utils/getTheme';
import getColors from '../../utils/getColors';
/**
 * FIX ISSUE WITH INPUTS LOSING FOCUS
 * https://github.com/styled-components/styled-components/issues/540
 * 
*/

const Paper = (props) => {
  const colors = getColors(theme.palette.background.main);
  const light = getLight(props.lighting);

  const RaisedPaper = styled.div`
    border: none;
    width: 150px;
    border-radius: 8px;
    padding: 12px 24px;
    text-align: center;

    background: ${colors.base};
    box-shadow:  5px 5px 10px ${colors.darkShadow}, -5px -5px 10px ${colors.lightShadow};
  `;

  const InsetPaper = styled.div`
    border: none;
    width: 150px;
    border-radius: 8px;
    padding: 12px 24px;
    text-align: center;

    background: ${colors.base};
    box-shadow: inset 3px 3px 5px ${colors.darkShadow}, inset -3px -3px 5px ${colors.lightShadow};
  `;

  // const Background = styled.div`
  //   background:${props => `linear-gradient(${props.direction}deg, #ebf2ff,#adb3c9)`};
  //   filter:blur(10px);
  //   height: 200px;
  //   width: 200px;
  //   position: absolute;
  // `

  // const Content = styled.div`
  //   width: 100px;
  //   height: 100px;
  //   background:${props => `linear-gradient(${props.direction}deg, #dae1fe, #b8bdd5)`};
  //   border: ${props => `linear-gradient(${props.direction}deg, #ebf2ff,#adb3c9)`};
  //   position: relative;
  //   border-radius: 8px;
  // `

  const NeuPaper = (props) => (
    <div>
    <Background {...props}/>
      <Content {...props}>
        {props.children}
      </Content>
    </div>
  )

  return (
    <div>
    {/* <NeuPaper {...props}>{props.children} </NeuPaper> EXPERIMENTAL */}
    { props.inset ?
    <InsetPaper style={props.style}>{props.children}</InsetPaper>
    :
    <RaisedPaper style={props.style}>{props.children}</RaisedPaper>
    }
    </div>
  );
};


export default Paper;
