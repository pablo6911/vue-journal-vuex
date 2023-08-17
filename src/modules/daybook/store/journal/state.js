export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(), //1234567890
      date: new Date().toDateString(), // sat 23, julio
      text: "Excepteur sit eiusmod reprehenderit ut ex duis et elit eiusmod irure adipisicing aliquip.",
      picture: null,
    },
    {
      id: new Date().getTime() + 1000, //1234567890
      date: new Date().toDateString(), // sat 23, julio
      text: "Elit exercitation amet in ipsum nisi est eiusmod deserunt deserunt laboris amet.",
      picture: null,
    },
    {
      id: new Date().getTime(), //1234567890
      date: new Date().toDateString(), // sat 23, julio
      text: "Dolore aliqua do et esse duis.",
      picture: null,
    },
  ],
});
