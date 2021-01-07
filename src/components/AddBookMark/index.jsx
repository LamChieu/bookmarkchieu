import React, { useState } from 'react';
import addBookMark from '../../api/addBookMark';
import './style.css'

const AddBookMark = props => {
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const { id } = props

    const handleTitle = e => {
        setTitle(e.target.value)
    }

    const handleUrl = e => {
        setUrl(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        addBookMark.add({title, url, id})
        .then((res) => console.log(res.some))
        .catch((err) => console.log(err.data));

        setTitle('')
        setUrl('')
    }

    return ( 
        <form className = "add container" onSubmit={handleSubmit}>
            <input type="text" placeholder ="Title" value={title} onChange={handleTitle}/>
            <input type="text" placeholder ="Url" value={url} onChange={handleUrl}/>
            <button type='submit'>Add</button>
        </form>
    );
}
 
export default AddBookMark;