// schemas/adImage.js
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'adImage',
  title: 'Ad Image',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required().error('Image is required'),
    }),
    defineField({
      name: 'url',
      title: 'Redirect URL',
      type: 'url',
      description: 'Optional: Add a URL to redirect when image is clicked',
    }),
  ],
})
