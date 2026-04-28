import { HstVue } from '@histoire/plugin-vue'
import { defineConfig } from 'histoire'

export default defineConfig({
  setupFile: '/src/histoire.setup.ts',
  plugins: [HstVue()],
  tree: {
    groups: [
      {
        id: 'non atomic',
        title: '', // No toggle
      },
      {
        id: 'atoms',
        title: 'Atoms', // No toggle
      },
      {
        id: 'molecules',
        title: 'Molecules', // No toggle
      },
      {
        id: 'organisms',
        title: 'Organisms', // No toggle
      },
    ],
  },
})
