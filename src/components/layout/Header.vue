<template>
  <v-toolbar app flat dark color="blue">
    <v-toolbar-title>
      <span class="font-weight-bold">Edith</span>
      <span class="font-weight-regular"> | {{ title }}</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <Navigator />
  </v-toolbar>
</template>

<script>
import Navigator from '@/components/layout/Navigator.vue';

export default {
  name: 'Header',
  data() {
    return {
      title: 'Coolblue Payment Methods',
    };
  },
  components: {
    Navigator,
  },
};
</script>
