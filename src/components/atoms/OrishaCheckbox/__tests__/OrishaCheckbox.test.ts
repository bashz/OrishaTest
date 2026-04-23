import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import OrishaCheckbox from '../OrishaCheckbox.vue'

describe('OrishaCheckbox.vue', () => {
  let wrapper: ReturnType<typeof mount<typeof OrishaCheckbox>>

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    wrapper = mount(OrishaCheckbox, {})
    expect(wrapper.exists()).toBe(true)
  })
})
  