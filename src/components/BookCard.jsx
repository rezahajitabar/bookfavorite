import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import styles from '../components/BookCard.module.css'
function BookCard({ data: { title, author, image, language, pages } }) {
    const [like,setLike]=useState(false);
    const clickHandler=()=>{
        setLike((like)=>!like)
    }
  return (
    <div className={styles.Card}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages} Pages</span>
        </div>
      </div>
      <button onClick={clickHandler}>
        <AiFillHeart size={24} color={like? "red" : "#fff"} />
      </button>
    </div>
  );
}

export default BookCard;
