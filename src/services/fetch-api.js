const KEY = '407c6c5ac7b97eafb7da884568d7dfc2';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchMovieTrends = () => {
  return fetch(`${BASE_URL}trending/movie/day?api_key=${KEY}`)
    .then(responce => responce.json())
    .then(data => {
      const movies = data.results.map(mov => {
        const movie = { id: mov.id, title: mov.title };

        return movie;
      });
      return movies;
    });
};

export const fetchMoviesByQuery = query => {
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

export const fetchMovieWithId = id => {
  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`)
    .then(r => r.json())
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

// export const fetchMovieById = id => {
//   return fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`)
//     .then(r => r.json())
//     .then(data => {
//       const movie = {
//         title: data.title,
//         popularity: data.popularity,
//         overview: data.overview,
//         genres: data.genres.flatMap(({ name }) => name).join(', '),
//         poster_path: data.poster_path,
//       };
//       return movie;
//     });
// };

// export const fetchTrend = () => {
//   return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
//     .then(r => r.json())
//     .then(data => {
//       const movies = data.results.map(mov => {
//         const movie = {
//           id: mov.id,
//           title: mov.title,
//         };
//         return movie;
//       });
//       return movies;
//     });
// };
