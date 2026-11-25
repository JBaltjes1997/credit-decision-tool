export const detailsMapping = {
  mappings: {
    properties: {
      id: { type: 'keyword' },
      name: { type: 'text' },
      description: { type: 'text' },
      createdAt: { type: 'date' },
      updatedAt: { type: 'date' },
    },
  },
};
