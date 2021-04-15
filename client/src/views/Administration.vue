<template>
  <div class="administration">
    <v-tabs class="d-flex justify-center mb-5">
      <v-tab
        v-for="(item, index) in tab_items"
        :key="item"
        @click="select_tab(index)"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <div v-if="selected_tab(0)"></div>
    <div v-if="selected_tab(1)"></div>
    <div v-if="selected_tab(2)">
      <v-form>
        <v-row>
          <v-col cols="4" class="offset-md-3">
            <v-select
              :items="type"
              label="Département"
              outlined
            ></v-select>
          </v-col>

          <v-col cols="1">
            <v-dialog v-model="dialog" width="300">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  color="info"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon dark> mdi-pencil </v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title class="headline">
                  Modifier département
                </v-card-title>

                <v-card-text>
                  <v-text-field
                    label="Nouveau département"
                  ></v-text-field>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="dialog = false">
                    Valider
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>

          <!-- <v-col cols="1">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  color="info"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon dark> mdi-pencil </v-icon>
                </v-btn>
              </template>
              <span>Modifier</span>
            </v-tooltip>
          </v-col> -->

          <v-col cols="1">
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  color="error"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon dark> mdi-delete-forever </v-icon>
                </v-btn>
              </template>
              <span>Supprimer</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-form>
    </div>
    <div v-if="selected_tab(3)"></div>
    <div v-if="selected_tab(4)"></div>
    <div v-if="selected_tab(5)"></div>
  </div>
</template>

<script>
export default {
  name: "Administration",
  components: {},

  data: () => ({
    tab_items: [
      "Retombées presse",
      "Communiqués de presse",
      "Types",
      "Départements",
      "Sources",
      "Thèmes",
    ],
    dialog: false,
    selected: 0,
  }),

  methods: {
    select_tab(tab) {
      this.selected = tab;
    },

    selected_tab(tab) {
      return this.selected == tab;
    },
  },
};
</script>