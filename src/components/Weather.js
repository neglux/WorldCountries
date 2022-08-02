import React from "react";
import useFetch from "../hooks/useFetch";

const Weather = ({ latlng, timezone }) => {
  const { isLoading, data } = useFetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latlng[0]}&longitude=${latlng[1]}&hourly=temperature_2m&current_weather=true`
  );

  if (isLoading) return <div>Weather Loading..</div>;
  const { temperature, time } = data?.current_weather;

  return (
    <article>
      <h2 className="text-sm">{new Date(time).toDateString()}</h2>
      {data.current_weather ? (
        <span>
          {temperature}
          °C
        </span>
      ) : (
        <span className="flex text-sm mx-auto w-fit my-5">
          No Weather Information
        </span>
      )}
    </article>
  );
};

export default Weather;
