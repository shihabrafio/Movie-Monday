import { commenturl } from './url.js';

const allcomment = async (id) => {
  const getUrl = `?item_id=${id}`;
  const response = await fetch(`${commenturl}${getUrl}`);
  const data = await response.json();
  return data;
};
module.exports = allcomment;