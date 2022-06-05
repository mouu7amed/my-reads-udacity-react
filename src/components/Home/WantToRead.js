import React from "react";
import { Book } from "../Book/Book";

export const WantToRead = ({ books, shelfChanger }) => {
  return (
    <div className="shelf">
      <div className="shelft-head">
        <h1 className="shelf-title">Want To Read</h1>
      </div>
      <div className="books">
        {books.map((book) => (
          <Book
            key={book.id}
            book={book}
            shelf="wantToRead"
            shelfChanger={shelfChanger}
          />
        ))}
      </div>
    </div>
  );
};
