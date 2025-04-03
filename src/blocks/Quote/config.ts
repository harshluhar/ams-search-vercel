import { Block } from 'payload';

export const Quote: Block = {
  slug: 'quote',
  fields: [
    {
      name: 'quotes',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
        {
          name: 'author',
          type: 'text',
        },
      ],
    },
  ],
};
