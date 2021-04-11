<template>
  <div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          prepend-icon="mdi-calendar"
          label="Date"
          v-model="dateFormatted"
          v-bind="attrs"
          v-on="on"
          @blur="date = parseDate(dateFormatted)"
          required
        ></v-text-field>
      </template>
      <v-date-picker
        color="secondary"
        no-title
        v-model="date"
        @input="menu = false"
        @change="update"
      ></v-date-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "InputDate",

  data: (vm) => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu: false,
  }),

  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    },
  },

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },

    parseDate(date) {
      if (!date) return null;

      const [day, month, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },

    update() {
      this.$emit("change", this.date);
    },
  },

  created() {
    /**
     * The update() method is only called when the date component is updated.
     * Here we call it when the component is created to avoid frustration from
     * the user.
     */
    this.update();
  }
};
</script>