import React, { useEffect, useState } from "react";

const Weather = ({ latlng }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latlng[0]}&longitude=${latlng[1]}&hourly=temperature_2m`;
  async function fetchData() {
    try {
      const response = await fetch(url);
      const fetchedData = await response.json();
      setData(fetchedData);
      setIsLoading(false);
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [latlng]);

  if (isLoading) return <div>Weather Loading..</div>;

  const now = new Date();
  const currentIx = data.hourly.time.findIndex((time) => {
    const date = new Date(time);
    return (
      date.getHours() === now.getHours() && date.getDate() === now.getDate()
    );
  });
  return (
    <article>
      <h2 className="text-sm">{now.toDateString()}</h2>
      {currentIx && (
        <span>{data.hourly["temperature_2m"][currentIx - 3]}°C</span>
      )}
    </article>
  );
};

export default Weather;
