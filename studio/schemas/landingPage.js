import { FcShop } from 'react-icons/fc'

export default {
    name: 'landingPage',
    title: 'Landing Page',
    type: 'document',
    icon: FcShop,
    fields: [
      {
        name: 'title',
        title: 'Title',
        description: 'The first sentence your customers will read',
        type: 'string'
      },
      {
        name: 'subTitle',
        title: 'Subtitle',
        description: 'Add a description of your services. Keep it short and sweet.',
        type: 'string'
      },
      {
        name: 'heroImage',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        }
      }
    ]
  }
  