import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import React from 'react';

import AppBar from './AppBar/AppBar';
import Container from './Container/Container';
///
import { Home } from 'pages/Home';
import MovieInfo from 'pages/MovieInfo';
import Movies from 'pages/Movies';
import NotFound from 'pages/NotFound';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';

// const Home = lazy(() => import('../pages/Home'));
// const MovieInfo = lazy(() => import('../pages/MovieInfo'));
// const Movies = lazy(() => import('../pages/Movies'));
// const NotFound = lazy(() => import('../pages/NotFound'));
// const Cast = lazy(() => import('../pages/Cast'));
// const Reviews = lazy(() => import('../pages/Reviews'));

export const App = () => {
  return (
    <div>
      <Container>
        <AppBar />
        <Suspense>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
      </Container>
    </div>
  );
};

export default App;
