import { createContext } from "react";
import { Feature } from '../../interfaces/places';




export interface PlacesContextProps {
    isLoading: boolean;
    userLocation?:[number, number];
    isLoadingPlaces: boolean;
    places:Feature[];
    showDirections:boolean;
    

   

    // methods

    searchPlacesByTerm: (query: string) => Promise<Feature[]>;
    setHideDirections: () => void;
    setShowDirections: () => void
}

export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps) 