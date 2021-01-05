import React, { useState } from 'react';
import updateBookMark from '../../api/updateBookMark';

const UpdateBookMark = props => {
    const { current, isShow, show } = props
    const [title, setTitle] = useState(current.title)
    const [url, setUrl] = useState(current.url)
    

    const handleTitle = e => {
        setTitle(e.target.value)
    }

    const handleUrl = e => {
        setUrl(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        updateBookMark.update({id: current._id, title: title, url: url})
        .then((res) => console.log(res.some))
        .catch((err) => console.log(err.data));

        setTitle('')
        setUrl('')
        isShow(!show)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={handleTitle}/>
            <input type="text" value={url} onChange={handleUrl}/>

            <button type='submit'>Update</button>
        </form>
    );
}
 
export default UpdateBookMark;