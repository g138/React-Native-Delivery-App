import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule * Rule.max(280),
    }),
    defineField({
      name: 'restaurant',
      title: 'Restaurants',
      type: 'number',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'resturant',
            },
          ],
        },
      ],
    }),
  ],
})
