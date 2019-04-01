<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-navigation-drawer
          v-model="drawer"
          right
          fixed
          app
          width="440"
        >
          <v-toolbar flat dark color="blue darken-3" class="px-0">
            <v-btn icon small @click.stop="drawer = false">
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title class="font-weight-regular">Sorry voucher - 15 euro</v-toolbar-title>
          </v-toolbar>
          <v-list class="pt-0" dense>
            <v-list-tile>
              <v-list-tile-content
                class="body-1 grey--text"
                style="max-width: 120px;">Internal name</v-list-tile-content>
              <v-list-tile-content class="body-1">Sorry voucher - 15 euro</v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-footer class="px-3 py-2 drawer__footer" inset app height="auto" color="transparent">
            <v-layout>
              <v-btn color="info">Assign voucher</v-btn>
              <v-btn color="white" class="grey--text text--darken-2">Cancel</v-btn>
            </v-layout>
          </v-footer>
        </v-navigation-drawer>
        <Header  />
        <v-layout justify-center>
          <v-btn
            color="pink"
            dark
            @click.stop="drawer = !drawer"
          >
            Toggle
          </v-btn>
        </v-layout>
        <router-view/>
      </v-content>
    </v-app>
  </div>
</template>

<style lang="scss">
.drawer__footer {
  box-shadow: 0 0 4px rgba(0, 0, 0, .2);
}
.v-navigation-drawer--right {
  &.v-navigation-drawer--open {
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  }
}
</style>

<script>
import Header from '@/components/layout/Header.vue';

export default {
  name: 'Home',
  data() {
    return {
      drawer: false,
    };
  },
  components: {
    Header,
  },
};
</script>
