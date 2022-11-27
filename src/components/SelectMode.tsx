import { useContext } from 'react';
import { MapContext } from '../context/map/MapContext';


export const SelectMode = () => {

  const {onSetTheme} = useContext(MapContext)
  
 const onChangeTheme = (e:any) => {
     
     onSetTheme(e.target.value)
 }

  
  return (
    <div >
      <select
         className='select-mode'
         onClick={e => onChangeTheme(e)}
      >
        <option value="mapbox://styles/mapbox/streets-v12">Ligth</option>
        <option value="mapbox://styles/mapbox/dark-v11">Dark</option>
        <option value="mapbox://styles/mapbox/satellite-streets-v12">Satellite</option>
      </select>
    </div>
  )

}
