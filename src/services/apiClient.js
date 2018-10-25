import fetch from 'isomorphic-fetch';
import config from '../../config';

export default ({ url }) => {
  const request = fetch(`${config.api.url}/${url}`)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    });
  return request;
};
