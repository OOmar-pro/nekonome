import { mount } from '@vue/test-utils'
import LibraryPage from '@/views/LibraryPage.vue'

describe('LibraryPage.vue', () => {
  it('renders tab 1 LibraryPage', () => {
    const wrapper = mount(LibraryPage)
    expect(wrapper.text()).toMatch('Library page')
  })
})
