<template>
  <ul class="list">
    <li v-for="item in list" :key="item.id">
      <router-link :to="`/${type}/${item.id}`" v-if="type">{{ item.name }}</router-link>
      <template v-else>
        {{ item.name }}
      </template>
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

    li {
      padding: 0.5em 1em;
      background-color: #F3F3F3;

      &:nth-of-type(even) {
        background-color: #DDDDDD;
      }
    }
  }
</style>
