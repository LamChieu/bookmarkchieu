import React from 'react';
import './style.css'
import deleteBookMark from '../../api/deleteBookMark'

const BookMark = props => {
    const { _id, title, url, img } = props.bookMark

    const { isShowFormUpdate, show, setCurrent} = props

    const handleClickUpdate = () => {
        isShowFormUpdate(!show)
        setCurrent({
            _id: _id,
            title: title,
            url: url
        })
    }

    const handleClickDelete = () => {
        deleteBookMark.delete({ id: _id })
    }

    return <li className="bookmark">
        <div className="content">
            <p>{title}</p>
            <a href={url}>{url}</a>
            {
                img !== undefined && <img height="300px" width="400px" src={`
                data:${img.contentType};base64,${img.data}
                `} alt="img" />
            }
        </div>

        <div className="action">
            <div className="icon" onClick={handleClickUpdate}>
                <img src="https://www.flaticon.com/svg/static/icons/svg/3983/3983278.svg" alt="icon"/>
            </div>

            <div className="icon" onClick={handleClickDelete}>
                <img src="https://www.flaticon.com/svg/static/icons/svg/3221/3221897.svg" alt="icon" />
            </div>
        </div>
    </li>;
}
 
export default BookMark;