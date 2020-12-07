import React, { useEffect, useState } from 'react'
import Button from "@material-ui/core/button"
import "./Login.css";
import { auth, provider } from "./firebase"
import { useStateValue } from "./StateProvider.js";
import { actionTypes } from './reducer';

function login() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [{}, dispatch] = useStateValue();

    const singIn = () => {
        auth.signInWithPopup(provider).then(result => {
            // console.log('result: ', result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })

        }).catch(error => alert(error.message));
    };
    

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://logos-world.net/wp-content/uploads/2020/05/WhatsApp-Logo-700x394.png" alt="" />
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button type="submit" onClick={singIn}>
                    Sign In with google
                </Button>
            </div>
        </div>
    )
}

export default login;
