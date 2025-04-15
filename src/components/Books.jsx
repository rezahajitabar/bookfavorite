import React, { useState } from 'react'
import {books} from '../constants/mockData'
import BookCard from './BookCard'
function Books() {
  const [Liked,setLiked]=useState([]);

  const handleLike=(book,status)=>{
    if(status){
      const newLike=Liked.filter((i)=>i.id !==book.id);
      setLiked(newLike)
    }else{
      setLiked((Liked)=> [...Liked,book])
    }
  }
  return (
    <div>
      <div>{books.map((book)=> 
        (<BookCard key={book.id} data={book} handleLike={handleLike}/>))}</div>
      <div>
        {!!Liked.length && (<div>{Liked.map((book)=> (<SideCard/>))}</div>)}
      </div>
    </div>
  )
}

export default Books
