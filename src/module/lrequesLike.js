import shows from './getData.js';

const requestLikes = async (url, id) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  shows();
};

requestLikes();

export default requestLikes;