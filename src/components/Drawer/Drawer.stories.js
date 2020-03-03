import React, {useState} from 'react';
import {
  withKnobs, text, boolean, number
} from '@storybook/addon-knobs';
import Drawer from '.';
import Typography from '../Typography';
import Button from '../Button';
import clear from './clear.png';
import getColors from '../../utils/getColors';

const styles={
  button: {
    float: 'right',
    height: 48,
    // width: '100%'
  },
  buttonWrapper: {
    width: '100%',
    height: 48,
  },
  click:{
    margin: 48,
    float: 'right',
    textAlign: 'center'
  },
  clickButton: {
    width: 300,
  },
  item: {
    display: 'block'
  },
  img: {
    fontSize: 28
  }
}
export default {
  title: 'Drawer',
  decorators: [withKnobs, (story) => (
    <div style={{
      minHeight: '100vh',
      minWidth: '100vw',
      background: getColors().base,
    }}
    >
        {story()}
    </div>
  )],
};

export const alignLeft = () => {
  const [open, setOpen] = useState(false)
  
  return(
    <div>
    <Drawer open={open}>
    <div style={styles.buttonWrapper}>
      <Button flat style={styles.button} onClick={()=>setOpen(false)}>
        <Typography style={styles.img}>X</Typography>
      </Button>
    </div>
    <Typography style={styles.item}>About</Typography>
    <Typography style={styles.item}>Services</Typography>
    <Typography style={styles.item}>Client</Typography>
    <Typography style={styles.item}>Contact</Typography>
      
    </Drawer>
    <div style={styles.click}>
    <Button style={styles.clickButton} onClick={()=>{console.log('click'); setOpen(!open)}}>
          <Typography >Click to open drawer</Typography>
    </Button>
    </div>
    </div>
)};

export const alignRight = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Drawer anchor="right" open={open}>
        <div style={styles.buttonWrapper}>
          <Button flat style={styles.button} onClick={() => setOpen(false)}>
            <Typography style={styles.img}>X</Typography>
          </Button>
        </div>
        <Typography style={styles.item}>About</Typography>
        <Typography style={styles.item}>Services</Typography>
        <Typography style={styles.item}>Client</Typography>
        <Typography style={styles.item}>Contact</Typography>

      </Drawer>
      <div style={styles.click}>
        <Button style={styles.clickButton} onClick={() => { console.log('click'); setOpen(!open) }}>
          <Typography >Click to open drawer</Typography>
        </Button>
      </div>
    </div>
  )
};

