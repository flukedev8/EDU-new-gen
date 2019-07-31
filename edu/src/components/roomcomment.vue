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
     <v-flex    v-for="text in comment" :key="text.uuid"
    >
    <div >
    <p class="title">{{text.email}}</p>
    <p class="subtitle-2">{{text.date}}</p>
    <p style="text-indent: 3.0em;">{{text.text}} </p>
    </div>
     </v-flex>
      </v-container>
       

    </v-card>

    </v-flex>
    
    </v-layout>


</v-container>
</template>

<script>
export default {
  data: () => ({
   comment: [
       {
           uuid:'6516',
           email:'6001000@kmitl.ac.th',
           text:'เรื่องราวมันน่าสนใจมาเลยเป็นกำลังใจให้น่ะค่ะ',
           date:'2019/08/01 13:11:48',
       },
       {
           uuid:'9481',
           email:'5902001@kmitl.ac.th',
           text:'wow เรื่องจริงหรอเนี่ยยย',
           date:'2019/08/01 13:15:38',
       },
       {
           uuid:'4564',
           email:'59001100@kmitl.ac.th',
           text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam,expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam,expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam,expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.',
           date:'2019/08/01 13:20:18',
       }
   ],
  
  }),

};
</script>
