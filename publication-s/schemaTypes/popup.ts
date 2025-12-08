import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'popup',
  title: 'Popup Content',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H4', value: 'h4' },
            { title: 'H3', value: 'h3' },
            { title: 'H2', value: 'h2' },
            { title: 'H1', value: 'h1' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
              // ✅ Font color annotation added here
              {
                name: 'fontColor',
                type: 'object',
                title: 'Font Color',
                fields: [
                  {
                    name: 'color',
                    title: 'Font Color (Hex)',
                    type: 'color', // color input box (hex picker)
                  },
                ],
              },
            ],
          },
        },
      ],
      description: 'Rich text content for popup (supports bold, italic, color, and links)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'External link (e.g., Learn more, View details)',
    }),
  ],
  preview: {
    select: {
      title: 'text.0.children.0.text',
      media: 'image',
      subtitle: 'link',
    },
  },
})
