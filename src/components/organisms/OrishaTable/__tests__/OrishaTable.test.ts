import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import OrishaTable from '../OrishaTable.vue'

describe('OrishaTable.vue', () => {
  let wrapper: ReturnType<typeof mount<typeof OrishaTable>>

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    wrapper = mount(OrishaTable, {})
    expect(wrapper.exists()).toBe(true)
  })
})
  