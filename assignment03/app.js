

const dbx = new Dropbox.Dropbox({ accessToken: 'YOUR_ACCESS_TOKEN' });

dbx.filesDownload({ path: '/data.json' })
  .then(function(response) {
    const reader = new FileReader();
    reader.readAsText(response.fileBlob);
    reader.onloadend = function() {
      const movieData = JSON.parse(reader.result);
      displayMovies(movieData);
    }
  })
  .catch(function(error) {
    console.error(error);
  });

function displayMovies(movieData) {
  const movieList = document.getElementById("movie-list");
  movieData.forEach(movie => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    movieCard.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <h2>${movie.title}</h2>
      <p>Genre: ${movie.genre}</p>
      <p>Year: ${movie.year}</p>
      <p>Rating: ${movie.rating}</p>
      <p>Language: ${movie.language}</p>
      <p>Caste: ${movie.caste}</p>
      <p>Budget: ${movie.budget}</p>
    `;
    movieList.appendChild(movieCard);
  });
}

function filterMovies() {
  const genreFilter = document.getElementById("genre-dropbox").value;
  const yearFilter = document.getElementById("year-dropbox").value;
  const ratingFilter = document.getElementById("rating-dropbox").value;
  const languageFilter = document.getElementById("language-dropbox").value;

  dbx.filesDownload({ path: '/data.json' })
    .then(function(response) {
      const reader = new FileReader();
      reader.readAsText(response.fileBlob);
      reader.onloadend = function() {
        const movieData = JSON.parse(reader.result);

        const filteredMovies = movieData.filter(movie => {
          if (genreFilter && movie.genre !== genreFilter) {
            return false;
          }
          if (yearFilter && movie.year !== yearFilter) {
            return false;
          }
          if (ratingFilter && movie.rating !== ratingFilter) {
            return false;
          }
          if (languageFilter && movie.language !== languageFilter) {
            return false;
          }
          return true;
        });

        displayMovies(filteredMovies);
      }
    })
    .catch(function(error) {
      console.error(error);
    });
}


