import React from 'react';
import {
  withKnobs, text, boolean, number
} from '@storybook/addon-knobs';
import AppBar from '.';
import Paper from '../Paper'
import Typography from '../Typography';
import Button from '../Button';
import heart from '../Button/heart.png'

const styles={
  root: {
    margin: 24,
    // position: 'relative'
  },
  appGrid: {
    padding: 24,
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  gridItem: {
    flexGrow: 1,
  },
  button: {
    flexGrow: 1,
    float: 'right',
    height: 48,
    width: 128,
    fontSize: 18
  },
  paper: {
    background: '#ccd2ed',
    height: '100px',
  },
  heart: {
    margin: 'auto',
    height: 100
  }
}
export default {
  title: 'AppBar',
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
    <div>
    <AppBar>
      <div style={styles.appGrid}>
        <div style={styles.gridItem}>
        <Typography >Neumorphic-UI</Typography>
        </div>
        <div style={styles.gridItem}>
        <Button flat style={styles.button}>Sign In</Button>
        </div>
      </div>
    </AppBar>
    <div style={styles.root}>
      <Paper style={styles.paper}>
        <img style={styles.heart} src={heart}/>
      </Paper>
    </div>
  </div>

);
