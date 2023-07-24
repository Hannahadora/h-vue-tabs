import { mount } from '@vue/test-utils'
import Tab from '../components/Tab.vue'

describe('Tabs', () => {
  it('check if it has a tabs props', () => {
    const wrapper = mount(Tab, { props: { tabs: [] } });
    expect(wrapper.props('tabs')).toEqual([]); // Use props('tabs') to access the 'tabs' prop value
  })
  it('check if it has a activeTabColor props', () => {
    const wrapper = mount(Tab, { props: { activeTabColor: '' } });
    expect(wrapper.props('activeTabColor')).toEqual('');
  })
})