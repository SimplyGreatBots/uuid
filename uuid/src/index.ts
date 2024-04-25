import * as botpress from '.botpress'
import { v1 as uuidv1, v4 as uuidv4 } from 'uuid';

type GenerateIdOutput = botpress.actions.generateId.output.Output

export default new botpress.Integration({
  register: async () => {},
  unregister: async () => {},
  actions: {
    generateId: async (args): Promise<GenerateIdOutput> => {
      let uniqueId =''
      args.logger.forBot().info('Generating ID using Version: ', args.input.version)
      
      if (args.input.version === "V1"){
        uniqueId = uuidv1()
      }
      else if (args.input.version === "V4"){
        uniqueId = uuidv4()
      } 
      else {
        args.logger.forBot().warn('Currently only V1 and V4 are available. ID generated has been defaulted to V4.')
        uniqueId = uuidv4()
      }
      
      return { id: uniqueId }
    }
  },
  channels: {},
  handler: async () => {},
})
