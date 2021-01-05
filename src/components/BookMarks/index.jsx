import React, { useEffect, useState } from 'react';
import getBookMarks from '../../api/getBookMarks';
import BookMark from '../BookMark';
import './style.css'

const BookMarks = props => {
    const [bookMarks, setBookMarks] = useState([])
    const { isShow, show, setCurrent, id } = props

    useEffect(() => {
        getBookMarks.get({id: id}).then(result => {
            setBookMarks(result)
        }).catch(err => console.log(err))
    })

    return ( 
        <ul className="bookmarks">
            {
                bookMarks.length > 0 && bookMarks.map(bookMark => <BookMark
                    key={bookMark._id}
                    isShowFormUpdate={isShow}
                    show={show}
                    setCurrent={setCurrent}
                    bookMark={bookMark}/>)
            }
        </ul>
    );
}
 
export default BookMarks;