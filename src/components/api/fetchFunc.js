export const getFetchCall = function (url, type = 'json') {
  return fetch(url)
  .then(res => res.json())
    .catch((error) => {
      throw error;
    });
};