import React, { useState } from "react";
import DropDownIcon from "../assets/arrow-drop-down.svg";

export const OptionsMenu = ({ book, shelf, shelfChanger }) => {
  const [value, setValue] = useState(shelf);

  const changeShelfHandle = async (e) => {
    const { value } = e.target;
    setValue(value);
    shelfChanger(book, value);
  };

  return (
    <div className="menu" style={{ backgroundImage: `url(${DropDownIcon})` }}>
      <select value={value} onChange={changeShelfHandle}>
        <option vlaue="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};
