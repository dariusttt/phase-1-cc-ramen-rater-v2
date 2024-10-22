// index.jsb

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

// Add event listener to handle form submission for adding new ramen
const addSubmitListener = () => {
  const newRamenForm = document.getElementById('new-ramen');

  newRamenForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the page from refreshing on form submit

    // Create a new ramen object
    const newRamenObject = {
      name: document.querySelector('#new-name').value,
      restaurant: document.querySelector('#new-restaurant').value,
      image: document.querySelector('#new-image').value,
      rating: document.querySelector('#new-rating').value,
      comment: document.querySelector('#new-comment').value,
    };

    console.log(newRamenObject);

  
    newRamenForm.reset();
  });
};


const displayRamens = async () => {
  //Add code
  const ramenMenuDiv = document.getElementById('ramen-menu');

  // Fetch the ramen data
  const response = await fetch(`http://localhost:3000/ramens`);
  const ramens = await response.json();

  // Display all ramen images
  ramens.forEach((ramen) => {
    const ramenImg = document.createElement('img');
    ramenImg.src = ramen.image;
    ramenImg.alt = ramen.name;
    ramenImg.classList.add('ramen-image');

    
    ramenImg.addEventListener('click', () => {
      handleClick(ramen);
    });

    ramenMenuDiv.appendChild(ramenImg);
  });


  if (ramens.length > 0) {
    handleClick(ramens[0]);
  }
};

const main = () => {
  addSubmitListener();
  displayRamens();
};

main();

//export functions for testing


export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
