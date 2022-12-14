import { useEffect, useReducer } from 'react';
import { searchApi } from '../../apis';
import { getUserLocation } from '../../helpers';
import { PlacesResponse, Feature } from '../../interfaces/places';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';


export interface PlacesState {
    isLoading: boolean;
    userLocation?:[number, number];
    isLoadingPlaces: boolean;
    places: Feature[];
    showDirections: boolean;

}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined,
    isLoadingPlaces: false,
    places: [],
    showDirections:true

}

interface Props{
    children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({children}: Props) => {

  const [state, dispatch] = useReducer(placesReducer,INITIAL_STATE)


  useEffect(() => {
    getUserLocation()
      .then(lngLat => dispatch ({type : 'setUserLocation', payload: lngLat})  )
  }, [])

  const searchPlacesByTerm = async (query:string): Promise<Feature[]>=>{

    
    if(query.length===0) {
      dispatch({type:'setPlaces', payload: []})
    }
    if(!state.userLocation) throw new Error ('No hay ubicación del usuario');
    
    dispatch({type:'setLoadingPlaces'})

    const resp = await searchApi.get<PlacesResponse>(`/${ query }.json`, {
      params: {
        proximity: state.userLocation.join(',')
      }
    });
   
    dispatch({type:'setPlaces', payload: resp.data.features})

    return resp.data.features
  }

  const setShowDirections = () =>{
    dispatch({type:'ShowDirections'})
  }
  
  const setHideDirections = () =>{
    dispatch({type: 'HideDirections'})
  }
  return (
    <PlacesContext.Provider value={{
        ...state,

        //Methods
        searchPlacesByTerm,
        setShowDirections,
        setHideDirections,

    }}>
     { children }
    </PlacesContext.Provider>
  )
}
 