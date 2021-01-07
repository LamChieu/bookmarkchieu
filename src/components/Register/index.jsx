import React, { useState } from 'react';
import register from '../../api/register';


const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassWord = e => {
        setPassWord(e.target.value)
    }

    const handleSubmitResgister = e => {
        e.preventDefault();

        register.addUser({ email, password })
            .then((res) => console.log(res.some))
            .catch((err) => console.log(err.data));

        setEmail('')
        setPassWord('')
    }

    return (
        <div className="container-bookmark" id="sign-bookmark" >
            <div className="form-bookmark">
            <h2>Sign Up</h2>
                <form className="form-input" onSubmit={handleSubmitResgister}>
                    <div className="form-sub">
                        <input type="email" name="Username" placeholder="Email" required="" value={email} onChange={handleEmail}/>
                        <input type="password" name="Password" placeholder="Password" required="" value={password} onChange={handlePassWord}/>
                    </div>
                    <p id="btn-login"><a href="#login-bookmark">Have account yet?</a></p>
                    <div className="submit">
                        <input type="submit" value="SIGN UP" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;