<template>
  <v-list-item>
    <v-list-item-icon>
      <v-icon>{{ icon }}</v-icon>
    </v-list-item-icon>
    <v-list-item-title>{{ text }}</v-list-item-title>
  </v-list-item>
</template>

<script>
export default {
  name: "NavbarItem",
  props: ["icon", "text"],
};
</script>
