import React from "react";
import { OptionsMenu } from "../OptionsMenu";

export const Book = ({ book, shelf, shelfChanger }) => {
  return (
    <div key={book.id} className="book">
      <div className="book-preview">
        <img src={book.imageLinks?.thumbnail} alt="" className="thumbnail" />
        <OptionsMenu book={book} shelf={shelf} shelfChanger={shelfChanger} />
      </div>
      <p className="book-title">{book.title}</p>
      <p className="book-subtitle">
        {!!book.authors ? book.authors : "Unknown Author"}
      </p>
    </div>
  );
};
