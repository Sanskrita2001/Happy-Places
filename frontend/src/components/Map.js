import React, {useRef, useState, useEffect} from 'react'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useLocation } from 'react-router-dom';
const Map = () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXRyaWpvLTIwMDEiLCJhIjoiY2t3Zmh1bjd4MGV4dTJwbW81MmJxd2FpbyJ9.vP4FN9fNNNm2a-p1d_0XTQ';

    const location = useLocation();
  
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [zoom, setZoom] = useState(10);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        const query = new URLSearchParams(location.search);

        const lat = query.get('lat');
        const lng = query.get('long');

        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });
        });

        return (
            <div>
              <div ref={mapContainer} className="map-container" />
            </div>
          );
    
}



export default Map
