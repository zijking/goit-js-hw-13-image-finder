// console.log('apiService.js');

const API_KEY = '19017356-b8756222892cfba3d959da30c';
const BASE_URL = 'https://pixabay.com/api/';
const ON_PAGE = 12;

export default class SearchImgAi {
  constructor() {
    this.page = 1;
    this.searchWord = '';
  }

  searchImg() {
    return fetch(
      `${BASE_URL}\?key=${API_KEY}&q=${this.searchWord}&per_page=${ON_PAGE}&page=${this.page}`,
    ).then(response => response.json());
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchWord;
  }

  set query(newWord) {
    this.searchWord = newWord;
  }
}
