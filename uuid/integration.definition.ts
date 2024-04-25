import { IntegrationDefinition, z } from '@botpress/sdk'
import { name, integrationName } from './package.json'

export default new IntegrationDefinition({
  name: integrationName ?? name,
  title: 'UUID',
  description: 'This integration allows you to create unique IDs using the UUID library.',
  version: '0.2.0',
  icon: 'logo.svg',
  readme: 'hub.md',
  configuration: { 
    schema: z.object({}) 
  },
  channels: {},
  actions: {
    generateId: {
      title: 'Generate ID',
      description: 'Generates a unique ID',
      input: {
        schema: z.object({
          version: z.string().describe('Currently only V1 and V4 are accepted. V1 generates an ID using a Timestamp while V4 uses random number generation. V4 is defaulted.').optional()
        })
      },
      output: {
        schema: z.object({
          id: z.string()
        })
      },
    }
  }
})
