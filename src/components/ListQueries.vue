<template>
      <v-list class="pt=0"
     flat>
        <this-query 
        v-for="query in $store.state.queries"
        :key="query.id"
        :query="query"/>
        <v-divider></v-divider>
    </v-list>
</template>

<script>
import Query from '@/components/Query.vue'

export default {
  components: {
    'this-query': Query,
    }
}
</script>