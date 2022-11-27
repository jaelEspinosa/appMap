import axios from 'axios'

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiamFlbGVzcGlub3NhIiwiYSI6ImNsYWlmZzRmMDAyM28zbnMyMzc1NjliemgifQ.GX2N9WbENycS_4D8nwfifw'
    }
})

export default searchApi