<template>
  <v-layout>
    <v-container>
      <v-card>
        <v-layout column>
          <v-flex>
            <v-container class="py-3">
              <h2 class="blue--text text--darken-4">Coolblue Payment Methods</h2>
            </v-container>
          </v-flex>
          <v-flex>
            <v-layout row wrap>
              <!-- CAMPAIGN LIST -->
              <v-flex xs12 md3>
                <v-container tag="p" class="py-2 caption grey--text">
                  Campaign
                  <span :v-if="campaigns.length"> ({{campaigns.length}})</span>
                </v-container>
                <v-divider style="border-width: 2px 0 0"></v-divider>
                <List :list="campaigns" type="campaign" class="border"/>
                <p v-if="isLoaded && !campaigns.length">No campaings found :(</p>
              </v-flex>
              <!-- PRESET LIST -->
              <v-flex>
                <v-container tag="p" class="py-2 caption grey--text">Prest</v-container>
                <v-divider style="border-width: 2px 0 0"></v-divider>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </v-layout>
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

<style lang="scss">
.border {
  border-right: 6px #eee solid;
}
</style>
