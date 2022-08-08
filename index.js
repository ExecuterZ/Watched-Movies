"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
console.log('Всего просмотрено фильмов = ' + numberOfFilms);

const personalMovieDB = {
    count: "Всего просмотрено фильмов =" + numberOfFilms,
    movies: "",
    actors: "",
    genres: [],
    privat: false
};