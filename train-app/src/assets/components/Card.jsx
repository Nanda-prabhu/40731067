import React from 'react';

const fakeTrainDetails = {
  trainName: "Chennai Exp",
  trainNumber: "2344",
  departureTime: {
    Hours: 21,
    Minutes: 35,
    Seconds: 0
  },
  seatsAvailable: {
    sleeper: 3,
    AC: 1
  },
  price: {
    sleeper: 2,
    AC: 5
  },
  delayedBy: 15
};

function Card({ Train }) {
  return (
    <div className="train-card p-10 rounded-xl shadow-lg m-5 w-fit">
      <h2 className="text-lg font-bold mb-2">{train.trainName}</h2>
      <div className="w-full border mb-2"></div>
      <p>Train Number: {train.trainNumber}</p>
      <p>
        Departure Time: {train.departureTime.Hours}:
        {train.departureTime.Minutes}:{train.departureTime.Seconds}
      </p>
      <p>Seats Available:</p>
      <ul>
        <li>Sleeper: {train.seatsAvailable.sleeper}</li>
        <li>AC: {train.seatsAvailable.AC}</li>
      </ul>
      <p>Price:</p>
      <ul>
        <li>Sleeper: {train.price.sleeper}</li>
        <li>AC: {train.price.AC}</li>
      </ul>
      <p>Delayed By: {train.delayedBy} minutes</p>
    </div>
  );
}

export default Card;
