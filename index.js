"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
                        };

let i = 0;
for (i = 0; i<2; i++) {
const a = prompt('Какой был один из просмотренных фильмов?',''),
    b = +prompt('На сколько оцените его?', '');
    if (a === null) {--i;}
    if (a, b == '') {--i;}
    if (b === NaN) {--i;}
    if (a.length > 50) {--i;}
    personalMovieDB.movies[a] = 'оценка = ' + b;}
    console.log(personalMovieDB); 

    if (personalMovieDB.count <10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >=10 && personalMovieDB.count <30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {console.log('Произошла ошибка!');}
