import { cardapi } from './url.js';

const getShowById = async (id) => {
  const response = await fetch(`${cardapi}${id}`);
  const data = await response.json();
  return data;
};
export default getShowById;
