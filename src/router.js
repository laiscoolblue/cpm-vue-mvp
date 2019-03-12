import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Campaign from './views/Campaign.vue';
import NewVoucher from './views/NewVoucher.vue';
import Customer from './views/Customer.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/campaign/:id',
      name: 'Campaign',
      component: Campaign,
    },
    {
      path: '/issue-voucher/:presetId',
      name: 'New voucher',
      component: NewVoucher,
    },
    {
      path: '/customer',
      name: 'Customer',
      component: Customer,
    },
  ],
});
