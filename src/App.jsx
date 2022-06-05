import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { NoMatch } from "./components/No Match Route/NoMatch";
import { Search } from "./components/Search/Search";
import { update } from "./tools/BooksAPI";

function App() {
  const [books, setBooks] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const shelfChanger = async (book, shelf) => {
    await update(book, shelf).catch((err) => console.log(err));
    if (shelf === "none") {
      setBooks(books.filter((b) => b.id !== book.id));
    } else {
      book.shelf = shelf;
      setBooks(books.filter((b) => b.id !== book.id).concat(book));
    }
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              books={books}
              setBooks={setBooks}
              shelfChanger={shelfChanger}
            />
          }
        />
        <Route
          path="/search"
          element={
            <Search
              books={books}
              searchResult={searchResult}
              setSearchResult={setSearchResult}
              shelfChanger={shelfChanger}
            />
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
