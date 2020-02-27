import React, {useState} from 'react';
import {
  withKnobs, text, boolean, number
} from '@storybook/addon-knobs';
import Paper from '.';
import Typography from '../Typography'
import Button from '../Button';
import Input from '../Input';
import heart from '../Button/heart.png';

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
    color: '#fff'
  },
  typ: {
    fontSize: 18,
    color: '#fff'
  }
}
export default {
  title: 'Paper',
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

export const withDefault = () => {
  const [user, setUser] = useState('mikey');
  const [pass, setPass] = useState('wecbqwfdsakjfhas');

  const handleUser = (e) => {e.preventDefault(); setUser(e.target.value)}
  const handlePass = (e) => setPass(e.target.value)

  return (
  <div>
    <Paper inset style={styles.paper}>
      <Typography style={styles.text}>Paper Component</Typography>
    <Button style={styles.button}>      
      <img src={heart} />
    </Button>
    </Paper>
    <Paper style={styles.paper2}>
      <Typography>Wicked Input Form</Typography>
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
      <Button color="#88c" disabled style={styles.submit} flat>
          <Typography style={styles.typ}>Log in</Typography>
      </Button>
      }
    </Paper>
  </div>
)};

