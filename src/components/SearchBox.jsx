import React from 'react'
import { FaSearch } from "react-icons/fa";
function SearchBox({search,setSearch,searchHandler}) {
  return (
    <div>
      <input type="text" placeholder='search title' value={search} onChange={(e)=>setSearch(e.target.value.toLocaleLowerCase())}/>
      <button onClick={searchHandler}><FaSearch/></button>
    </div>
  )
}

export default SearchBox
