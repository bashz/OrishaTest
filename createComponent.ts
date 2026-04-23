import fs from 'fs'
import path from 'path'

interface ComponentOptions {
  name: string
  directory?: string
}

export function scaffoldComponent(options: ComponentOptions): void {
  const { name, directory } = options
  const atomic = {
    atoms: 'a',
    molecules: 'm',
    organisms: 'o',
  }
  let directoryPath = './src/components'
  let classModifier = 'c'

  if (Object.keys(atomic).includes(directory)) {
    directoryPath = path.join(directoryPath, directory)
    classModifier = atomic[directory as keyof typeof atomic]
  }

  // Create component directory
  const componentDir = path.join(directoryPath, `Orisha${name}`)
  const testDir = path.join(componentDir, '__tests__')
  const storyDir = path.join(componentDir, '__stories__')

  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(storyDir, { recursive: true })
    fs.mkdirSync(testDir, { recursive: true })
  }

  // Component template
  const vueTemplate = `<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Change Me')
</script>

<template>
  <div class="orisha-${classModifier}-${name.toLowerCase()}">
    <h1 class="orisha-${classModifier}-${name.toLowerCase()}__title">{{ title }}</h1>
  </div>
</template>



<style lang="scss">
@use './variables' as ${name.toLowerCase()}

.orisha-${classModifier}-${name.toLowerCase()} {
  /* Add component styles here */
  @media (prefers-color-scheme: dark) {
  }

  @media (hover: hover) {
  }

  @media (min-width: 1024px) {
  }
}
</style>
`

  // Index file template
  const indexContent = `export { default } from './Orisha${name}.vue'
`

  // Test file template
  const testContent = `import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Orisha${name} from '../Orisha${name}.vue'

describe('Orisha${name}.vue', () => {
  let wrapper: ReturnType<typeof mount<typeof Orisha${name}>>

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders correctly', () => {
    wrapper = mount(Orisha${name}, {})
    expect(wrapper.exists()).toBe(true)
  })
})
  `

  // Story file template
  const storyContent = `<script lang="ts" setup>
import Orisha${name} from '../Orisha${name}.vue'
</script>

<template>
  <Story group="${directory}" title="${name}">
    <Variant>
      <Orisha${name}/>
    </Variant>
  </Story>
</template>
  `

  // Write files
  fs.writeFileSync(path.join(componentDir, `Orisha${name}.vue`), vueTemplate)
  fs.writeFileSync(path.join(componentDir, 'index.ts'), indexContent)
  fs.writeFileSync(
    path.join(componentDir, '_variables.scss'),
    '// add component specific var here\n',
  )
  fs.writeFileSync(path.join(testDir, `Orisha${name}.test.ts`), testContent)
  fs.writeFileSync(path.join(storyDir, `Orisha${name}.story.vue`), storyContent)

  console.log(`Component "${name}" scaffolded successfully at ${componentDir}`)
}

const componentName = process.argv[2] || 'MyComponent'
const componentDicrectory = process.argv[3] || ''
scaffoldComponent({ name: componentName, directory: componentDicrectory })

// usage: yarn scaffold:component MyComponent [atoms|molecules|organisms]
