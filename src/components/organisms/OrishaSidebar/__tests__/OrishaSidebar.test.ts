import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import OrishaSidebar from '../OrishaSidebar.vue'

describe('OrishaSidebar.vue', () => {
  let wrapper: ReturnType<typeof mount<typeof OrishaSidebar>>

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    wrapper = mount(OrishaSidebar, {})
    expect(wrapper.exists()).toBe(true)
  })
})
  