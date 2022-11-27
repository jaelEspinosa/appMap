/* eslint-disable react-hooks/exhaustive-deps */

//@ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl,{ Map } from "!mapbox-gl";

import { useContext, useLayoutEffect, useRef } from "react"
import { MapContext, PlacesContext } from '../context';
import { Loading } from "./Loading";





export const MapView = () => {

  mapboxgl.accessToken = 'pk.eyJ1IjoiamFlbGVzcGlub3NhIiwiYSI6ImNsYWlmZzRmMDAyM28zbnMyMzc1NjliemgifQ.GX2N9WbENycS_4D8nwfifw';

  const { isLoading, userLocation } = useContext(PlacesContext);

  const {setMap} = useContext(MapContext)

  const { setHideDirections }= useContext(PlacesContext)

  const mapDiv = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if( !isLoading){
      
      const map = new Map({
        container: mapDiv.current!,
        style: 'mapbox://styles/mapbox/dark-v10',
        center: userLocation,
        zoom: 14
      })
    setMap(map)
    }
    
  }, [ isLoading ])
  
  if (isLoading) {
    return (
      <Loading />

    )
  }

  return (
    <div
      onClick={setHideDirections}
      ref={mapDiv}
      style={{
        
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0
      }}
    >
      {userLocation?.join(',')}
    </div>
  )
}
