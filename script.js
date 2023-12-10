document.addEventListener('DOMContentLoaded', function () {
  const Btn = document.getElementById('fetchDogBtn');
  const ImageContainer = document.getElementById('imageContainer');

  Btn.addEventListener('click', function () {
  
    getRandomDogImage()
      .then(dogImageUrl => {
       
        updateDogImage(dogImageUrl);
      })
      .catch(error => {
        console.error('Error fetching dog image:', error.message);
      });
  });

  function getRandomDogImage() {
    const apiUrl = 'https://dog.ceo/api/breeds/image/random';

   
    return fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        
        const dogImageUrl = data.message;
        return dogImageUrl;
      });
  }

  function updateDogImage(imageUrl) {
    
    const dogImage = document.createElement('img');
    dogImage.src = imageUrl;
    dogImage.alt = 'Random Dog';

    
    while (ImageContainer.firstChild) {
      ImageContainer.removeChild(ImageContainer.firstChild);
    }

    ImageContainer.appendChild(dogImage);
  }
});
