<template>
  <div class="home">

    <this-weather/>

    <list-queries/>

  </div>
</template>



<script>
  import Weather from '@/components/Weather.vue';
  import ListQueries from '@/components/ListQueries.vue'
 
  export default {
    name: 'Home',
    components: {
      'this-weather': Weather,
      'list-queries': ListQueries,
    },

  }  

</script>