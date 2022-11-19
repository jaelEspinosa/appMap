import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiamFlbGVzcGlub3NhIiwiYSI6ImNsYWlmZzRmMDAyM28zbnMyMzc1NjliemgifQ.GX2N9WbENycS_4D8nwfifw';

if ( !navigator.geolocation ){
  alert('Tu navegador no tiene oopcion de Ubicación')
  throw new Error ('Tu navegador no tiene oopcion de Ubicación')
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);


