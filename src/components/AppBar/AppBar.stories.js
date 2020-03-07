import React from 'react';
import {
  withKnobs, text, boolean, number
} from '@storybook/addon-knobs';
import AppBar from '.';
import Paper from '../Paper'
import Typography from '../Typography';
import Button from '../Button';
import heart from '../Button/heart.png'
import theme from '../../utils/getTheme';
const styles={
  root: {
    margin: 24,
    // position: 'relative'
  },
  appGrid: {
    padding: '12px 24px',
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
    height: '100px',
  },
  heart: {
    margin: 'auto',
    height: 100
  },
  title: {
    fontSize: 32,
    margin: 0
  }
}
export default {
  title: 'AppBar',
  decorators: [withKnobs, (story) => (
    <div style={{
      minHeight: '100vh',
      minWidth: '100vw',
      background: theme.palette.background.main,
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
        <Typography style={styles.title} variant="h1" inset >Neumorphic-UI</Typography>
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
