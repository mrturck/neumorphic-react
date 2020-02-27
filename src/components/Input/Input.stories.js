import React from 'react';
import {
  withKnobs, text, boolean, number
} from '@storybook/addon-knobs';
import Input from '.';


export default {
  title: 'Input',
  decorators: [withKnobs, (story) => (
    <div style={{
      minHeight: '100vh',
      height: '100%',
      background: '#ccd2ed',
      padding: 24,

    }}
    >
        {story()}
    </div>
  )],
};

export const withDefault = () => (
    <Input placeholder="Default"/>
);
