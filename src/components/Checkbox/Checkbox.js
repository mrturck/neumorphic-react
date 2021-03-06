import React, {useState} from 'react';
import styled from 'styled-components';
import getLight from '../../utils/getLight'
import Typography from '../Typography';
import getColors from '../../utils/getColors';
import theme from '../../utils/getTheme';

const themeColors = (palette='primary') => getColors(theme.palette[palette].main);
const colors = getColors(); // background colors
/**
* Tutorial: https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd
*/

const styles= {
  root: {
    display: 'flex',
    width: 10,
  },
  label: {
    fontSize: 16,
    display: 'inline'
  }
}

const CheckboxRoot = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked} {...props}/>
  </CheckboxContainer>
)
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
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
const StyledCheckbox = styled.div`
  margin-right: 8px;
  display: inline-block;
  border-radius: 3px;
  transition: all 150ms;
  width: ${props => props.size ? `${props.size}px` : '16px'};
  height: ${props => props.size ? `${props.size}px` : '16px'};

  background: ${props => props.checked ? `linear-gradient(315deg, ${themeColors(props.color).darkShadow}, ${themeColors(props.color).lightShadow})`: colors.base};
  box-shadow: ${ props => 
    `${props.light.left}3px ${props.light.right}3px 5px ${colors.darkShadow},
     ${props.light.aLeft}3px ${props.light.aRight}3px 5px ${colors.lightShadow}
    `};

   ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
    background: #fff;

  }

  &:hover {
      box-shadow: ${ props => 
      `${props.light.left}1px ${props.light.right}1px 3px ${colors.darkShadow},
      ${props.light.aLeft}1px ${props.light.aRight}1px 3px ${colors.lightShadow}`};
  }

  &:active {
    box-shadow: inset 1px 1px 3px #a7acc2, inset -1px -1px 3px #f1f8ff;

  }
`
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Checkbox = (props) => {
  const light = getLight(props.lighting);
  const [checked, setChecked] = useState(false);

  const handleChecked = () => setChecked(!checked);
  
  return (
      <label style={styles.root}>
        <CheckboxRoot
          checked={checked}
          onChange={handleChecked}
          {...props}
          light={light}
        />
        <Typography {...props} style={styles.label}>{props.label}</Typography>
      </label>
)}


export default Checkbox;
