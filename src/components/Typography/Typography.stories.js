import React from 'react';
import {
  withKnobs, text, boolean, number
} from '@storybook/addon-knobs';
import Typography from '.';
import {getColors, theme} from '../../utils'

const styles = {
  text: {
    margin: 12
  }
}
export default {
  title: 'Typography',
  decorators: [withKnobs, (story) => (
    <div style={{
      minHeight: '100vh',
      height: '100%',
      background: getColors().base,
      padding: 24,
    }}
    >
        {story()}
    </div>
  )],
};

export const withDefault = () => (
  <div style={{display: 'flex'}}>
    <div style={{ flex: 1 }}>
      <Typography style={styles.text} inset lighting="topLeft" variant="h1">h1 Inset</Typography>
      <Typography style={styles.text} inset lighting="topLeft" variant="h2">h2 Inset</Typography>
      <Typography style={styles.text} inset lighting="topLeft" variant="h3">h3 Inset</Typography>
      <Typography style={styles.text} inset lighting="topLeft" variant="h4">h4 Inset</Typography>
      <Typography style={styles.text} inset lighting="topLeft" variant="h5">h5 Inset</Typography>
      <Typography style={styles.text} color='#aa3222' inset lighting="topLeft" variant="h6">h6 Inset Custom</Typography>
      <Typography style={styles.text} inset lighting="topLeft" variant="p">Inset</Typography>
      <Typography style={styles.text} inset lighting="topLeft" >Default Inset </Typography>

    </div>
    <div style={{ flex: 1 }}>
      <Typography style={styles.text} lighting="topLeft" variant="h1">h1 Flat</Typography>
      <Typography style={styles.text} lighting="topLeft" variant="h2">h2 Flat</Typography>
      <Typography style={styles.text} lighting="topLeft" variant="h3">h3 Flat</Typography>
      <Typography style={styles.text} lighting="topLeft" variant="h4">h4 Flat</Typography>
      <Typography style={styles.text} lighting="topLeft" variant="h5">h5 Flat</Typography>
      <Typography style={styles.text} lighting="topLeft" variant="h6">h6 Flat</Typography>
      <Typography style={styles.text} inset lighting="topLeft" variant="p">P Flat</Typography>
      <Typography style={styles.text} inset lighting="topLeft" >Default Flat </Typography>

    </div>
  </div>
);
