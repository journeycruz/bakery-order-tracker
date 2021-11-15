export default {
    name: 'comment',
    type: 'document',
    title: 'Comment',
    fields: [
      {
        name: 'name',
        type: 'string',
      },
      {
        title: 'Approved',
        name: 'approved',
        type: 'boolean',
        description: "Comments won't show on the site without approval"
      },   
      {
        name: 'email',
        type: 'string',
      },
      {
        name: 'comment',
        type: 'text',
      },
      {
        title: "Rating",
        name: "rating",
        type: "string", // Required
        description: "Customer's Rating",
        options: {
          stars: 5, // Optional. Default 5.
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
        comment: 'comment',
        post: 'post.title'
      },
      prepare({name, comment, post}) {
        return {
          title: `${name} on ${post}`,
          subtitle: comment
        }
      }
    }
  }
  