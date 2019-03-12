<template>
  <div class="container">
    <h2>Home</h2>

    <List :list="campaigns" type="campaigns"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import List from '@/components/layout/List.vue';

export default {
  name: 'Home',
  computed: mapState([
    'campaigns',
  ]),
  methods: mapActions([
    'retrieveCampaigns',
  ]),
  components: {
    List,
  },
  mounted() {
    if (!this.campaigns.length) {
      this.retrieveCampaigns();
    }
  },
};
</script>
