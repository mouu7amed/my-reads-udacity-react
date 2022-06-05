import React from "react";
import { Book } from "../Book/Book";

export const Read = ({ books, shelfChanger }) => {
  return (
    <div className="shelf">
      <div className="shelft-head">
        <h1 className="shelf-title">Read</h1>
      </div>
      <div className="books">
        {books.map((book) => (
          <Book
            key={book.id}
            book={book}
            shelf="read"
            shelfChanger={shelfChanger}
          />
        ))}
      </div>
    </div>
  );
};
