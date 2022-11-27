import { useContext } from 'react';
import { PlacesContext, MapContext } from '../context';





export const BtnMyLocation = () => {

  const {userLocation} = useContext(PlacesContext);
  const { map, isMapReady } = useContext(MapContext)

  const onClick = () =>{

  if(!isMapReady) throw new Error ('El mapa no está listo');
  if(!userLocation) throw new Error ('Falta la ubicación');

  map?.flyTo({
    zoom:14,
    center: userLocation

  })

  }

  return (

    <button
    onClick={ onClick }
   
    className='btn btn-outline btn-primary position'>
      Mi ubicacion
      </button>
  )
}
