<template>
  <div class="container">
    <h2>Home</h2>

    <List :list="campaigns" type="campaign"/>
    <p v-if="isLoaded && !campaigns.length">No campaings found :(</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import List from '@/components/layout/List.vue';

export default {
  name: 'Home',
  data() {
    return {
      isLoaded: false,
    };
  },
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
      this.retrieveCampaigns()
        .then(() => {
          this.isLoaded = true;
        });
    }
  },
};
</script>
