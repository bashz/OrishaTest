import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import OrishaInput from '../OrishaInput.vue'

describe('OrishaInput.vue', () => {
  let wrapper: ReturnType<typeof mount<typeof OrishaInput>>

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    wrapper = mount(OrishaInput, {})
    expect(wrapper.exists()).toBe(true)
  })
})
  