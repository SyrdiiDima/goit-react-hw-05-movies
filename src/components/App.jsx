import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from './Container/Container';
import { Navigation } from './Navigation/Navigation';
import { Home } from 'pages/Home';
// import Movies from '../pages/Movies';
// import MovieInfo from '../pages/MovieInfo';
// import Cast from '../pages/Cast';
// import Reviews from '../pages/Reviews';
// import NotFound from '../pages/NotFound';

const NotFound = lazy(() => import('../pages/NotFound'));
const MovieInfo = lazy(() => import('../pages/MovieInfo'));
const Movies = lazy(() => import('../pages/Movies'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

export const App = () => {
  return (
    <Container>
      <Navigation />
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
  );
};


