<template>
  <div class="container">
    <h2>Pre-sets from {{ campaign.title }}</h2>

    <List :list="presets" type="preset" v-if="presets.length > 0"/>
    <p v-else>No pre-set found related to this campaign :/</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import List from '@/components/layout/List.vue';

export default {
  name: 'Campaign',
  computed: {
    route() {
      return this.$route;
    },
    campaignId() {
      const { params } = this.route;
      return params.id;
    },
    ...mapState([
      'presets',
      'campaign',
    ]),
  },
  methods: mapActions([
    'retrievePresets',
    'retrieveCampaign',
  ]),
  components: {
    List,
  },
  mounted() {
    this.retrieveCampaign(this.campaignId);
    this.retrievePresets(this.campaignId);
  },
};
</script>
