<template>
  <v-form>
    <v-row>
      <v-col cols="md-4 sm-12" class="offset-md-3">
        <v-select
          :items="departements_num"
          v-model="selected_departement"
          label="Département"
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
            <v-card-title class="headline"> Modifier département </v-card-title>

            <v-card-text>
              <v-text-field
                label="Nouveau numéro"
                v-model="updated_num"
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
            <v-card-title class="headline"> Nouveau département </v-card-title>

            <v-card-text>
              <v-text-field label="Nom" v-model="new_num"></v-text-field>
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
            <v-card-title class="headline"> Supprimer département </v-card-title>
            <v-card-text>
              Confirmer la suppression du département
              <span class="font-italic">{{ selected_departement }}</span> ? Cette
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
import DepartementService from "../../services/DepartementService"

export default {
  name: "Departements",

  data: () => ({
    dialog_update: false,
    dialog_create: false,
    dialog_delete: false,

    departements_num: [],
    departements_id: [],

    new_num: "",
    updated_num: "",
    selected_departement: "",
  }),

  methods: {
    async refresh_departements() {
      this.departements_num = [];
      this.departements_id = [];
      let departements = await DepartementService.getAll();
      departements.forEach((e) => {
        this.departements_num.push(e.num);
        this.departements_id.push(e.id);
      });
    },

    async update() {
      let index = this.departements_num.indexOf(this.selected_departement);
      let id = this.departements_id[index];
      DepartementService.update(id, this.updated_num);
      this.selected_departement = parseInt(this.updated_num);
      this.updated_num = "";
      await this.refresh_departements();
    },

    async create() {
      DepartementService.post(this.new_num);
      await this.refresh_departements();
    },

    remove() {
      let index = this.departements_num.indexOf(this.selected_departement);
      let id = this.departements_id[index];
      DepartementService.delete(id);
      this.selected_departement = "";
      this.departements_num.splice(index, 1);
      this.departements_id.splice(index, 1);
    },
  },

  async created() {
    await this.refresh_departements();
  },
}
</script>