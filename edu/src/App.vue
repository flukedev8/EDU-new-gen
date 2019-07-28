<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      fixed
    >
      <v-list dense>
        <v-list-item to="/">
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/about">
          <v-list-item-action>
            <v-icon>face</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/#">
          <v-list-item-action>
            <v-icon>library_books</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>All Sheets</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/#">
          <v-list-item-action>
            <v-icon>mode_comment</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>รีวิววิชาเรียน</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/#">
          <v-list-item-action>
            <v-icon>voice_over_off</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ห้องแห่งความลับ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/about">
          <v-list-item-action>
            <v-icon>people</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Our team</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/#">
          <v-list-item-action>
            <v-icon>contact_mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/#">
          <v-list-item-action>
            <v-icon>lock</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/#">
          <v-list-item-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>


    <v-app-bar
      app
      clipped-left
      color="orange darken-1"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title >Education Community KMITL</v-toolbar-title>

    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer 
    app
    color="orange darken-1"
    >
      <span>CSAG &copy; 2019</span>
       <v-btn
              absolute
              dark
              fab
              top
              right
              color="pink accent-3"
              @click="top"
        >
        <v-icon>expand_less</v-icon>
        </v-btn>
    </v-footer>


  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: false,
  }),
  methods:{
    top(){
      window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
          });
      }
    },
};
</script>
