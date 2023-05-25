import { likeurl } from './url.js';

const addLike = async (index) => {
    const response = await fetch(likeurl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            item_id: `${index}`,
        }),
    });

    const data = await response.text();
    return data;
};

const getLike = async (index) => {
    const response = await fetch(likeurl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    data.forEach((element) => {
        if (parseInt(element.item_id, 10) === index) {
            const likes = document.querySelector(`#likes-${index}`);
            likes.innerHTML = `${element.likes} likes`;
        }
    });
};

export { addLike, getLike}