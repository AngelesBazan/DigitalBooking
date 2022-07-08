import React, { useEffect, useContext } from 'react'
import axios from "axios";
import { ProductContext } from "../../contexts/ProductContext";
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import '../../styles/product/maps.css'
import L from "leaflet";
import icono from '../../images/icon.svg'
import styles from "../../styles/product/product.module.css";
import { UrlContext } from '../../contexts/UrlContext';


const Maps = ({ city, latitude, idP }) => {
  const { position, setPosition } = useContext(ProductContext);
  const pointerIcon = new L.Icon({
    iconUrl: icono,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: "leaflet-venue-icon"
  });

  //const urlBase = "http://apibackendg1c1-env.eba-f63kvump.us-east-1.elasticbeanstalk.com";
  const { urlBase } = useContext(UrlContext);

  useEffect(() => {

    const fetchProductData2 = async () => {
      try {
        const resp = await axios.get(`${urlBase}/products/${idP}`);
        setPosition([resp.data.latitude, resp.data.longitude]);
      } catch (error) {
        console.warn(error);
      }
    };
    fetchProductData2()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (

    <div className={`${styles.containerPolicy} container-map`}>
      <h2 className={styles.h2}>¿Dónde vas a estar?</h2>
      <hr className={styles.separator} />
      {city != null ? <p className="city-map">{`${city.name}, ${city.country}`}</p> : ''}
      {position.length > 0 && position[0] == latitude ?
        <MapContainer center={position} zoom={16} scrollWheelZoom={false} style={{ maxHeight: '50vh' }} >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={pointerIcon} />
        </MapContainer> : ''}
    </div>
  )
}

export default Maps