export const popup = async (movies) => {
    const pop = document.querySelector('.popup-wrapper');
    movies.forEach((movie) => {
      const displayCard = `
        <div id="popup-window">
          <span id="close-button">
            <i id="x-button" class="fas fa-times-circle"></i>
          </span>
          <div class="popup-image">
            <img class="movie-image" src="${movie.image.original}" />
          </div>
          <div class="des">
            <h3 class="movie-name">${movie.name}</h3>
            <p class="summary">${movie.description}</p>
            <h4>Comments</h4>
            <span id="comment-counter">(2)</span>
            <div id="comments-wrapper">
              <ul id="table-body">
                <li>asd</li>
                <tr>
                  <td>date</td>
                  <td>name</td>
                  <td>textarea</td>
                </tr>
              </ul>
            </div>
            <form id="comment-form">
              <div>
                <input
                  id="username"
                  type="text"
                  placeholder="Your name"
                  maxlength="30"
                  required
                />
              </div>
              <div>
                <textarea
                  id="insights"
                  name="comment"
                  placeholder="Your insight"
                  maxlength="80"
                  required
                ></textarea>
              </div>
              <button id="submit-button" type="submit">Comment</button>
            </form>
          </div>
        </div>
      `;
  
      pop.innerHTML += displayCard;
  
      const cmntbtn = document.querySelectorAll('.comments');
      cmntbtn.forEach((button) => {
        button.addEventListener('click', async (event) => {
          event.preventDefault();
          const name = document.querySelector('#username').value;
          const comments = document.querySelector('#insights').value;
          const movieTitle = document.querySelector('.movie-name');
          const movieId = movieTitle.dataset.id;
          if (name !== '' || comments !== '') {
            giveComments({ movieId, name, comments });
            const newCommentRow = document.createElement('li');
            newCommentRow.textContent = `${new Date().toISOString().slice(0, 10)} ${name}: ${comments}`;
            commentTable.appendChild(newCommentRow);
            commentForm.reset();
          }
        });
      });
    });
  };  