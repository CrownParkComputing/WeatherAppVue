import axios from "axios"

export default {

      const options : {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {
            q: 'Chester,UK',
            lat: '',
            lon: '',
            callback: '',
            id: '',
            lang: 'null',
            units: '"metric" or "imperial"',
            mode: 'xml, html'
        },
        headers: {
        'x-rapidapi-key': '8f827328f7msha2e6fb055392147p12923djsn48da203c9552',
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
        },
    },
    
    index( params ){

    },

    show( id ){

    },

    update( id, data ){
        
    },

    create( data ){

    },

    delete( id ){

    }
}


