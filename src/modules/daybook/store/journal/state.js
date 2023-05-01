export default () =>({
    isLoading:true,
    entries:[
        {
            id: new Date().getTime(), // 12345678
            date: new Date().toDateString, // May 01, 2023
            text: "Magna ex officia ut incididunt sunt duis aute esse deserunt ad ex sit.",
            picture: null //https://www
        },
        {
            id: new Date().getTime() + 1000, // 12345678
            date: new Date().toDateString, // May 01, 2023
            text: "Anim nisi nulla do occaecat laboris elit elit quis id tempor esse.",
            picture: null //https://www
        },
        {
            id: new Date().getTime() + 2000, // 12345678
            date: new Date().toDateString, // May 01, 2023
            text: "Culpa incididunt dolor commodo culpa irure.",
            picture: null //https://www
        }
    ]
})