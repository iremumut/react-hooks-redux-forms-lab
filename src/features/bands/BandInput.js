import React from "react";
import { useState } from "react";


function BandInput({onBandSubmit}) {

  const [name,setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      onBandSubmit(name);
      setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name</label>
      <input type="text" name="name" value={name} onChange={handleChange} id="name"></input>
      <button type="submit" onClick={handleSubmit}>add band</button>
    </form>
  );
}

export default BandInput;
