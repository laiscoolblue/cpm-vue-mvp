<template>
  <header>
    <div class="container">
      <h1>{{ title }}</h1>
      <Navigator />
    </div>
  </header>
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

<style lang="scss">
header {
  background-color: #0090E3;
  padding: 1em;
  display: table;
  width: 100%;
  margin-bottom: 1em;
}

h1 {
  color: #ffffff;
  float: left;
}
</style>
