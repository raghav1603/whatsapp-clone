import { Button } from '@material-ui/core'
import React from 'react'
import { provider, auth } from './firebase'
import './Login.css'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'
function Login() {
    const [{ }, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(res => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: res.user,
                })
            })
            .catch(err => alert(err.message))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png" alt="login main" />
                <div className="login__text">
                    <h1>Sign in to whatsapp</h1>
                </div>
                <Button onClick={signIn}> click to register</Button>
            </div>
        </div>
    )
}

export default Login
