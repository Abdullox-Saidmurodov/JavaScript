
const movies = [
    {name: "Avatar", likes: 456},
    {name: "Harry Poter", likes: 484},
    {name: "Titanic", likes: 987},
    {name: "Stive Jobs", likes: 156},
    {name: "Sherlock", likes: 574},
]

movies.forEach((movie) => {
    console.log(`Kino nomi ${movie.name}🎥, Likelar: ${movie.likes}💖`);
})