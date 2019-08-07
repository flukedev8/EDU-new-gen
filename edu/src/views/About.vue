<template>
<v-container bg  grid-list-xl fill-height >
   <v-layout  wrap  justify-center  >
    <v-flex  
        xs12
        sm10
        md10
        lg10
        xl10
    >
    <v-card
    class="mx-auto"
    elevation="12"
    >

      <v-container
      
      grid-list-md
      grey
      lighten-4
    >
      <div class="text-md-center">
        <p class="display-1" >Power by</p>
      </div>
      <v-layout align-center justify-center row>
        <v-flex xs12  sm4 md4 lg4 xl4>
        <v-img
        src="../assets/csaglogo.png"
        aspect-ratio="1"
        class="grey lighten-2"
        max-width="500"
        max-height="300"
        ></v-img>
        </v-flex>
      
        <v-flex xs12  sm6 md6 lg6 xl6> 
        <v-img
        src="../assets/trademark.png"
        aspect-ratio="1"
        class="grey lighten-2"
        max-width="600"
        max-height="300"
        ></v-img>
        </v-flex>
      </v-layout>
     
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
