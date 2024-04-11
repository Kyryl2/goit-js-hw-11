import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// import { getPhotos } from './js/pixabay-api';

const form = document.querySelector('.js-form');
const input = document.querySelector('.input');
const list = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', onClickBtn);

function onClickBtn(event) {
  event.preventDefault();
  const search = input.value.trim();

  if (!search) {
    list.innerHTML = '';

    event.target.reset();

    return iziToast.error({
      message: 'Поле для введення не має бути порожнім!',
      position: 'topRight',
      timeout: 2000,
      color: 'yellow',
    });
  }

  list.innerHTML = '';
  getPhotos(search);
  //   loader.classList.add('is-visible');
}
function getPhotos(q) {
  const parameters = new URLSearchParams({
    key: '43212506-95870309335e8ebf3ea9c8656',
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${parameters}`, {
    header: {
      'Access-Control-Allow-Origin': 'https://pixabay.com',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(obj => {
      if (obj.hits.length === 0) {
        list.innerHTML = '';

        form.reset();

        iziToast.error({
          message: 'За вашим пошуковим словом, зображень не знайдено!',
          position: 'topRight',
          timeout: 2000,
        });
        return;
      }
      list.innerHTML = createGallaryMarkup(obj.hits);
    })

    .catch(error => console.log(error));
}

function createGallaryMarkup(array) {
  return array
    .map(
      image =>
        `<li class="gallary-item">
        <a href="${image.largeImageURL}"><img src="${image.webformatURL}" alt="${image.tags}"></a>

      </li>`
    )
    .join('');
}
