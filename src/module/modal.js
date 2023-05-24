const modal = (data, index) => {
  const container = document.querySelector('.content');
  container.innerHTML = `
    <div class="modal-details">
    <img src="${data[index].image.original}" class="modal-img" />
      <h2 class="heading">${data[index].name}</h2>
      <p>
        ${data[index].summary}
      </p>
    </div>
    <div class="comments">
      <div class="comment-details">
        <h2 class="heading">Comments <span></span></h2>
  
        <div class="comment">
          <p class="comment-date">May 2023 </p>
        <p class="comment-msg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, quasi.</p>
        </div>
  
      </div>
    </div>
  
    <div class="comment-form">
      <form class="">
        <input type="text" placeholder="Enter your name" />
        <textarea placeholder="Enter your comment here"></textarea>
        <button type="submit" class="btn flex">Comment</button>
      </form>
      <i class='bx bx-x'></i>
    </div>`;
};

export default modal;