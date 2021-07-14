import React from 'react'
//import { FaEdit, FaTrash } from 'react-icons/fa'
import './List.css'
function List({ items, deleteItem, editItem }) {
    return (
        <section className='grocery-list'>
            {
                items.map((item) => {
                    const { title, id } = item;
                    return <div className="listOfPosts">
                        <article className='article' key={id}>
                            <div className="userNameAndProfile">
                                <div className="userProfileIcon">
                                    <i class="fas fa-2x fa-user-circle"></i>
                                </div>
                                <div className="userNameAndTime">
                                    <div className="userName">Yashwant Krishna</div>
                                    <div className="userPostTime">Yesterday at 16:15 </div>
                                </div>
                            </div>
                            <div className='btn-container'>
                                <button className='edit' onClick={() => editItem(id)}><i class="fas fa-pen"></i></button>
                                <button className='delete' onClick={() => deleteItem(id)}><i class="fas fa-trash"></i></button>
                            </div>
                        </article>
                        <p className='userPostListItemText'>
                            {title}
                        </p>
                        <div className="LikesAndDislikeBtn">
                            <div className="LikebtnAndNumber">
                                <button className="Likebtn"><i class="fas fa-thumbs-up"></i></button>
                                <span className="LikeNumber">39</span>
                            </div>
                            <div className="DislikebtnAndNumber">
                                <button className="Dislikebtn"><i class="fas fa-thumbs-down"></i></button>
                                <span className="DislikeNumber">404</span>
                            </div>
                        </div>
                    </div>
                })
            }
        </section>
    )
}

export default List
