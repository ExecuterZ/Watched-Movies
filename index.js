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

for (let i = 0; i<2; i++) {
const a = prompt('Какой был один из просмотренных фильмов?',''),
    b = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[a] = 'оценка = ' + b;}
console.log(personalMovieDB); 