import React, { useState, useEffect } from "react";
import DateForm from "./components/DateForm";
import Date from "./components/Date";

function App() {
  // dates on local storage
  let inititalDates = JSON.parse(localStorage.getItem("dates"));
  if (!inititalDates) {
    inititalDates = [];
  }

  // state with all the dates
  const [dates, setDates] = useState(inititalDates);

  // useEffect to add the dates to local storage
  useEffect(() => {
    if (inititalDates) {
      localStorage.setItem("dates", JSON.stringify(dates));
    } else {
      localStorage.setItem("dates", JSON.stringify([]));
    }
  }, [dates, inititalDates]);

  // function that adds current appointments that adds a new one
  const createDate = (date) => {
    setDates([...dates, date]);
  };

  // function that delete a date by its id
  const delateDate = (id) => {
    const newDates = dates.filter((date) => date.id !== id);
    setDates(newDates);
  };

  // condicional message
  const title =
    dates.length === 0 ? "there's no appointments" : "manage your appointments";

  return (
    <>
      <h1>Appoiment Manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <DateForm createDate={createDate} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            <Date date={dates} delateDate={delateDate} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
