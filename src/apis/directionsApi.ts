import axios from 'axios'

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        language: 'es',
        steps:'false',
        access_token: 'pk.eyJ1IjoiamFlbGVzcGlub3NhIiwiYSI6ImNsYWlmZzRmMDAyM28zbnMyMzc1NjliemgifQ.GX2N9WbENycS_4D8nwfifw'
    }
})

export default directionsApi