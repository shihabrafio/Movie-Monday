const card = (movies) => {
  const card = document.querySelector('.card-container');
  movies.forEach((movie) => {
    const displayCard = `<div class="card" id="card">
        <img src="${movie.image.original}" class="card-img" alt="Show name"/>
        <div class="description">
          <span class="details">${movie.name}</span>
          <div class="likes">
          <i class="bx bx-heart"></i> 
          </div>         
        </div>
        <div class="span"> <span> 2 Likes</span> </div>
        <button id="comments">Comments</button>
        `;

    card.innerHTML += displayCard;
  });
};

export default card;