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
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app v-if="logged">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>ASAT</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app>
      <span class="black--text">&copy; 2019</span>
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
          {title: 'Sign up', icon: 'face', link: '/signup'},
          {title: 'Sign in', icon: 'lock_open', link: '/signin'},
        ]
        return menuItems
      },
      logged () {
        return this.$store.getters.user !== null
      }
    }
  }
</script>