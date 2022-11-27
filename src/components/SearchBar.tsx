import { ChangeEvent, useRef, useContext } from 'react';
import { PlacesContext } from '../context';
import { SearchResults } from './SearchResults';






export const SearchBar = () => {
 
  const { searchPlacesByTerm, places, setShowDirections } = useContext(PlacesContext)
  
 

  const debounceRef  = useRef<NodeJS.Timeout>()

  const onQueryChanged = (event:ChangeEvent<HTMLInputElement>)=>{
 
    
    if (debounceRef.current ) {
      clearTimeout ( debounceRef.current );
    }

    debounceRef.current = setTimeout (()=>{
    searchPlacesByTerm(event.target.value)
     
     
    }, 500)

  }
  return (
    <div className='search-container'>
        <input
            className='from-control item-search' 
            placeholder='buscar....'
            type="text" 
            onChange={ onQueryChanged }
            onClick={ setShowDirections }
            />
     
    {places && <SearchResults />}  
    </div>
  )
}
