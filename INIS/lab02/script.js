let personalMovieDB = {
    privat: false,
    movies: {
        Barbi: 10,
        Batman: 7,
        HomeAlone: 9
    }
}

function showMovies(movieDB) {
    if (!movieDB.privat) {
        let table = document.createElement('table');
        table.innerHTML = `
            <tr>
                <th>Название фильма</th>
                <th>Оценка</th>
            </tr>
        `;
        for (let movie in movieDB.movies) {
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${movie}</td>
                <td>${movieDB.movies[movie]}</td>
            `;
            table.appendChild(row);
        }
        document.body.appendChild(table);
    }
}

showMovies(personalMovieDB);