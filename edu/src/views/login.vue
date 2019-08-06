<template>
      <v-container
        bg 
        fill-height 
        grid-list-xl 
        text-xs-center
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs12
            sm8
            md4
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="orange darken-1"
                dark
                flat
              >
                <v-toolbar-title>Login Form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                >
                  <v-text-field
                    label="E-mail นักศึกษา"
                    name="login"
                    prepend-icon="person"
                    type="email"
                    v-model="email"
                    :rules="emailRules"
                    required
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="password"
                    required
                  ></v-text-field>


                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="warning">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail ใส่ด้วยคะอย่าลืมสิ',
        v => /.+@.+\..+/.test(v) || 'E-mail ก็ใส่ให้มันถูกต้องหน่อยนะคะ',
      ],
      password: '',
    }),
  }
</script>