import React, {useState} from 'react';
import {
  withKnobs, text, boolean, number
} from '@storybook/addon-knobs';
import Select from '.';
import Paper from '../Paper';
import MenuItem from '../MenuItem';
import Typography from '../Typography';
const styles = {
  divWrapper: {
    marginTop: 38
  }
}

export default {
  title: 'Select',
  decorators: [withKnobs, (story) => (
    <div style={{
      minHeight: '100vh',
      minWidth: '100vw',
      background: '#ccd2ed',
      padding: 48
    }}
    >
        {story()}
    </div>
  )],
};

export const withDefault = () => {
  const [value, setValue ] = useState("Select one");

  const handleClick = (e) => {console.log(e.target);setValue(e.target.innerHTML)}
  return (
    <div>
    <Select value={value}>
      <MenuItem>Select one</MenuItem>
      <MenuItem value="one" onClick={handleClick}>One</MenuItem>
      <MenuItem value={2} onClick={handleClick}>Two</MenuItem>
      <MenuItem value={3} onClick={handleClick}>Three</MenuItem>
      <MenuItem value={4} onClick={handleClick}>Four</MenuItem>
      <MenuItem value={5} onClick={handleClick}>Five</MenuItem>
    </Select>
    </div>
)};
