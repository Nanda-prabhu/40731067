import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TrainCard from './Card';

function TrainList() {
  const [trains, setTrains] = useState([]);
  const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODY4NDA5OTIsImNvbXBhbnlOYW1lIjoiVHJhaW4gYXBwbGljYXRpb24iLCJjbGllbnRJRCI6ImJiYWU5ZDcxLTEzYjMtNGEwMS04NmRjLTgxZjBhNDhjOGZiNyIsIm93bmVyTmFtZSI6IiIsIm93bmVyRW1haWwiOiIiLCJyb2xsTm8iOiI0MDczMTA2OCJ9.snVQ7AqOBcloUF2bOtecF0qu3BKIWdPLOFkAbMaZ9ag';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://104.211.219.98:80/train/trains', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setTrains(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching train data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className='text-2xl font-bold mb-2'>Train List</h1>
      {Array.isArray(trains) && trains.length > 0 ? (
        trains.map((train) => <TrainCard key={train.trainNumber} train={train} />)
      ) : (
        <div>
          <p>No trains found.</p>
          <p>message: "token is expired"</p>
        </div>
      )}
    </div>
  );
}

export default TrainList;
