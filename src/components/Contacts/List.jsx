import React from "react";
import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });
  return (
    <div>
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span className="nameClass">{contact.fullname}</span>
            <span className="phoneClass">{contact.phone_number}</span>
          </li>
        ))}
      </ul>

      <p style={{ textAlign: "center" }}>Total contacts({filtered.length})</p>
    </div>
  );
}

export default List;
