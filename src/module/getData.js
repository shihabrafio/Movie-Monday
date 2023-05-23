import card from './card.js';

const shows = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const data = await response.json();
  const result = data.slice(40, 60);
  card(result);
};

export default shows;