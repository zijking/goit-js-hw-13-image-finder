console.log('apiService.js');

const API_KEY = '19017356-b8756222892cfba3d959da30c';
const BASE_URL = 'https://pixabay.com/api/';

export default function searchImg(searchWord) {
  return fetch(`${BASE_URL}\?key=${API_KEY}&q=${searchWord}`).then(response =>
    response.json(),
  );
}
