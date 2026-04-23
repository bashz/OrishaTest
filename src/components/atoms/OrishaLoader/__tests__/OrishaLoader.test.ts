import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import OrishaLoader from '../OrishaLoader.vue'

describe('OrishaLoader.vue', () => {
  let wrapper: ReturnType<typeof mount<typeof OrishaLoader>>

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    wrapper = mount(OrishaLoader, {})
    expect(wrapper.exists()).toBe(true)
  })
})
  