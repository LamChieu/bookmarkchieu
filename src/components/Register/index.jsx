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

        register.addUser({email, password})
        .then((res) => console.log(res.some))
        .catch((err) => console.log(err.data));

        setEmail('')
        setPassWord('')
    }

    return ( 
        <form onSubmit={handleSubmitResgister}>
                <input type="email" value={email} onChange={handleEmail}/>
                <input type="password" value={password} onChange={handlePassWord} />
                <button type="submit">Register</button>
        </form>
    );
}
 
export default Register;