import { FcFilledFilter } from 'react-icons/fc'

export default {
  name: 'category',
  title: 'Categories',
  type: 'document',
  icon: FcFilledFilter,
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
