<template>
  <div class="container">
    <h2>Pre-sets from {{ campaign.name }}</h2>

    <List :list="presets" type="issue-voucher"/>
    <p v-if="isLoaded && !presets.length">No pre-set found related to this campaign :/</p>

    <ul class="pagination">
      <li
        v-for="page in pages"
        :key="page.number"
        @click="updateList(page.number)"
        :class="activeNumber === page.number ? 'active' : ''"
      >
        {{ page.number }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import List from '@/components/layout/List.vue';

export default {
  name: 'Campaign',
  data() {
    return {
      activeNumber: 1,
      isLoaded: false,
    };
  },
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
      'pages',
    ]),
  },
  methods: {
    updateList(pageNumber) {
      this.activeNumber = pageNumber;
      this.retrievePresets({
        campaignId: this.campaignId,
        page: pageNumber,
      });
    },
    ...mapActions([
      'retrievePresets',
      'retrieveCampaign',
    ]),
  },
  components: {
    List,
  },
  mounted() {
    this.retrieveCampaign(this.campaignId);
    this.retrievePresets({
      campaignId: this.campaignId,
      page: 1,
    }).then(() => {
      this.isLoaded = true;
    });
  },
};
</script>

<style lang="scss">
  .pagination {
    list-style: none;
    margin: 1em 0;
    text-align: center;

    li {
      display: inline-block;
      cursor: pointer;
      padding: 0.3em 0.5em 0.1em;
      margin: 0 0.1em;
      background-color: #0090E3;
      color: #ffffff;
      border-radius: 5px;

      &.active {
        background-color: #285DAB;
      }
    }
  }
</style>
