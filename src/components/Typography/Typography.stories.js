import React from 'react';
import {
  withKnobs, text, boolean, number
} from '@storybook/addon-knobs';
import Typography from '.';


export default {
  title: 'Typography',
  decorators: [withKnobs, (story) => (
    <div style={{
      height: '100%',
      background: '#dddddd',
      padding: 24,
    }}
    >
        {story()}
    </div>
  )],
};

export const withDefault = () => (
  <div>
    <Typography lighting="topLeft" variant="h1">Top Left Inset</Typography>
    <Typography lighting="topLeft" raised>Raised</Typography>

    <Typography lighting="topRight" variant="h1">Top Right Inset</Typography>
    <Typography lighting="topRight" raised>Raised</Typography>

    <Typography lighting="bottomLeft" variant="h1">Bottom Left Inset</Typography>
    <Typography lighting="bottomLeft" raised>Raised</Typography>

    <Typography lighting="bottomRight" variant="h1">Bottom Right Inset</Typography>
    <Typography lighting="bottomRight" raised>Raised</Typography>
  </div>
);
