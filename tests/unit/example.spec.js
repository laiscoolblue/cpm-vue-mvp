import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/layout/Header.vue';

describe('Header.vue', () => {
  it('renders correctly', () => {
    const msg = 'Coolblue Payment Methods';
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.text()).toMatch(msg);
  });
});
