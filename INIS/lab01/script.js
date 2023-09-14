let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {}
}

for (let i = 0; i < 2; i++) {
    let movieTitle = prompt('Один из последних просмотренных фильмов?', '');
    let movieRating = prompt('На сколько оцените его?', '');
    if (movieTitle !== null && movieTitle !== '' && movieTitle.length <= 50 && movieRating !== null && movieRating !== '') {
        personalMovieDB.movies[movieTitle] = movieRating;
    } else {
        alert('Пожалуйста, введите корректные данные.');
        i--;
    }
}

console.log(personalMovieDB);