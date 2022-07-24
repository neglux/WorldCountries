import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

function MyComponent({ coord }) {
  const map = useMap();
  map.flyTo(coord, 5);
  return null;
}

const Map = ({ coord }) => {
  const [isNewCoord, setIsNewCoord] = useState(false);

  useEffect(() => {
    setIsNewCoord(true);
  }, [coord]);

  return (
    <MapContainer
      style={{ height: "90%", borderRadius: "5px" }}
      center={coord}
      zoom={5}
      scrollWheelZoom={false}
    >
      {isNewCoord && <MyComponent coord={coord} />}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default Map;
