import React, { useEffect, useState } from "react";
import "../../App.css";

// bir çok input girdisi olursa bu şekilde tanımlamak daha kolay.
const initialFormValues = { fullname: "", phone_number: "" };

function Form({ addContact, contacts }) {
  // console.log(addContact);
  const [form, setForm] = useState(initialFormValues);


  // contacts içine eklemenin bir diğer yolu. onSubmit içindeki atama yerine yapılabilir.
  //   useEffect(() => {
  //     setForm(initialFormValues);
  //   }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault(e);

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    addContact([...contacts, form]);
    // console.log(form);

    setForm(initialFormValues);
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          onChange={onChangeInput}
          value={form.fullname}
          autoFocus
        />
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="Phone Number"
          onChange={onChangeInput}
          value={form.phone_number}
        />
      </div>
     
      <div className="btn">
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default Form;
