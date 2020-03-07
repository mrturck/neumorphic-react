import React, {useState} from 'react';
import {
  withKnobs, text, boolean, number
} from '@storybook/addon-knobs';
import RadioButton from '.';
import Typography from '../Typography';
import {theme} from '../../utils'
const styles = {
  title: {
    fontSize: '28px',
  },
  form: {
    width: 150,
  }
}

export default {
  title: 'RadioButton',
  decorators: [withKnobs, (story) => (
    <div style={{
      minHeight: '100vh',
      minWidth: '100vw',
      background: theme.palette.background.main,
      padding: 24,
    }}
    >
        {story()}
    </div>
  )],
};

export const withDefault = () => {
  const [selected, setSelected] = useState(null);
  
  const handleClick = (e) => setSelected(e.target.value)
  return (
    <div>
    <Typography style={styles.title}>Check exactly one:</Typography>
    <form style={styles.form}>
      <RadioButton color="primary" onClick={handleClick} value={1} label="Primary" checked={selected == 1} />
      <RadioButton color="secondary" onClick={handleClick}  value={2} label="Secondary" checked={selected == 2} />
      <RadioButton onClick={handleClick}  value={3} label="Default" checked={selected == 3} />
    </form>
    </div>
)};
