import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import OrishaAvatar from '../OrishaAvatar.vue'

describe('OrishaAvatar.vue', () => {
  let wrapper: ReturnType<typeof mount<typeof OrishaAvatar>>

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    wrapper = mount(OrishaAvatar, {})
    expect(wrapper.exists()).toBe(true)
  })
})
  