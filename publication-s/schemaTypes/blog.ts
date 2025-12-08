import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text', // shorter overview
    }),
    defineField({
      name: 'fullDetails',
      title: 'Full Details',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              // Highlight annotation
              {
                name: 'highlight',
                type: 'object',
                title: 'Highlight',
                fields: [
                  {
                    name: 'color',
                    type: 'string',
                    title: 'Highlight Color',
                    options: {
                      list: [
                        { title: 'Light Yellow', value: '#fff9c4' },
                        { title: 'Light Green', value: '#dcedc8' },
                        { title: 'Light Blue', value: '#bbdefb' },
                        { title: 'Light Pink', value: '#f8bbd0' },
                        { title: 'Light Orange', value: '#ffe0b2' },
                      ],
                      layout: 'dropdown',
                    },
                  },
                ],
              },

              // Font color annotation
              {
                name: 'fontColor',
                type: 'object',
                title: 'Font Color',
                fields: [
                  {
                    name: 'color',
                    title: 'Font Color (Hex)',
                    type: 'color'
                  },
                ],
              },

              // ✅ Hyperlink annotation (Added)
              {
                name: 'link',
                type: 'object',
                title: 'Hyperlink',
                fields: [
                  {
                    name: 'href',
                    title: 'URL',
                    type: 'url'
                  },
                  {
                    name: 'openInNewTab',
                    title: 'Open in new tab?',
                    type: 'boolean',
                    initialValue: true
                  }
                ]
              }
            ],
          },
        },

        // Image block
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt text', type: 'string' },
            { name: 'caption', title: 'Caption', type: 'string' },
            {
              name: 'link',
              title: 'Clickable Link',
              type: 'url',
              description: 'Optional: Add a URL to make this image clickable',
            },
          ],
        },
      ],
    }),



    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [

          { title: 'General', value: 'general' },
          { title: 'Product', value: 'product' },
          { title: 'News & Event', value: 'news' },
          { title: 'Featured', value: 'featured' },
          { title: 'Top Read Articles', value: 'topRead' },

        ],
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),

    defineField({
      name: 'authorUrl',
      title: 'Author URL (LinkedIn)',
      type: 'url',
      description: 'Add a link to the author’s LinkedIn or personal profile',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'usernameTags',
      title: 'Username Tags',
      type: 'array',
      of: [{ type: 'string' }], // array of strings
      options: { layout: 'tags' }, // nice UI for tags
    }),
    defineField({
      name: 'publishedAt',

      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'isTopRead',
      title: 'Top Read Article',
      type: 'boolean',
      description: 'Check this to mark the blog as a Top Read Article',
      initialValue: false,
    }),
    defineField({
      name: 'viewCount',
      title: 'View Count',
      type: 'number',
      initialValue: 0,
    }),

  ],
})
