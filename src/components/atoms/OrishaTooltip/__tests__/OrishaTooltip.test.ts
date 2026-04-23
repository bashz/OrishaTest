import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import OrishaTooltip from '../OrishaTooltip.vue'

describe('OrishaTooltip.vue', () => {
  let wrapper: ReturnType<typeof mount<typeof OrishaTooltip>>

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    wrapper = mount(OrishaTooltip, {})
    expect(wrapper.exists()).toBe(true)
  })
})
  