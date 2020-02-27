import React from 'react';
import styled from 'styled-components';
import getLight from '../../utils/getLight';

/**
 * FIX ISSUE WITH INPUTS LOSING FOCUS
 * https://github.com/styled-components/styled-components/issues/540
 * 
*/

const Paper = (props) => {
  const light = getLight(props.lighting);

  const RaisedPaper = styled.div`
    border: none;
    width: 150px;
    border-radius: 8px;
    padding: 12px 24px;
    text-align: center;

    background: #ccd2ed;
    box-shadow:  5px 5px 7px #adb3c9, -5px -5px 7px #ebf2ff;
  `;

  const InsetPaper = styled.div`
    border: none;
    width: 150px;
    border-radius: 8px;
    padding: 12px 24px;
    text-align: center;

    background: #ccd2ed;
    box-shadow: inset 3px 3px 5px #a7acc2, inset -3px -3px 5px #f1f8ff;
  `;

  return (
    <div>
    { props.inset ?
    <InsetPaper style={props.style}>{props.children}</InsetPaper>
    :
    <RaisedPaper style={props.style}>{props.children}</RaisedPaper>
    }
    </div>
  );
};


export default Paper;
