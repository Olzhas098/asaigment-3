// использования массивов и цикла forEach
const movieReviews = [
  { title: 'Алита: Боевой ангел', review: 'Отличный фильм!' },
  { title: 'Другой фильм', review: 'Очень плохой фильм!' },
  { title: 'Еще один фильм', review: 'Средний фильм.' }
];
movieReviews.forEach(function(review) {
  console.log(review.title + ': ' + review.review);
});
//  использования объекта
const movieDetails = {
  title: 'Алита: Боевой ангел',
  year: 2019,
  director: 'Роберт Родригес',
  genre: 'фантастика',
  duration: '122 минуты'
};

// Вывод информации о фильме на страницу
const movieInfo = document.createElement('div');
movieInfo.innerHTML = `
  <h2>${movieDetails.title}</h2>
  <p><strong>Год выпуска:</strong> ${movieDetails.year}</p>
  <p><strong>Режиссер:</strong> ${movieDetails.director}</p>
  <p><strong>Жанр:</strong> ${movieDetails.genre}</p>
  <p><strong>Длительность:</strong> ${movieDetails.duration}</p>
`;

document.querySelector('.container').appendChild(movieInfo);

//  использования setTimeout
setTimeout(function() {
  alert('Привет! Добро пожаловать на сайт "Алита: Боевой ангел"!');
}, 3000);
var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});
$(document).ready(function(){
  $('.carousel').carousel({
    interval: 4000, // время переключения слайдов в миллисекундах
    pause: 'hover', // остановка переключения при наведении курсора
    wrap: true // зацикливание карусели
  })
})
const browserSync = require('browser-sync');

// Configure Browser Sync
browserSync({
  server: {
    baseDir: './',
  },
  files: ['./*.html'],
});



