import React, { useEffect } from "react";
import { CurrentlyReading } from "./CurrentlyReading";
import { WantToRead } from "./WantToRead";
import { Read } from "./Read";
import { getAll } from "../../tools/BooksAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const Home = ({ books, setBooks, shelfChanger }) => {
  const navigate = useNavigate();

  const currentlyReadingBooks = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const WantToReadBooks = books.filter((book) => book.shelf === "wantToRead");
  const ReadBooks = books.filter((book) => book.shelf === "read");

  useEffect(() => {
    const getBook = async () => {
      await getAll()
        .then((res) => res.json())
        .then((data) => setBooks(data.books));
    };

    getBook();
  }, [setBooks]);

  return (
    <section className="home">
      <header className="header">MyReads</header>
      <CurrentlyReading
        books={currentlyReadingBooks}
        shelfChanger={shelfChanger}
      />
      <WantToRead books={WantToReadBooks} shelfChanger={shelfChanger} />
      <Read books={ReadBooks} shelfChanger={shelfChanger} />
      <button className="search-button" onClick={() => navigate("/search")}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </section>
  );
};
