import React, { useState } from 'react';
import addBookMark from '../../api/addBookMark';

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
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={handleTitle}/>
            <input type="text" value={url} onChange={handleUrl}/>

            <button type='submit'>Add</button>
        </form>
    );
}
 
export default AddBookMark;