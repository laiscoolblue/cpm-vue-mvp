<template>
  <v-list dense>
    <template v-for="(item, index) in list">
      <v-list-tile
        :key="item.id"
        :to="`/${type}/${item.id}`">
        <v-list-tile-content>
          <v-list-tile-title
            class="font-weight-regular"
          >{{ item.name }}</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon color="black">chevron_right</v-icon>
        </v-list-tile-action>
      </v-list-tile>
      <v-divider :key="`divider-${index}`"></v-divider>
    </template>
  </v-list>
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
