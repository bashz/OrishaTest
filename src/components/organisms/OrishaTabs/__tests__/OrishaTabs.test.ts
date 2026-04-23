import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import OrishaTabs from '../OrishaTabs.vue'

describe('OrishaTabs.vue', () => {
  let wrapper: ReturnType<typeof mount<typeof OrishaTabs>>

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    wrapper = mount(OrishaTabs, {})
    expect(wrapper.exists()).toBe(true)
  })
})
  