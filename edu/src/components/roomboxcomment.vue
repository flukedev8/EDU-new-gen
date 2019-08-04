<template>
<v-container bg  grid-list-xl fill-height >
   <v-layout  row wrap  justify-center  >
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
      justify-space-between
    >
    <div>
    <p style="text-indent: 3.0em;">{{comment}} </p>
    </div>
    <br>
    <v-textarea
      clearable
      name="comment"
      clear-icon="cancel"
      label="Text"
      v-model="comment"
      counter=4000
    ></v-textarea>
    <div class="text-end">
     <v-btn class="ma-2" color="orange darken-2" dark>
        <v-icon dark left>comment</v-icon>Post
      </v-btn>
    </div>
      </v-container>
       

    </v-card>

    </v-flex>
    
    </v-layout>


</v-container>
</template>

<script>
export default {
  data: () => ({
   comment: 'แสดงความคิดเห็น',
  }),

};
</script>
