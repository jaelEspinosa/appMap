
import { Feature } from "../../interfaces/places";
import { PlacesState } from "./PlacesProvider";

type PlacesAction  = 
|{type: 'setUserLocation', payload: [number, number]}
|{type: 'setLoadingPlaces' }
|{type: 'setPlaces', payload: Feature[]}
|{type: 'ShowDirections'}
|{type: 'HideDirections'}

export const placesReducer = (state: PlacesState, action: PlacesAction):PlacesState=>{


    switch (action.type) {
        case 'setUserLocation':
            return{
                ...state,
                isLoading:false,
                userLocation: action.payload
            }
        case 'setLoadingPlaces':
            return{
                ...state,
                isLoadingPlaces: true,
                places: []
            }    
        case 'setPlaces' :
            return{
                ...state,
                isLoadingPlaces: false,
                places: action.payload
            }
        case 'ShowDirections':
            return{
                ...state,
                showDirections: true
            }     
        case 'HideDirections':
                return{
                    ...state,
                    showDirections: false
                }     

        default: 
        return state

    }
} 