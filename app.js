// filter
const movies = [
    {name: "Avatar 3D", year: 2008, rating: 9},
    {name: "Titanic 4D", year: 1997, rating: 7},
    {name: "Forsaj 9 3D", year: 2020, rating: 4},
    {name: "Avengers", year: 2012, rating: 6},
]

const mapMovies = movies.map((movie) => {
    // return movie.rating + 1;
    return { name: movie.name, year: movie.year, rating: movie.rating + 1 };
});

console.log(mapMovies);
console.log(movies);

// const numbers = [2, 3, 4, 5];

// const mapNumbers = numbers.map((num) => num**2);

// console.log(mapNumbers);

// numbers.forEach((num) => {
//     numbers.push(num**2);
// });

// console.log(newNumbers);