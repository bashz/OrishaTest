import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import OrishaBreadcrumb from '../OrishaBreadcrumb.vue'

describe('OrishaBreadcrumb.vue', () => {
  let wrapper: ReturnType<typeof mount<typeof OrishaBreadcrumb>>

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    wrapper = mount(OrishaBreadcrumb, {})
    expect(wrapper.exists()).toBe(true)
  })
})
  