import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import OrishaSegmentedControl from '../OrishaSegmentedControl.vue'

describe('OrishaSegmentedControl.vue', () => {
  let wrapper: ReturnType<typeof mount<typeof OrishaSegmentedControl>>

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    wrapper = mount(OrishaSegmentedControl, {})
    expect(wrapper.exists()).toBe(true)
  })
})
  