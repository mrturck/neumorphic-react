import React from 'react';
import {
  withKnobs, text, boolean, number
} from '@storybook/addon-knobs';
import MenuItem from '.';


export default {
  title: 'MenuItem',
  decorators: [withKnobs, (story) => (
    <div style={{
      minHeight: '100vh',
      minWidth: '100vw',
      background: '#ccd2ed',
    }}
    >
        {story()}
    </div>
  )],
};

export const withDefault = () => (
    <MenuItem/>
);
