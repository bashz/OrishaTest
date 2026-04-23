import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import OrishaButton from '../OrishaButton.vue'

describe('OrishaButton.vue', () => {
  let wrapper: ReturnType<typeof mount<typeof OrishaButton>>

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    wrapper = mount(OrishaButton, {})
    expect(wrapper.exists()).toBe(true)
  })
})
  