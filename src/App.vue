<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      v-if="logged"
    >
      <v-list dense>
        <v-list-tile v-for="item in menuItems" :to="item.link" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="logOut">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app v-if="logged">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>ASAT</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view v-if="!firstLoading"></router-view>
      <div v-else>Loading...</div>
    </v-content>
    <v-footer app>
      <span class="black--text">&nbsp;&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),    
    computed: {
      menuItems () {
        let menuItems = [
          {title: 'Users', icon: 'face', link: '/user'},
          {title: 'Exams', icon: 'lock_open', link: '/exam'},
        ]
        return menuItems
      },
      logged () {
        return this.$store.getters.user !== null
      },
      firstLoading () {
        return this.$store.getters.firstLoading
      }
    },
    methods: {
      logOut () {
        this.$store.dispatch('logOut')
      }
    },
  }
</script>