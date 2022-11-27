import { useContext, useState } from 'react';
import { PlacesContext, MapContext} from '../context';
import { Feature } from '../interfaces/places';
import { LoadingPlaces } from './LoadingPlaces';



export const SearchResults = () => {

    const { places, isLoadingPlaces,userLocation, showDirections, setHideDirections } = useContext(PlacesContext)
    const [isActive, setIsActive] = useState('');
    

    const { map, getRouteBetweenPoints } = useContext(MapContext)

    const onPlaceClicked = (place: Feature)=>{
        setIsActive(place.id)   
        const [ lng, lat ] = place.center;
      
        map?.flyTo({
            zoom:14,
            center:[lng, lat]
        })
        
    }

    if ( isLoadingPlaces ){
        return <LoadingPlaces />        
        
    }
    if (places.length === 0 ){
        return <></>
    }

    const getRoute = (place: Feature ) =>{
        if(!userLocation) return;
        setHideDirections()
        const [lng, lat] = place.center;


        getRouteBetweenPoints(userLocation,[lng, lat] )
    }
    
    if (!showDirections) return <></>
    
    return (
        
        <ul className='list-group mt-3'>

            {
                places.map(place => (

                    <li
                        key={place.id}
                        className={`list-group-item list-group-item-action pointer ${isActive === place.id ? 'active' : ''}`}
                        onClick={()=>onPlaceClicked(place)}
                    >
                        <h6>{place.text_es}</h6>
                        <p
                            style={{
                                fontSize: '12px'
                            }}
                           >
                           {place.place_name_es}
                        </p>
                        <button 
                              onClick={()=>getRoute(place)}
                              className={`btn ${isActive === place.id ? 'btn-outline-light' : 'btn-outline-primary'} btn-sm`}>
                            Cómo llegar
                        </button>
                    </li>
                ))
            }


        </ul>
    )
}

