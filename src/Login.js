import React from 'react'
import './Login.css'
import { Button } from '@mui/material'
import { auth , provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
    const [state,dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        }).catch(error=>{
            alert(error.message);
        })
    }
  return (
    <div className='login'>
      <div className='login__container'>
        <img src="https://yt3.googleusercontent.com/ytc/AOPolaTCsMhpgrJldSw0eABzVJ9JEc1pYyTST4CJ7JzN1Q=s176-c-k-c0x00ffffff-no-rj" alt=""/>
        <h1>
            SignIn to Slack
        </h1>
        <p>Slack</p>
        <Button onClick={signIn}>
            SignIn With Google
        </Button>
      </div>
    </div>
  )
}

export default Login
