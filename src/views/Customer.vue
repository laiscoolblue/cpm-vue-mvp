<template>
  <div class="container">
    <h2>Customer</h2>
    <p><strong>Name: </strong> {{ customer.name }}</p>

    <h2>Vouchers</h2>
    <ul class="list">
      <li v-for="item in vouchers" :key="item.id">
        $ {{ item.value }} - of type {{ item.preset.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  computed: mapState([
    'vouchers',
    'customer',
  ]),
  methods: mapActions([
    'retrieveVouchers',
  ]),
  mounted() {
    this.retrieveVouchers(this.customer.id);
  },
};
</script>
