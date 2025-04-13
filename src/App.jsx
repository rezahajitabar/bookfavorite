import {books} from './constants/mockData'

function App() {
  return (
    <>
      <h1>Book App Starting files</h1>
      {books.map((book)=> <p>{book.country}</p>)}
    </>
  );
}

export default App;
