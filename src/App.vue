<template>
  <v-app>
    <navbar/>

    <v-main>
      <HelloWorld/>
    </v-main>
    
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Navbar from './components/navbar.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
