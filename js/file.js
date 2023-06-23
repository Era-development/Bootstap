/* рейтинг в карточке */
const hearts = document.querySelectorAll('.card-star');

hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    heart.classList.toggle('star-active');
  })
})