import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Form from "./Form";
import List from "./List";
import "../../App.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "Gizem", phone_number: "555 544 44 44" },
    { fullname: "Buğra", phone_number: "545 888 12 12" },
    { fullname: "Deniz", phone_number: "544 333 33 33" }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
