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

        login.getUser({ email, password })
            .then((res) => {
                auth(res.isAuth)
                if (res.isAuth) id(res.userId)
            })
            .catch((err) => console.log(err.data));


        setEmail('')
        setPassWord('')
    }

    return (
        <div className = "bm-container">
            <h1>Book<span>mark</span></h1>
            <div className="login-register">
                <div className="container-bookmark" id="login-bookmark">
                    <div className="form-bookmark">
                        <h2>Login</h2>
                        <form className="form-input" onSubmit={handleSubmitLogin}>
                            <div className="form-sub">
                                <input type="email" name="Username" placeholder="Email" required="" value={email} onChange={handleEmail} />
                                <input type="password" name="Password" placeholder="Password" required="" value={password} onChange={handlePassWord} />
                            </div>

                            <div className="submit">
                                <input type="submit" value="LOGIN" />
                            </div>

                            <div className="register">
                                <p>Have not account yet?</p>
                                <a href="#sign-bookmark" id="btn-sign">SIGN UP</a>
                            </div>

                        </form>
                    </div>
                </div>
                <Register />
            </div>
        </div>
    );
}

export default Login;