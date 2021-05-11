<template>
    <v-col cols="12" sm="6">
        <v-text-field
            v-model.trim="options.params.q"
            label="Your City"  
            hint="For example, Chester, UK"
            outlined
            @keyup.enter="getWeather"
        ></v-text-field>


        <v-text-field 
            v-model.trim="weather"
            outlined
        ></v-text-field>

      </v-col>
 
</template>

<script>

export default {
    data () {
        return {

            options : {
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

            }  
        }
    },

    computed: {
        weather () {
            return this.$store.getters.returnWeatherDescription
        }
    },

    methods: {
      getWeather() {
        this.$store.dispatch('newWeather',this.options)
      }
    },
    
}
</script>