import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'publication',
    title: 'Publication',
    type: 'document',
    fields: [
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [

                    { title: 'All', value: 'all' },
                    { title: 'Case Study', value: 'caseStudy' },
                    { title: 'White Paper', value: 'whitePaper' },
                    { title: 'Ebook', value: 'ebook' },

                ],
            },
        }),
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
            name: 'challengeTitle',
            title: 'Challenge Title',
            type: 'string',
        }),
        defineField({
            name: 'challenges',
            title: 'Challenges',
            type: 'array',
            of: [{ type: 'string' }], // array of strings
            options: { layout: 'tags' }, // nice UI for tags
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
        }),


    ],
})