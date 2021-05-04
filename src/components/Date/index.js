import React from "react";

const Date = ({ date, deleteDate }) =>
  date.map((date) => (
    <div className="date" key={date.id}>
      <div className="date__pet-info">
        <p>
          Pet: <span>{date.pet}</span>
        </p>
        <p>
          Owner Name: <span>{date.ownerName}</span>
        </p>
      </div>
      <div className="date__time-info">
        <p>
          Date: <span>{date.date}</span>
        </p>
        <p>
          Time: <span>{date.time}</span>
        </p>
      </div>
      <p>
        Symptoms: <span>{date.symptoms}</span>
      </p>
      <button
        className="button delete u-full-width"
        onClick={() => deleteDate(date.id)}
      >
        Delete &times;
      </button>
    </div>
  ));

export default Date;
