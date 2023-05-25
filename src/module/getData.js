import card from './card.js';
import { cardapi, likeurl } from './url.js';

const shows = async () => {
  const response = await fetch(cardapi);
  const data = await response.json();
  const result = data.slice(40, 60);

  const likes = await fetch(likeurl);
  const res = await likes.json();
  card(result, res);
};

export default shows;
