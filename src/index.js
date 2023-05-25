import './index.css';
import { shows } from './module/getData.js';
// import { addLike, getLike } from './module/likes';
// import card from './module/card.js';

// const onLoad = ((movie, index) => {
//     const cardLayout = document.querySelector('.card-container');
//     cardLayout.innerHTML = '';
    
//         card(movie, index);
//        getLike();
//     });
 
// //   onLoad();
  
//   document.querySelector('.card-container').addEventListener('click', (e) => {
//     e.preventDefault();
//     if (e.target.classList.contains('bx-heart')) {
//       const index = parseInt(e.target.id[e.target.id.length - 1], 10);
//       addLike(index);
//       onLoad();
//     }
//   });


shows();
