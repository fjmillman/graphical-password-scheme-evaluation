import axios from 'axios';
import state from '../state';
import getBaseUrl from '../updaters/getBaseUrl';

export default async function setScheme() {
  const apiUrl =
    process.env.NODE_ENV === 'production'
      ? `${getBaseUrl()}api/result`
      : 'http://localhost:9999/api/result';

  await axios
    .get(apiUrl)
    .then(response => {
      state.scheme = response.data % 2 === 0 ? 1 : 2;
    })
    .catch(error => console.error(error.stack));
}
