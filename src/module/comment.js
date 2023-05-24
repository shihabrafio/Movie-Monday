import { commenturl } from './url.js';

const postComment = async (data) => {
  await fetch(commenturl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const getComments = async (cmnt) => {
  const getUrl = `?item_id=${cmnt}`;
  const response = await fetch(commenturl + getUrl);
  const data = await response.json();
  return data;
};

export { postComment, getComments };