export default {
    name: 'order',
    type: 'document',
    title: 'Orders',
    fields: [
      {
        name: 'name',
        type: 'string',
      }, 
      {
        name: 'phoneNumber',
        type: 'number',
        readOnly: true,
      },
      {
        name: 'alternatePhone',
        type: 'number',
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
        name: 'scheduleOrder',
        type: 'date',
        options: {
          dateFormat: 'MMMM DD, yyyy',
          calendarTodayLabel: 'Today'
        }
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
          title: `${name} ordered ${post}`,
          subtitle: order
        }
      }
    }
  }
  