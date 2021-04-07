<template>
  <div>
    <v-app-bar color="primary" app>
      <v-app-bar-nav-icon @click="drawer = true" class="white--text"></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="secondary">

          <v-list-item
            v-for="item in items"
            :key="item.text"
            router :to="item.route"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: { },

  data: function () {
    return {
      drawer: false,
      group: null,
      title: "Médiascope [redacted]",
      items: [
        {
          icon: "mdi-plus-box",
          text: "Saisir un article",
          route: "/saisie",
        },
        {
          icon: "mdi-chart-pie",
          text: "Voir les résultats",
          route: "/resultats",
        },
        {
          icon: "mdi-cog-outline",
          text: "Page d'administration",
          route: "/administration",
        },
      ],
    };
  },
};
</script>
