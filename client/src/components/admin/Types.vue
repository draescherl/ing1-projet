<template>
  <v-form>
    <v-row>
      <v-col cols="md-4 sm-12" class="offset-md-3">
        <v-select
          :items="types_name"
          v-model="selected_type"
          label="Type"
          outlined
        ></v-select>
      </v-col>

      <v-col cols="md-1 sm-2">
        <v-dialog v-model="dialog_update" width="300">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mx-2" fab dark color="info" v-bind="attrs" v-on="on">
              <v-icon dark> mdi-pencil </v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline"> Modifier type </v-card-title>

            <v-card-text>
              <v-text-field
                label="Nouveau nom"
                v-model="updated_name"
              ></v-text-field>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="
                  dialog_update = false;
                  update();
                "
              >
                Valider
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>

      <v-col cols="md-1 sm-2">
        <v-dialog v-model="dialog_create" width="300">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mx-2"
              fab
              dark
              color="success"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline"> Nouveau type </v-card-title>

            <v-card-text>
              <v-text-field label="Nom" v-model="new_name"></v-text-field>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                text
                @click="
                  dialog_create = false;
                  create();
                "
              >
                Valider
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>

      <v-col cols="md-1 sm-2">
        <v-dialog v-model="dialog_delete" persistent max-width="300">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mx-2" fab color="error" dark v-bind="attrs" v-on="on">
              <v-icon dark> mdi-delete-forever </v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline"> Supprimer type </v-card-title>
            <v-card-text>
              Confirmer la suppression du type
              <span class="font-italic">{{ selected_type }}</span> ? Cette
              opération est irréversible.
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="success" text @click="dialog_delete = false">
                Annuler
              </v-btn>
              <v-btn
                color="error"
                text
                @click="
                  dialog_delete = false;
                  remove();
                "
              >
                Confirmer
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import TypeService from "../../services/TypeService"

export default {
  name: "AdminTypes",

  data: () => ({
    dialog_update: false,
    dialog_create: false,
    dialog_delete: false,

    types_name: [],
    types_id: [],

    new_name: "",
    updated_name: "",
    selected_type: "",
  }),

  methods: {
    async refresh_types() {
      this.types_name = [];
      this.types_id = [];
      let types = await TypeService.getAll();
      types.forEach((e) => {
        this.types_name.push(e.name);
        this.types_id.push(e.id);
      });
    },

    async update() {
      let index = this.types_name.indexOf(this.selected_type);
      let id = this.types_id[index];
      TypeService.update(id, this.updated_name);
      this.selected_type = this.updated_name;
      this.updated_name = "";
      await this.refresh_types();
    },

    async create() {
      TypeService.post(this.new_name);
      await this.refresh_types();
    },

    remove() {
      let index = this.types_name.indexOf(this.selected_type);
      let id = this.types_id[index];
      TypeService.delete(id);
      this.selected_type = "";
      this.types_name.splice(index, 1);
      this.types_id.splice(index, 1);
    },
  },

  async created() {
    await this.refresh_types();
  },
}
</script>