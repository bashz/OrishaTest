import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import OrishaDropdown from '../OrishaDropdown.vue'

describe('OrishaDropdown.vue', () => {
  let wrapper: ReturnType<typeof mount<typeof OrishaDropdown>>

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    wrapper = mount(OrishaDropdown, {})
    expect(wrapper.exists()).toBe(true)
  })
})
  