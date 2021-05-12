<template>
    <v-col cols="12" sm="6">
        <v-text-field
            v-model.trim="city"
            label="Your City"  
            hint="For example, Chester, UK"
            outlined
            @keyup.enter="getWeather"
        ></v-text-field>
        <div id="icon" v-if="weather.main !==''"><img :src="wicon" alt="Weather icon"></div>
              
              <div
              :class="['text-h2']"
              class="transition-swing"
              v-text="weather.main"
              >
              </div>
              
              <div
              :class="['text-h3']"
              class="transition-swing"
              v-text="weather.description"
              >
              </div>

      </v-col>
 
</template>

<script>


export default {

    data () {
        return {
        }
    },

    computed: {
        city: {
            get(){
                return this.$store.getters['lookupCity'].city;
            },
            set(newValue){
                return this.$store.dispatch('setLookupCity',newValue)
            },
        },
        weather () {
            return this.$store.getters.returnWeather
        },
        wicon () {
            return this.$store.getters.returnWeatherIcon
        },

        query() {
            return this.$store.getters.returnQuery
        }
    },

    methods: {
      getWeather() {     
        this.$store.dispatch('newWeather', this.query)
      }
    },
    
}
</script>