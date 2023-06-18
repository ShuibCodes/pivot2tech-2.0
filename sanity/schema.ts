import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import course from './schemas/course'
import keyValuePair from './schemas/keyValuePair'
import keyValue from './schemas/keyValue'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, course, blockContent, keyValuePair, keyValue],
}
