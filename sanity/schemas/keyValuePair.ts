import { defineType } from 'sanity'
import keyValue from './keyValue'


  export default defineType({
    title: 'KeyValue Array',
    name: 'keyValueArray',
    type: 'array',
    of: [{ type: 'keyValue' }],
  })
