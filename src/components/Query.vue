<template>
    <v-list-item>
        <template v-slot:default>
            <v-list-item-content>
                <v-list-item-title>
                
                {{ query.city }} -- {{ query.main}} -- {{ query.description }}

                </v-list-item-title>  
            </v-list-item-content>              
        </template>
    </v-list-item>  
</template>

<script>
  export default {
      props: ['query']
  }
</script>