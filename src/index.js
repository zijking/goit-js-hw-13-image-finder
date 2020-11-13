import './sass/main.scss';
import './js/apiService';

import SearchApi from './js/apiService';
import imgCardTem from './templetes/img-card.hbs';
import debounce from 'lodash.debounce';

const searchApi = new SearchApi();

const listEl = document.querySelector('.js-gallery');
const formEl = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('.js-load-more');

formEl.addEventListener('input', debounce(searchImg, 500));
loadMoreBtn.addEventListener('click', loadMoreImg);

function renderListImg(listImg) {
  listEl.insertAdjacentHTML('beforeend', imgCardTem(listImg));
}

async function searchImg(e) {
  resetGalery();
  searchApi.query = formEl.elements.query.value;
  const rez = await searchApi.searchImg();

  renderListImg(rez.hits);
}

async function loadMoreImg() {
  searchApi.incrementPage();
  const rez = await searchApi.searchImg();
  renderListImg(rez.hits);

  // console.log(document.body.scrollHeight);
  // window.scrollTo(0, );
  setTimeout(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
    // console.log('scroll');
  }, 700);
}

function resetGalery() {
  // formEl.elements.query.value = '';
  listEl.innerHTML = '';
  searchApi.resetPage();
}
