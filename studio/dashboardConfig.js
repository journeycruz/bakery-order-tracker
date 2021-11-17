export default {
  widgets: [
    {
      name: "project-info",
      options: {
        data: [
            {
              title: 'Source Code',
              value: 'https://github.com/journeycruz/bakery-order-tracker',
              category: 'Code'
            },
            {
              title: 'Your Website',
              value: 'https://next-js-blog-with-comments-nyif.vercel.app/',
              category: 'apps'
            }
          ]
      },
      layout: {
        title: "Your links",
        width: "large",
        height: "small",
      },
    },
    {
      name: "project-users",
      layout: {
        width: "small",
        height: "small",
      },
    },
  ],
};
