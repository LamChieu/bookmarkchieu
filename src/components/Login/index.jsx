import React, { useState } from 'react';
import login from '../../api/login';
import Register from '../Register';

const Login = props => {
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')
    const { auth, id } = props

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassWord = e => {
        setPassWord(e.target.value)
    }

    const handleSubmitLogin = e => {
        e.preventDefault();

        login.getUser({email, password})
        .then((res) => {
            auth(res.isAuth)
            if(res.isAuth) id(res.userId)
        })
        .catch((err) => console.log(err.data));
        

        setEmail('')
        setPassWord('')
    }

    return ( 
        <div>
            <form onSubmit={handleSubmitLogin}>
                <input type="email" value={email} onChange={handleEmail}/>
                <input type="password" value={password} onChange={handlePassWord} />
                <button type="submit">Login</button>
            </form>

        <Register />
        </div>
    );
}
 
export default Login;