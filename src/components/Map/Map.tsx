import { useContext, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon, LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { IpContext } from "../../store/IpStore";
import LocationIcon from "@/assets/locationIcon.png";

function MapUpdater({ center }: { center: LatLngExpression }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);
  return null;
}

const skater = new Icon({
  iconUrl: LocationIcon,
  iconSize: [35, 46],
});

export default function Map() {
  const { state } = useContext(IpContext);
  const { lat, lng } = state;
  return lat && lng ? (
    <MapContainer
      className="w-screen flex-auto"
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={skater}>
        <Popup>Here is the IP Address you were looking for!</Popup>
      </Marker>
      <MapUpdater center={[lat, lng]} />
    </MapContainer>
  ) : (
    <div className="flex w-screen flex-auto items-center justify-center bg-gray-100">
      🔍 Please enter the IP address you want to look up!
    </div>
  );
}
