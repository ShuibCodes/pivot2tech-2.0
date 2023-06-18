import { defineType } from 'sanity'
export default defineType({
    title: 'KeyValue',
    name: 'keyValue',
    type: 'object',
    fields: [
      {
        title: 'Key',
        name: 'key',
        type: 'string'
      },
      {
        title: 'Value',
        name: 'value',
        type: 'string'
      }
    ]
  })
