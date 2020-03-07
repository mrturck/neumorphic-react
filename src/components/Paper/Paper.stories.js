import React, {useState} from 'react';
import {
  withKnobs, text, boolean, number
} from '@storybook/addon-knobs';
import Paper from '.';
import Typography from '../Typography'
import Button from '../Button';
import Input from '../Input';
import heart from '../Button/heart.png';
import theme from '../../utils/getTheme';

// experimental
// const options = {
//   range: true,
//   min: 0,
//   max: 360,
//   step: 1,
// };

const styles = {
  paper: {
    padding: 24,
    width: 1000,
    display: 'flex',
    flexDirection: 'column',
  },
  paper2: {
    marginTop: 24,
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 300,
    width: 1000
  },
  input: {
    width: '60%'
  },
  text: {
    float: 'left',
    flex: 1,
    fontSize: '18px',
    display: 'block',
    margin: 24,
  },
  block: {
    flexGrow: 1,
    height: 48,
    width: 48,
    background: '#00f',
    display: 'block',
    margin: 24,
  },
  button: {
    float: 'left',
    padding: '0px 24px',
  },
  submit: {
  },
  typ: {
    fontSize: 18,
  }
}


export default {
  title: 'Paper',
  decorators: [withKnobs, (story) => (
    <div style={{
      minHeight: '100vh',
      height: '100%',
      background: theme.palette.background.main,
      padding: 24,
    }}
    >
        {story()}
    </div>
  )],
};

export const withDefault = () => {
  const [user, setUser] = useState('mikey');
  const [pass, setPass] = useState('wecbqwfdsakjfhas');

  const handleUser = (e) => {setUser(e.target.value)}
  const handlePass = (e) => setPass(e.target.value)

  return (
  <div>
    <Paper inset style={styles.paper}>
      <Typography style={styles.text}>Paper Component</Typography>
    <Button style={styles.button}>      
      <img src={heart} />
    </Button>
    </Paper>
    <Paper 
      // direction={number("Direction", 0, options)} experimental
      style={styles.paper2}>
      <Typography >Form</Typography>
      <Input
        key="2"
        type="text" 
        style={styles.input} 
        onChange={handleUser} 
        placeholder="Username"
        value={user}/>
      <Input 
        key="1"
        style={styles.input} 
        onChange={handlePass} 
        type="password" 
        placeholder="Password"
        value={pass} />
      { user && pass &&
      <Button disabled style={styles.submit} flat>
          <Typography style={styles.typ}>Log in</Typography>
      </Button>
      }
    </Paper>
  </div>
)};

