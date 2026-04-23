import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import OrishaRadio from '../OrishaRadio.vue'

describe('OrishaRadio.vue', () => {
  let wrapper: ReturnType<typeof mount<typeof OrishaRadio>>

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    wrapper = mount(OrishaRadio, {})
    expect(wrapper.exists()).toBe(true)
  })
})
  