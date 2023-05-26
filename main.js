setTimeout(function() {
    alert('Привет! Добро пожаловать на сайт "Алита: Боевой ангел"!');
  }, 3000);
  
const movieReviews = [
    { title:'Алита: Боевой ангел', review: 'Отличный фильм!' },
    { title: 'Другой фильм', review: 'Очень плохой фильм!' },
    { title: 'Еще один фильм', review: 'Средний фильм.' }
  ];

  movieReviews.forEach(function(review) {
    console.log(review.title + ': ' + review.review);
});
 
 