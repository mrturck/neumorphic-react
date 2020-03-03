import React from 'react';
import {
  withKnobs, text, boolean, number
} from '@storybook/addon-knobs';
import Switch from '.';
import Typography from '../Typography';
import { getColors } from '../../utils';

const styles = {
  title: {
    fontSize: 24,    
  },
  switch: {
    paddingTop: 18
  }
}
export default {
  title: 'Switch',
  decorators: [withKnobs, (story) => (
    <div style={{
      minHeight: '100vh',
      minWidth: '100vw',
      background: getColors().base,
      padding: 48
    }}
    >
        {story()}
    </div>
  )],
};

export const withDefault = () => (
  <div>
    <Typography style={styles.title}>Here ye, a switch</Typography>
    <Switch style={styles.switch}/>
  </div>
);
