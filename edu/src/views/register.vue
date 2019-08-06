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
                <v-toolbar-title>Register Form</v-toolbar-title>
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
                    :counter="8"
                    :rules="passwordRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    id="confirm"
                    label="confirm password"
                    name="confirm"
                    prepend-icon="lock"
                    type="password"
                    v-model="confirm"
                    :counter="8"
                    :rules="[confirmRules]"
                    required
                  ></v-text-field>

                  <v-checkbox
                  v-model="checkbox"
                  :rules="[v => !!v || 'ยอมรับเงื่อนไขนั่นซะเพื่อจะได้ไปต่อ!']"
                  label="ยอมรับเงื่อนไขของเราไหม?"
                  required
                  ></v-checkbox>

                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                color="warning"
                class="mr-4"
                @click="validate"
                >
                Register
                </v-btn>

                <v-btn
                color="error"
                class="mr-4"
                @click="reset"
                >
                Reset Form
                </v-btn>
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
      password: '',
      passwordRules: [
        v => !!v || 'กรุณาใส่ password',
        v => (v && v.length >= 8) || 'ต้องใส่รหัสให้มากกว่าหรือเท่ากับ 8 ตัวและต้องไม่ตรงกับรหัสที่ใช้ในสำนักทะเบียน',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail ใส่ด้วยคะอย่าลืมสิ',
        v => /.+@.+\..+/.test(v) || 'E-mail ก็ใส่ให้มันถูกต้องหน่อยนะคะ',
      ],
      checkbox: false,
      confirm: '',

    }),

    computed:{
      confirmRules(){
        return this.password !== this.confirm ? 'รหัสมันไม่ตรงกันกรุณาตรวจสอบ' : true
      }
    },
    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>