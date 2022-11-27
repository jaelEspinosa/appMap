import { useContext } from 'react';
import { MapContext } from '../context/map/MapContext';


export const SelectMode = () => {

  const {onSetTheme} = useContext(MapContext)
  
 const onChangeTheme = (e:any) => {
     
     onSetTheme(e.target.value)
 }

  
  return (
    <div className='select-mode'>
      <label htmlFor="light">Light</label>
      <input onClick={ onChangeTheme } name='light' type="radio" value='mapbox://styles/mapbox/streets-v12' />
      
      <label htmlFor="dark">Dark</label>
      <input onClick={ onChangeTheme } name='dark'type="radio" value='mapbox://styles/mapbox/dark-v11' />

      <label htmlFor="dark">Satelite</label>
      <input onClick={ onChangeTheme } name='satellite'type="radio" value='mapbox://styles/mapbox/satellite-streets-v12' />
     {/*  <select
         className='select-mode'
         onClick={e => onChangeTheme(e)}
      >
        <option value="mapbox://styles/mapbox/streets-v12">Ligth</option>
        <option value="mapbox://styles/mapbox/dark-v11">Dark</option>
        <option value="mapbox://styles/mapbox/satellite-streets-v12">Satellite</option>
      </select> */}
    </div>
  )

}
