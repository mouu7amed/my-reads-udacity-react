import React from "react";
import { Book } from "../Book/Book";

export const CurrentlyReading = ({ books, shelfChanger }) => {
  return (
    <div className="shelf">
      <div className="shelft-head">
        <h1 className="shelf-title">Currently Reading</h1>
      </div>
      <div className="books">
        {books.map((book) => (
          <Book
            key={book.id}
            shelf="currentlyReading"
            book={book}
            shelfChanger={shelfChanger}
          />
        ))}
      </div>
    </div>
  );
};
