import { HiCollection } from 'react-icons/hi'

export default {
  name: 'category',
  title: 'Categories',
  type: 'document',
  icon: HiCollection,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}
