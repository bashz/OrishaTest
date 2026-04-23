import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import OrishaBadge from '../OrishaBadge.vue'

describe('OrishaBadge.vue', () => {
  let wrapper: ReturnType<typeof mount<typeof OrishaBadge>>

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    wrapper = mount(OrishaBadge, {})
    expect(wrapper.exists()).toBe(true)
  })
})
  