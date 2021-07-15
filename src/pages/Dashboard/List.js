//import React, { useState } from 'react'
//import { FaEdit, FaTrash } from 'react-icons/fa'
import './List.css'

function List({ items, deleteItem, editItem }) {

    return (
        <section>
            {
                items.map((item) => {
                    const { title, id, like, dislike } = item;
                    return <div className="listOfPosts">
                        <article className='article' key={id}>
                            <div className="userNameAndProfile">
                                <div className="userProfileIcon">
                                    <i className="fas fa-2x fa-user-circle"></i>
                                </div>
                                <div className="userNameAndTime">
                                    <div className="userName">Yashwant Krishna</div>
                                    <div className="userPostTime">Yesterday at 16:15 </div>
                                </div>
                            </div>
                            <div className='btn-container'>
                                <button className='edit' onClick={() => editItem(id)}><i className="fas fa-pen"></i></button>
                                <button className='delete' onClick={() => deleteItem(id)}><i className="fas fa-trash"></i></button>
                            </div>
                        </article>
                        <p className='userPostListItemText'>
                            {title}
                        </p>
                        <div className="LikesAndDislikeBtn">
                            <div className="LikebtnAndNumber">
                                <button className="Likebtn" onClick={() => like(id)}><i className="fas fa-thumbs-up"></i></button>
                                <span className="LikeNumber">{like}</span>
                            </div>
                            <div className="DislikebtnAndNumber">
                                <button className="Dislikebtn" onClick={() => dislike(id)}><i className="fas fa-thumbs-down"></i></button>
                                <span className="DislikeNumber">{dislike}</span>
                            </div>
                        </div>
                    </div>
                })
            }
        </section>
    )
}

export default List
