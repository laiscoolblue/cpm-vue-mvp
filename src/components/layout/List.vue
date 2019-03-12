<template>
  <ul class="list">
    <li v-for="item in list" :key="item.id">
      <router-link :to="`/${type}/${item.id}`">{{ item.title }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    list: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
  .list {
    list-style: none;
    margin-top: 1em;

    li {
      padding: 0.5em 1em;
      background-color: #F3F3F3;

      &:nth-of-type(even) {
        background-color: #DDDDDD;
      }
    }
  }
</style>
