export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(), // 12345678
      date: new Date().toDateString(), // May 01, 2023
      text: "Magna ex officia ut incididunt sunt duis aute esse deserunt ad ex sit.",
      picture: null, //https://www
    },
    {
      id: new Date().getTime() + 1000, // 12345678
      date: new Date().toDateString(), // May 01, 2023
      text: "Anim nisi nulla do occaecat laboris elit elit quis id tempor esseEnim dolor aliqua ipsum duis ipsum in.Quis excepteur officia ad sint esse adipisicing eu sint quis duis sunt quis qui mollit..Dolor do duis fugiat ullamco aliquip ullamco mollit excepteur fugiat tempor deserunt laboris sunt.",
      picture: null, //https://www
    },
    {
      id: new Date().getTime() + 2000, // 12345678
      date: new Date().toDateString(), // May 01, 2023
      text: "Culpa incididunt dolor commodo culpa irure. Do minim dolore ullamco excepteur deserunt nulla est in.Cillum eu Lorem excepteur et deserunt fugiat id et.",
      picture: null, //https://www
    },
  ],
});