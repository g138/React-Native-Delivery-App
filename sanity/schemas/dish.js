import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish ',
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
      name: 'price',
      title: 'Price of dish in €',
      type: 'number',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of the Dish',
    }),
  ],
})
