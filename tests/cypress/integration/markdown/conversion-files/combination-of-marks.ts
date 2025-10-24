export const name = 'Combination Of Marks'

export const expectedInput = `
***bold italic***

**bold *nested-italic***

++**bold underline**++

++*italic underline*++

++***bold italic underline***++

++underline **bold**++
`.trim()

export const expectedOutput = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'bold italic',
          marks: [{ type: 'bold' }, { type: 'italic' }],
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'bold ',
          marks: [{ type: 'bold' }],
        },
        {
          type: 'text',
          text: 'nested-italic',
          marks: [{ type: 'italic' }, { type: 'bold' }],
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'bold underline',
          marks: [{ type: 'bold' }, { type: 'underline' }],
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'italic underline',
          marks: [{ type: 'italic' }, { type: 'underline' }],
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'bold italic underline',
          marks: [{ type: 'bold' }, { type: 'italic' }, { type: 'underline' }],
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'underline ',
          marks: [{ type: 'underline' }],
        },
        {
          type: 'text',
          text: 'bold',
          marks: [{ type: 'bold' }, { type: 'underline' }],
        },
      ],
    },
  ],
}
