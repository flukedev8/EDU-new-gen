<template>
   <v-container  bg fill-height grid-list-xl text-xs-center>
        <v-layout row wrap align-center>
          <v-flex justify-space-around>
            <v-card
              max-width="400"
              class="mx-auto"
              hover
              to="/allsheets"
              >
            <v-card-title class="justify-center">All sheets</v-card-title>
              <center><v-icon size="100" color="cyan accent-3">library_books</v-icon></center>
              <v-card-text><center>แหล่งรวมชีทการเรียนที่น่าสนใจ</center></v-card-text>
              </v-card>
          </v-flex>


           <v-flex justify-space-around>
            <v-card
            max-width="400"
              class="mx-auto"
              hover
              to="/review"
              >
            <v-card-title class="justify-center">รีวิววิชาเรียน</v-card-title>
            <center><v-icon size="100" color="amber darken-4" >mode_comment</v-icon></center>
              <v-card-text><center>ท่องไปโลกแห่งความเป็นจริง รีวิวออกมาจากใจ</center></v-card-text>
            </v-card>
          </v-flex>

           <v-flex justify-space-around> 
            <v-card
            max-width="400"
              class="mx-auto"
              hover
              to="/room"
              >
            <v-card-title class="justify-center">ห้องแห่งความลับ</v-card-title>
              <center><v-icon size="100" color="pink accent-3">voice_over_off</v-icon></center>
              <v-card-text><center>แชร์เรื่องราวต่างๆที่ไม่สามารถระบายให้ใครฟังได้</center></v-card-text>
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
