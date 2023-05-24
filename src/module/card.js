import modal from './modal.js';

const card = (movies) => {
  const card = document.querySelector('.card-container');
  movies.forEach((movie, index) => {
    const displayCard = `<div class="card" id="card">
        <img src="${movie.image.original}" class="card-img" alt="Show name"/>
        <div class="description">
          <span class="details">${movie.name}</span>
          <div class="likes">
          <i class="bx bx-heart"></i> 
          </div>         
        </div>
        <div class="span"> <span> 2 Likes</span> </div>
        <button id="comments" data-id="${index}">Comments</button>
        `;
    card.innerHTML += displayCard;
  });
  const popUp = document.querySelectorAll('#comments');
  popUp.forEach((pop) => {
    pop.addEventListener('click', async (e) => {
      const modals = document.querySelector('.modal');
      const contents = document.querySelector('.content');
      modals.classList.remove('hidden');
      contents.classList.add('active');
      await modal(movies, e.target.dataset.id);
      const closeBtn = document.querySelector('.bx-x');
      closeBtn.addEventListener('click', () => {
        modals.classList.add('hidden');
        contents.classList.remove('active');
      });
    });
  });
};
export default card;