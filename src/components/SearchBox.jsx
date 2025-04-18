import React from 'react'
import styles from '../components/Search.module.css'
import { FaSearch } from "react-icons/fa";
function SearchBox({search,setSearch,searchHandler}) {
  return (
    <div className={styles.searchBox} >
      <input  type="text" placeholder='search title' value={search} onChange={(e)=>setSearch(e.target.value.toLocaleLowerCase())}/>
      <button onClick={searchHandler}><FaSearch/></button>
    </div>
  )
}

export default SearchBox
