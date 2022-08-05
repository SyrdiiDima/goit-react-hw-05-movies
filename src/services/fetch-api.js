const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '407c6c5ac7b97eafb7da884568d7dfc2';

export const fetchTrendMovies = () => {
  return fetch(`${BASE_URL}trending/movie/day?api_key=${KEY}`)
    .then(responce => responce.json())
    .then(data => {
      const movies = data.results.map(mov => {
        const movie = {
          id: mov.id,
          title: mov.title,
        };
        return movie;
      });
      return movies;
    });
};

export const fetchMovieWithId = id => {
  return fetch(`${BASE_URL}movie/${id}?api_key=${KEY}`)
    .then(responce => responce.json())
    .then(data => {
      const movie = {
        title: data.title,
        popularity: data.popularity,
        overview: data.overview,
        genres: data.genres.flatMap(({ name }) => name).join(', '),
        poster_path: data.poster_path,
      };
      return movie;
    });
};

export const fetchCastMovie = id => {
  return fetch(`${BASE_URL}movie/${id}/credits?api_key=${KEY}`)
    .then(responce => responce.json())
    .then(data => {
      const actors = data.cast.map(actor => {
        const actorData = {
          id: actor.id,
          name: actor.name,
          character: actor.character,
          profile_path: actor.profile_path ? actor.profile_path : '',
        };
        return actorData;
      });
      return actors;
    });
};

export const fetchReviewsInfo = id => {
  return fetch(`${BASE_URL}movie/${id}/reviews?api_key=${KEY}`)
    .then(responce => responce.json())
    .then(data => {
      const reviews = data.results.map(review => {
        const reviewData = {
          id: review.id,
          author: review.author,
          content: review.content,
        };
        return reviewData;
      });
      return reviews;
    });
};

export const fetchMoviesQuery = query => {
  return fetch(`${BASE_URL}search/movie?api_key=${KEY}&query=${query}`)
    .then(responce => responce.json())
    .then(data => {
      const movies = data.results.map(mov => {
        const movie = {
          id: mov.id,
          title: mov.title,
        };
        return movie;
      });
      return movies;
    });
};
