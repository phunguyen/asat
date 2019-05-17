<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar>
            <v-toolbar-title>Signup</v-toolbar-title>                
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="email" name="login" label="Email" type="text" v-model="email"></v-text-field>
              <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password"></v-text-field>
              <v-text-field id="phone" prepend-icon="phone" name="phone" label="Phone" type="phone" v-model="phone"></v-text-field>
              <v-text-field id="name" prepend-icon="person" name="name" label="Name" type="name" v-model="name"></v-text-field>
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="date"
                    label="Birthday"
                    prepend-icon="event"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" @input="menu2 = false" no-title scrollable></v-date-picker>
              </v-menu>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="logIn">Login</v-btn>
            <v-btn @click="signUp" color="primary">Signup</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// Ngày sinh, Giới tính, Địa chỉ, Lớp đang học, Trường đang học, Họ tên Bố hoặc mẹ
  export default {
    data: () => ({
      email: '',
      password: '',
      phone: '',
      name: '',
      date: '',
      menu2: null
    }),
    methods: {
      signUp () {
        this.$store.dispatch('signUp', {
          email: this.email,
          password: this.password,
          phone: this.phone,
          name: this.name,
          date: this.date
        })
          .then(() => {
            this.$router.push('/')
          })
      },
      logIn () {
        this.$router.push('/login')
      }
    }
  }
</script>