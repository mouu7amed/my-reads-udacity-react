import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { search } from "../../tools/BooksAPI";
import { Book } from "../Book/Book";

export const Search = ({
  books,
  searchResult,
  setSearchResult,
  shelfChanger,
}) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getSearchBooks = async () => {
      if (!query) {
        setSearchResult([]);
        setError(false);
        return;
      }

      await search(query).then((res) => {
        if (res.length > 0) {
          setSearchResult(res);
          setError(false);
        } else {
          setSearchResult([]);
          setError(true);
        }
      });
    };

    getSearchBooks();
  }, [query, setSearchResult]);

  return (
    <section className="search">
      <header>
        <button className="back" onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <input
          className="search-input"
          placeholder="Search by book title or book author"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </header>

      {!error ? (
        <div className="books">
          {searchResult.map((result) => {
            let shelf = "none";
            books.map((book) =>
              book.id === result.id ? (shelf = book.shelf) : null
            );
            return (
              <Book
                key={result.id}
                book={result}
                shelfChanger={shelfChanger}
                shelf={shelf}
              />
            );
          })}
        </div>
      ) : (
        <div className="no-result">No Books Found!</div>
      )}
    </section>
  );
};
