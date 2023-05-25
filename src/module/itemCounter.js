import { cardapi } from './url.js';

const itemCount = (item) => {
  const count = document.getElementById('count');
  count.innerHTML = `(${item})`;
};
const allShows = async () => {
  const response = await fetch(cardapi);
  const data = await response.json();
  const result = data.slice(0, 10);
  return result.length;
};
export { itemCount, allShows };