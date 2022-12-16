
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
const numberOfFilms = +prompt("How many films have you seen?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/*const a = prompt("One of the last movies you watched?", ""),
      b = prompt("How much would you rate it?", ""),
      c = prompt("One of the last movies you watched?", ""),
      d = prompt("How much would you rate it?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;*/

for (let i = 0; i < 2; i++) {
//let i = 0;
//do {
//while (i<2) {
    let a, b;
    a = prompt("Один из последних просмотренных фильмов?", "");
    b = +prompt("На сколько оцените его?", "");

    if ( a != null && b != null && a.length != "" && b.length != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("Done!");

    } else {
        console.log("Error!");
        i--;
    }
//   i++;     
}
//} while (i < 2);

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);