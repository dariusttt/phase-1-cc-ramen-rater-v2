// index.js
 'http://localhost:3000/ramens'
// Callbacks
const handleClick = (ramen) => {
  const img = document.querySelector('.detail-image');
  img.src = ramen.image;
  img.alt = ramen.name;

  const ramenName = document.querySelector('.name');
  ramenName.textContent = ramen.name;

  const ramenRestaurant = document.querySelector('.restaurant');
  ramenRestaurant.textContent = ramen.restaurant;

  const ratingDisplay = document.querySelector('#rating-display');
  ratingDisplay.innerText = ramen.rating;

  const commentDisplay = document.querySelector('#comment-display');
  commentDisplay.innerText = ramen.comment;
};


const addSubmitListener = () => {
  const newRamenForm = document.getElementById('new-ramen');

  newRamenForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the page from refreshing on form submit

    // Create new ramen object
    const newRamenObject = {
      name: document.querySelector('#new-name').value,
      restaurant: document.querySelector('#new-restaurant').value,
      image: document.querySelector('#new-image').value,
      rating: document.querySelector('#new-rating').value,
      comment: document.querySelector('#new-comment').value,
    };

    console.log(newRamenObject);
  });
}
const displayRamens = async() => {
  //Add code
  const ramenMenuDiv = document.getElementById('ramen-menu');

  // Fetch ramen data (using a stubbed version for testing purposes)
  const response = await fetch('localhost:3000/ramens'); 
  const ramens = await response.json();


    // Display all ramen images
    ramens.forEach((ramen) => {
      const  ramenImg = document.createElement('img');
      ramenImg.src = ramen.image;
      ramenImg.alt = ramen.name;
      
      img.classList.add('ramen-image');
      img.addEventListener('click', () => {
        document.querySelector('.detail-image').src = ramen.image;
        document.querySelector('.name').textContent = ramen.name;
        document.querySelector('.restaurant').textContent = ramen.restaurant;
        ratingDisplay.textContent = ramen.rating;
        commentDisplay.textContent = ramen.comment;
    });
      ramenMenuDiv.appendChild(Img);
  })
  
      if (ramens.length > 0) {
        const firstRamen = ramens[0];
        document.querySelector('.detail-image').src = firstRamen.image;
        document.querySelector('.name').textContent = firstRamen.name;
        document.querySelector('.restaurant').textContent = firstRamen.restaurant;
        ratingDisplay.textContent = firstRamen.rating;
        commentDisplay.textContent = firstRamen.comment;
      }
    }

    newRamenForm.reset();

const main = () => {
  addSubmitListener();
  displayRamens()
}

main();

// Export functions for testing

export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
}
