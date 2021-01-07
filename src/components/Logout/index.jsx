import React from 'react';

const Logout = props => {
    const { auth, id } = props

    const handleClickLogout = e => {
        auth(false)
        id('')
    }

    return <button className = "logout" onClick={handleClickLogout}>Logout</button>;
}
 
export default Logout;