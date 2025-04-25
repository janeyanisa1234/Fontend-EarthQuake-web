
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet"
import 'leaflet/dist/leaflet.css';


export default function EarthRisk() {
    return (
        <div className=" h-screen w-full"> 
        <MapContainer
          center={[13.736717, 100.523186]} //ละติจูดลองติจูดของกรุงเทพ
          zoom={6}
          scrollWheelZoom={true}
          className="h-screen w-full"
        >
          <TileLayer
            //ดึงแผนที่
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    );
  }
  