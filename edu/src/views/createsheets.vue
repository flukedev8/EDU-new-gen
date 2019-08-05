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
      color="cyan accent-4"
      dark
    >

      <v-toolbar-title>สร้าง Sheets </v-toolbar-title>

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
    <p class="body-2">วันเวลาที่สร้างโพส: {{date}} </p>
    </div>
    <div>
       <v-btn class="ma-2" color="red" dark :href="link" target="_blank">get link
        <v-icon dark right>insert_link</v-icon> 
      </v-btn>
      <v-btn class="ma-2" text icon color="blue lighten-2">
        <v-icon size="50">thumb_up</v-icon>
      </v-btn>
    </div>

    </v-container>
      

    <v-container
      grid-list-md
      grey
      lighten-4
      justify-space-between
    >

    <div >
    <p class="headline">รายละเอียดวิชาพอสังเขป</p>
     <p style="text-indent: 3.0em;">{{Abstract}}</p>

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
    

    <v-container
      grid-list-md
      grey
      lighten-4
      justify-space-between
    >
    <v-layout wrap>
        <v-flex xs12 sm4 md4 lg4 xl4>
          <v-text-field
            label="รหัสวิชา"
            name="code"
            single-line
            v-model="code"
            solo
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm4 md4 lg4 xl4>
          <v-text-field
            label="ชื่อวิชา"
            name="name"
            single-line
            v-model="name"
            solo
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm4 md4 lg4 xl4>
          <v-text-field
            label="อาจารย์"
            name="professor"
            single-line
            v-model="professor"
            solo
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6 md6 lg6 xl6>
            <v-textarea
              clearable
              name="Abstract"
              clear-icon="cancel"
              label="รายละเอียดวิชาพอสังเขป"
              v-model="Abstract"
              solo
            ></v-textarea>
        </v-flex>

        <v-flex xs12 sm6 md6 lg6 xl6>
            <v-textarea
              clearable
              name="review"
              clear-icon="cancel"
              label="รีวิววิชาเรียน && สิ่งที่อยากบอกกับคนที่จะเรียน"
              v-model="review"
              solo
            ></v-textarea>
        </v-flex>

        <v-flex xs12 sm4 md4 lg4 xl4>
          <v-text-field
            label="link google drive"
            name="link"
            single-line
            v-model="link"
            solo
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm4 md4 lg4 xl4>
         <div>
            <v-btn class="ma-2" color="orange darken-2" dark >
              <v-icon dark left>library_books</v-icon>บันทึก sheet
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
   code: '',
   name: '',
   professor:'',
   Abstract:'',
   review: '',
   link: '',
   like:'0',
   date:'',
  }),

};
</script>
