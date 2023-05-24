import card from './card.js';
import { cardapi } from './url.js';

const shows = async () => {
  const response = await fetch(cardapi);
  const data = await response.json();
  const result = data.slice(40, 60);
  card(result);
};

export default shows;