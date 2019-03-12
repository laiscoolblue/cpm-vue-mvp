<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue';

export default {
  name: 'Home',
  components: {
    Header,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.container {
  max-width: 1180px;
  margin: 0 auto;
}

h1 {
  font-size: 1.4em;
}

h2 {
  font-size: 1.2em;
}
</style>
