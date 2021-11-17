import { HiHome } from 'react-icons/hi'

export default {
    name: 'landingPage',
    title: 'Landing Page',
    type: 'document',
    icon: HiHome,
    fields: [
      {
        name: 'title',
        title: 'Opening Text',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96
        }
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: {type: 'author'}
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'imageTwo',
        title: 'Image 2',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'imageThree',
        title: 'Image 3',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'imageFour',
        title: 'Image 4',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'imageFive',
        title: 'Image 5',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'imageSix',
        title: 'Image 6',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'imageSeven',
        title: 'Image 7',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'imageEight',
        title: 'Image 8',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'imageNine',
        title: 'Image 9',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}]
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime'
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent'
      }
    ],
  
    preview: {
      select: {
        title: 'title',
        author: 'author.name',
        media: 'mainImage'
      },
      prepare(selection) {
        const {author} = selection
        return Object.assign({}, selection, {
          subtitle: author && `by ${author}`
        })
      }
    }
  }
  