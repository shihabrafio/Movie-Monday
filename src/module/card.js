import modal from "./modal.js";

const card = (movies) => {
  const cardContainer = document.querySelector('.card-container');
  movies.forEach((movie) => {
    const displayCard = `
      <div class="card">
        <img src="${movie.image.original}" class="card-img" alt="Show name"/>
        <div class="description">
          <span class="details">${movie.name}</span>
          <div class="likes">
            <i class="bx bx-heart"></i> 
          </div>         
        </div>
        <div class="span">
          <span>2 Likes</span>
        </div>
        <button id="${movie.id}" type="submit" class="cmnt">Comments</button>
      </div>
    `;
    cardContainer.innerHTML += displayCard;
  });

  const commentButtons = document.querySelectorAll('.cmnt');
  commentButtons.forEach((commentButton) => {
    commentButton.addEventListener('click', (e) => {
      const movieId = e.target.id;
      console.log(movieId); // Get the movie ID from the clicked button
      const movieIndex = movies.findIndex((movie) => movie.id === movieId); 
      console.log(movieIndex)// Find the index of the movie in the array based on its ID
      modal(movies, movieIndex); // Call the modal function and pass the movies array and movie index
    });
  });
};



export default card;