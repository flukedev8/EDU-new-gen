<template>
<v-container bg  grid-list-xl fill-height >
   <v-layout  wrap  justify-center  >
    <v-flex  
        xs12
        sm8
        md8
        lg8
        xl8
    >
    <v-card
    class="mx-auto"
    elevation="12"
    >
    <v-toolbar
      color="amber darken-4"
      dark
    >

      <v-toolbar-title>ดูรีวิว วิชาเรียน </v-toolbar-title>

    </v-toolbar>

      <v-container
      
      grid-list-md
      grey
      lighten-4
    >

      <v-text-field

        hide-details 
        label="Search"
        prepend-inner-icon="search"
        solo-inverted
      ></v-text-field>
      </v-container>
      

    </v-card>

    </v-flex>
    

    </v-layout>
</v-container>
</template>

<script>
export default {
  data: () => ({
   
  }),

};
</script>
