import React from 'react';
import {
  withKnobs, text, boolean, number
} from '@storybook/addon-knobs';
import Checkbox from '.';
import Typography from '../Typography';

const styles = {
  title : {
    fontSize: '32px',
  },
}

export default {
  title: 'Checkbox',
  decorators: [withKnobs, (story) => (
    <div style={{
      minHeight: '100vh',
      minWidth: '100vw',
      background: '#ccd2ed',
      padding: 48,
    }}
    >
        {story()}
    </div>
  )],
};

export const withDefault = () => (
  <div>
    <Typography style={styles.title}>Check one or more:</Typography>
    <Checkbox label={'First'}/>
    <Checkbox label={'Second'}/>
    <Checkbox label={'Third'}/>
  </div>
);
