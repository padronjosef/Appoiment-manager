import React from "react";

const Date = ({ date, delateDate }) =>
  date.map((date) => (
    <div className="date" key={date.id}>
      <p>
        Pet: <span>{date.pet}</span>
      </p>
      <p>
        Owner Name: <span>{date.ownerName}</span>
      </p>
      <p>
        Date: <span>{date.date}</span>
      </p>
      <p>
        Time: <span>{date.time}</span>
      </p>
      <p>
        Symptoms: <span>{date.symptoms}</span>
      </p>
      <button
        className="button delate u-full-width"
        onClick={() => delateDate(date.id)}
      >
        Delate &times;
      </button>
    </div>
  ));

export default Date;
