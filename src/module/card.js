const card = (movies) => {
    const card = document.querySelector('.card')
    movies.array.forEach((movie) => {
        let displayCard = `<div> <img src="${movie.image.original} ${movie.name} `
    card.innerHTML += displayCard;
    });
}