import { useReducer } from "react"

import { Map, Marker, Popup } from "mapbox-gl"
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
    const myLocationPoup = new Popup()

        .setHTML(`
           <h4>Aquí estoy</h4>
           <p>En algún lugar del planeta</p>
           `);

        new Marker({
          color: '#61DAFB'
        })
           .setLngLat(  map.getCenter() )
           .setPopup(myLocationPoup)
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
function setHTML(arg0: string) {
  throw new Error("Function not implemented.")
}

