export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      {
        name: 'name',
        type: 'string',
      },
      {
        title: 'Approved',
        name: 'approved',
        type: 'boolean',
        description: "Orders won't appear on the calendar without approval"
      },   
      {
        name: 'email',
        type: 'string',
      },
      {
        name: 'order',
        type: 'text',
      },
      {
        name: 'neededBy',
        type: 'string'
      },
      {
        name: 'post',
        type: 'reference',
        to: [
          {type: 'post'}
        ]
      }
    ],
    preview: {
      select: {
        name: 'name',
        order: 'order',
        post: 'post.title'
      },
      prepare({name, order, post}) {
        return {
          title: `${name} on ${post}`,
          subtitle: order
        }
      }
    }
  }
  