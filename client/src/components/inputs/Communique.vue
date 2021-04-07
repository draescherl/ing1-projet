<template>
  <div class="mt-5">
    <v-row>
      <v-col cols="4">
        <Date />
      </v-col>
      <v-col cols="4">
        <v-text-field label="Code" required></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field label="Titre" required></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-select :items="type" label="Type" outlined></v-select>
      </v-col>
      <v-col cols="4">
        <v-select :items="departement" label="Département" outlined></v-select>
      </v-col>
      <v-col cols="4">
        <v-select :items="theme" label="Thème" outlined></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <v-file-input
          show-size
          truncate-length="40"
          label="Document format pdf"
          accept=".PDF, .pdf"
        ></v-file-input>
      </v-col>
      <v-col cols="6" class="d-flex justify-center">
        <v-text-field label="Lien"></v-text-field
      ></v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-btn color="success"> Valider </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Date from "./Date";

export default {
  name: "Retombee",
  components: {
    Date,
  },
  props: ["type", "departement", "theme"],

  data: () => ({}),
};
</script>