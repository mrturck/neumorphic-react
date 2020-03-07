import React from 'react';
import {
  withKnobs, text, boolean, number
} from '@storybook/addon-knobs';
import Checkbox from '.';
import Typography from '../Typography';
import getColors from '../../utils/getColors';

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
      background: getColors().base,
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
    <Checkbox color='primary' label={'Primary'}/>
    <Checkbox color='secondary' label={'Secondary'}/>
    <Checkbox label={'Default'}/>
  </div>
);
