<template>
  <div>
    <v-app-bar color="primary" app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="secondary"
        >

          <NavbarItem 
            v-for="item in links"
            :icon="item.icon"
            :text="item.text"
            :key="item.text"
          />

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import NavbarItem from './NavbarItem';

export default {
  name: "Navbar",
  components: { 
    NavbarItem 
  },

  data: function() {
    return {
      drawer: false,
      group: null,
      links: [
        {
          icon: "mdi-plus-box",
          text: "Saisir un article",
          link: ""
        },
        {
          icon: "mdi-chart-pie",
          text: "Voir les résultats",
          link: ""
        },
        {
          icon: "mdi-cog-outline",
          text: "Page d'administration",
          link: ""
        }
      ]
    }
  }
};
</script>
