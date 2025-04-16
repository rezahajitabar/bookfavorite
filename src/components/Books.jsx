import React, { useState } from "react";
import { books as bookData} from "../constants/mockData";
import BookCard from "./BookCard";
import SideCard from "./SideCard";
import styles from "../components/Books.module.css";
import SearchBox from "./SearchBox";
function Books() {
  const [books, setBook] = useState(bookData);
  const [Liked, setLiked] = useState([]);
  const [search, setSearch] = useState([]);

  const handleLike = (book, status) => {
    if (status) {
      const newLike = Liked.filter((i) => i.id !== book.id);
      setLiked(newLike);
    } else {
      setLiked((Liked) => [...Liked, book]);
    }
  };

  const searchHandler=()=>{
    if(search){
      const newBooks=bookData.filter((book)=> book.title.toLowerCase().includes(search))
      setBook(newBooks)
    }else{
      setBook(bookData)
    }
  }
  return (
    <>
      <SearchBox search={search} setSearch={setSearch} searchHandler={searchHandler}/>
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <BookCard key={book.id} data={book} handleLike={handleLike} />
          ))}
        </div>
        <div>
          {!!Liked.length && (
            <div className={styles.favorite}>
              <h1>favorite</h1>
              {Liked.map((book) => (
                <SideCard key={book.id} data={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Books;
