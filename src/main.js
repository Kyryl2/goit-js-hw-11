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
    return iziToast.show({
      title: 'Hey',
      message: 'Please type something',
      color: 'yellow',
      position: 'topRight',
    });
  }

  list.innerHTML = '';
  getPhotos(search);
}
function getPhotos(q) {
  const parameters = new URLSearchParams({
    key: '43312748-d2770da7ff63c643db495a6a3',
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
