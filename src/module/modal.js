const modal = (data, index) => {
  const container = document.querySelector('.content');
  container.innerHTML = `
    <div class="modal-details">
      <img src="${data[index].image.original}" class="modal-img" />
      <h2 class="heading">${data[index].name}</h2>
      <p>${data[index].summary}</p>
    </div>
    <div class="comments">
      <div class="comment-details">
        <h2 class="heading">Comments<span></span></h2>
        ${generateComments(data[index].comments)}
      </div>
    </div>
    <div class="comment-form">
      <form class="">
        <input class="name" type="text" placeholder="Enter your name" />
        <textarea class="text" placeholder="Enter your comment here"></textarea>
        <button class="btn flex">Comment</button>
      </form>
      <i class='bx bx-x'></i>
    </div>`;
};

const nameInput = document.querySelector('.name');
const textInput = document.querySelector('.text');
const generateComments = (name, text) => {
  if (!name || !text) {
    return `<p>No comments available.</p>`;
  }

  let commentsHTML = '';
  name.forEach((nameValue, index) => {
    const commentHTML = `
      <div class="comment">
        <p class="comment-date">${formatDate(new Date())}</p>
        <p class="comment-msg"><strong>${nameValue}:</strong> ${text[index]}</p>
      </div>
    `;
    commentsHTML += commentHTML;
  });
  return commentsHTML;
};


const formatDate = (date) => {
  const options = { month: 'long', year: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};

export default modal;
