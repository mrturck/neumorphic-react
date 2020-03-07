import React from 'react';
import {
  withKnobs, text, boolean, number
} from '@storybook/addon-knobs';
import Button from '.';
import heart from './heart.png'
import like from './like.png'
import Typography from '../Typography';
import getColors from '../../utils/getColors';

export default {
  title: 'Button',
  decorators: [withKnobs, (story) => (
    <div style={{
      height: '100vh',
      width: '100vw',
      background: getColors().base,
      padding: 50,
    }}
    >
        {story()}
    </div>
  )],
};

export const withDefault = () =>  (
  <div>
    <Button style={{ margin: 24, display: 'block' }} >
      <Typography variant="h6" inset style={{fontSize: 18}}>Inset Rounded</Typography>
    </Button>
      <Button style={{ margin: 24, display: 'inline' }}>
        <img src={heart} />
      </Button>
      <Button style={{ margin: 24,display: 'inline' }}>
        <img style={{height: 60, width: 60}} src={like} />
      </Button>
    <Button color="primary" style={{ margin: 24, display: 'block' }} flat>
      Default Primary
    </Button>
    <Button color="secondary" style={{ margin: 24, display: 'block' }} >
      Default Secondary
    </Button>
    <Button style={{ margin: 24, display: 'block' }} flat>
      Default Flat
    </Button>

  </div>
)
