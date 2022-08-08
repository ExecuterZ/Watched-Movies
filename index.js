"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: "Всего просмотрено фильмов = " + numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};

let lastFilm = prompt('Какой был один из последний просмотренныых фильмов?', '');
let markLastFilm = prompt('На сколько оцените его?', '');

personalMovieDB.movies = lastFilm + " : " + markLastFilm;
console.log(personalMovieDB);