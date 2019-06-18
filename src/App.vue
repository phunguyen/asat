<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      v-if="logged"
      class="blue lighten-5"
      width="250"
      light
      :mini-variant.sync="mini"
    >
      <v-list class="pa-0">
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://www.groundai.com/static/groundai/img/avatar-placeholder.png">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ userInfo.name }}</v-list-tile-title>
          </v-list-tile-content>
          <v-spacer></v-spacer>
          <v-list-tile-action style="min-width:30px;">
            <v-menu bottom right offset-y origin="bottom right" transition="v-slide-y-transition">
              <v-btn icon light slot="activator">
                <v-icon>more_vert</v-icon>
              </v-btn>
              <v-list>
                <v-list-tile
                  v-for="item in userMenus"
                  :key="item.title"
                  value="true"
                  :to="item.link"
                  router
                >
                  <v-list-tile-title v-text="item.title"></v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-list-tile-action>
          <v-list-tile-action style="min-width:30px;">
            <v-btn icon @click.native.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" @click="clickMenu(item)" router>
          <v-list-tile-action class="pr-1 pl-2 mr-1">
            <v-icon :class="activeMenuItem.includes(item.title)?'blue--text': ''" :title="item.title" light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content :class="activeMenuItem.includes(item.title)?'blue--text': ''">
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed app v-if="logged" flat>
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
    drawer: null,
    mini: false,
    userMenus: [
      {
        icon: "bubble_chart",
        title: "Logout",
        link: "/logout"
      },
      {
        icon: "bubble_chart",
        title: "Change Password",
        link: "/changepassword"
      }
    ],
    items: [
      {
        icon: "dashboard",
        title: "Dashboard",
        vertical: "Dashboard",
        link: "dashboard"
      },
      {
        icon: "shopping_cart",
        title: "Orders",
        vertical: "Order",
        link: "orders"
      },
      {
        icon: "perm_identity",
        title: "Customers",
        vertical: "Customer",
        link: "customers"
      },
      {
        icon: "bubble_chart",
        title: "Products",
        vertical: "Product",
        link: "products"
      },
      {
        icon: "thumbs_up_down",
        title: "About",
        vertical: "About",
        link: "about"
      }
    ]
  }),
  computed: {
    menuItems() {
      let menuItems = [
        { title: "Users", icon: "face", link: "/user" },
        { title: "Exams", icon: "lock_open", link: "/exam" }
      ];
      return menuItems;
    },
    userInfo() {
      return this.$store.getters.userInfo;
    },
    logged() {
      return this.$store.getters.user !== null;
    },
    firstLoading() {
      return this.$store.getters.firstLoading;
    },
    activeMenuItem() {
      // return this.menuItem;
      return 'Dashboard';
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch("logOut");
      this.$router.push("/login");
    }
  }
};
</script>