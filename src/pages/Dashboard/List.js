import React from 'react'
import {FaEdit,FaTrash} from 'react-icons/fa'
import './List.css'
function List({items,deleteItem,editItem}) {
    return (
   <section className='grocery-list'>
       {
           items.map((item)=>{
               const {title,id}=item;
               return <article className='article' key={id}>
                   <p className='text'>
                       {title}
                   </p>
                   <div className='btn-container'>
                       <button className='edit' onClick={()=>editItem(id)}><FaEdit/></button>
                       <button className='delete' onClick={()=>deleteItem(id)}><FaTrash/></button>

                   </div>
               </article>
           })
       }
   </section>
    )
}

export default List
