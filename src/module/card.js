const card = (movies) => {
    const card = document.querySelector('.card-container')
    movies.forEach((movie) => {
        let displayCard = `<div class="card" id="card">
        <img src="${movie.image.original}" class="card-img"/>
        <div class="description">
          <span class="details">${movie.name}</span>
        </div>
        </div>`
       
    card.innerHTML += displayCard;
    });
}

export default card;