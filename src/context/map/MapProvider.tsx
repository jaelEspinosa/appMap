import { useReducer } from "react"

import { Map, Marker } from "mapbox-gl"
import { MapContext } from "./MapContext"
import { mapReducer } from "./mapReducer"


export interface MapState {
    isMapReady: boolean,
    map?: Map,
}
interface Props{
    children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE : MapState = {
    isMapReady : false,
    map: undefined
} 

export const MapProvider = ({children} : Props) => {

    const [state, dispatch] = useReducer( mapReducer,INITIAL_STATE )


    const setMap = ( map : Map ) => {

        new Marker()
           .setLngLat(  map.getCenter() )
           .addTo ( map )
        
        dispatch({type: 'setMap', payload: map})
    }

  return (
    <MapContext.Provider value = {{
       ...state,

       setMap,
    }} >
      {children}
    </MapContext.Provider>
  )
}
