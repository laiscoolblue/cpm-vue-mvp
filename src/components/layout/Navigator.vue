<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/customer">Customer info</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigator',
};
</script>

<style lang="scss">
  nav {
    float: right;

    ul {
      list-style: none;

      li {
        display: inline-block;
        margin-left: 1em;
        margin-top: 0.3em;

        a {
          color: #ffffff;
          text-decoration: none;
        }
      }
    }
  }
</style>
