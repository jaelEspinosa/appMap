
import { BtnMyLocation, MapView, ReactLogo, SearchBar } from '../components'
import { SelectMode } from '../components/SelectMode'



export const HomeScreen = () => {
  return (
    <div>
      <MapView/>
      <SearchBar />
      <SelectMode />
      <BtnMyLocation />
      <ReactLogo />
    </div>
  )
}
