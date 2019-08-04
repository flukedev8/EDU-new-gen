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
      <v-container
      
      grid-list-md
      grey
      lighten-4
    >
    <v-flex>
    <div class="text-end">
     <v-btn class="ma-2" color="orange darken-2" dark to="/createsheets">
        <v-icon dark left>library_books</v-icon>สร้าง sheet
      </v-btn>
    </div>

     <div >
    <v-data-table
      :headers="headers"
      :items="desserts"
      :page.sync="page"
      :items-per-page="7"
      hide-default-footer 
      item-keay="name"
      class="elevation-1"
      @page-count="pageCount = $event"
    >
      <template v-slot:item.action="{ item }" >
      <v-icon
        size="20"
        class="mr-2"
        @click="linktopage(item)"
        
      >
      edit
      </v-icon>
      </template>
      
    </v-data-table>
    <div class="text-center pt-2">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
     </div>
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
    data () {
      return {
        page: 1,
        pageCount: 0,
        itemsPerPage: 10,
        headers: [
          {
            text: 'My sheets',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'ชื่อวิชา', value: 'calories' },
          { text: 'ชื่ออาจารย์', value: 'fat' },
          { text: 'ยอดคนกด Like', value: 'carbs' },
          { text: 'คลิกที่ icon', value: 'action', sortable: false },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            action: 'viewreview',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            action: 'viewreview',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            action: 'viewreview',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            action: 'viewreview',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            action: 'viewreview',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            action: 'viewreview',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            action: 'viewreview',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            action: 'viewreview',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            action: 'viewreview',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            action: 'viewreview',
          },
        ],
      }
    },
    methods: {
      linktopage(link){
        this.$router.push('/'+link.action)
      }
    },
  };
</script>
