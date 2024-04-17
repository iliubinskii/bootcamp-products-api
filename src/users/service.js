export default {
  getUsers: async () => {
    // TODO: Get from mongodb
    return [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
    ];
  },
}
