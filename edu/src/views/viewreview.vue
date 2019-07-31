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
    <v-toolbar
      color="amber darken-4"
      dark
    >

      <v-toolbar-title>รีวิววิชาเรียน</v-toolbar-title>

    </v-toolbar>

    <v-container
      
      grid-list-md
      grey
      lighten-4
      justify-space-between
    >

    <div >
    <p class="display-1">รหัสวิชา: {{code}} </p>
    <p class="headline">ชื่อวิชา: {{name}} </p>
    <p class="title">อาจารย์: {{professor}} </p>
    <p class="subtitle-1">Like: {{like}} คน</p> 
    <p class="body-2">วันเวลาที่สร้างโพส: {{date}}</p>
    
    </div>

    </v-container>
      
      
    <v-container
      grid-list-md
      grey
      lighten-4
      justify-space-between
    >

    <div >
    <p class="headline">รีวิววิชาเรียน && สิ่งที่อยากบอกกับคนที่จะเรียน</p>
     <p style="text-indent: 3.0em;">{{review}}</p>

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
   code: '00000',
   name: 'บ้าบอที่สุด',
   professor:'หล่อสุดในสจล.',
   review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam,expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam,expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam,expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.',
   like:'1000',
   date:'2019/08/01  10:11:33 ',
  }),

};
</script>
