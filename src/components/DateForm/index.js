import React, { useState } from "react";
import uuid from "uuid/v4";

const DateForm = ({ createDate }) => {
  const [appoiment, setAppoiment] = useState({
    pet: "",
    ownerName: "",
    date: "",
    time: "",
    symptoms: "",
  });

  const [error, setError] = useState(false);

  //function that is executed every time the user writes in an input
  const handleChange = (e) => {
    setAppoiment({
      ...appoiment,
      [e.target.name]: e.target.value,
    });
  };

  // extracting and destructuring the values
  const { pet, ownerName, date, time, symptoms } = appoiment;

  // function that runs when the user clicks the add appointment button
  const submitAppoiment = (e) => {
    e.preventDefault();

    // validating
    if (
      pet.trim() === "" ||
      ownerName.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      symptoms.trim() === ""
    ) {
      setError(true);
      return;
    }

    // Deleting previous message
    setError(false);

    // ID assigned
    appoiment.id = uuid();

    // create Appoiment
    createDate(appoiment)

    // reset form
    setAppoiment({
      pet: "",
      ownerName: "",
      date: "",
      time: "",
      symptoms: "",
    })
  };

  return (
    <>
      <h2>Create Appoiment</h2>
      {error ? <p className="error-alert">All fields are required</p> : null}
      <form onSubmit={submitAppoiment}>
        <label>Pet Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet Name"
          onChange={handleChange}
          value={pet}
        />
        <label>Owner Name</label>
        <input
          type="text"
          name="ownerName"
          className="u-full-width"
          placeholder="Owner Name"
          onChange={handleChange}
          value={ownerName}
        />
        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />
        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleChange}
          value={time}
        />
        <label>Symptoms</label>
        <textarea
          name="symptoms"
          className="u-full-width"
          placeholder="write a short description of the pet symptoms"
          onChange={handleChange}
          value={symptoms}
        />
        <button type="submit" className="u-full-width button-primary">
          Add Appoiment
        </button>
      </form>
    </>
  );
};

export default DateForm;
