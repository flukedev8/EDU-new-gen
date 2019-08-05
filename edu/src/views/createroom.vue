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
      color="pink accent-4"
      dark
    >

      <v-toolbar-title>ห้องแห่งความลับ</v-toolbar-title>

    </v-toolbar>

    <v-container
      
      grid-list-md
      grey
      lighten-4
      justify-space-between
    >

    <div >
    <p class="display-1">รหัสห้อง: {{coderoom}} </p>
    <p class="headline">ชื่อเรื่อง: {{nameroom}} </p>
    <p class="title">นามปากกา: {{nameowner}} </p>
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
    <p class="headline">รายละเอียดเรื่องราว</p>
     <p style="text-indent: 3.0em;">{{story}}</p>

    </div>

      </v-container>

    <v-container
      grid-list-md
      grey
      lighten-4
      justify-space-between
    >
    <v-layout wrap>
        <v-flex xs12 sm4 md4 lg4 xl4>
          <v-text-field
            label="ชื่อเรื่อง"
            name="nameroom"
            single-line
            v-model="nameroom"
            solo
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm4 md4 lg4 xl4>
          <v-text-field
            label="นามปากกา"
            name="nameowner"
            single-line
            v-model="nameowner"
            solo
          ></v-text-field>
        </v-flex>


        <v-flex xs12 sm12 md12 lg12 xl12>
            <v-textarea
              clearable
              name="story"
              clear-icon="cancel"
              label="รายละเอียดเรื่องราว"
              v-model="story"
              solo
            ></v-textarea>
        </v-flex>

        <v-flex xs12 sm4 md4 lg4 xl4>
         <div>
            <v-btn class="ma-2" color="pink accent-4" dark >
              <v-icon dark left>voice_over_off</v-icon>สร้างห้อง
            </v-btn>
        </div>
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
   coderoom: '00000',
   nameroom: '',
   nameowner:'',
   story: '',
   like:'0',
   date:'',
  }),

};
</script>
