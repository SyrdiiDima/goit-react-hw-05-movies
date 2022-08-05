// import { Route, Routes } from 'react-router-dom';
// // import { lazy } from 'react';
// import { lazy, Suspense } from 'react';
// import AppBar from './AppBar/AppBar';
// import Container from './Container/Container';
// import { Home } from 'pages/Home';
// import MovieInfo from 'pages/MovieInfo';
// import Movies from 'pages/Movies';
// import Cast from 'pages/Cast';
// import Reviews from 'pages/Reviews';
// import NotFound from 'pages/NotFound';

// // const MovieInfo = lazy(() => import('../pages/MovieInfo'));


// export const App = () => {
//   return (
//     <div>
//       <Container>
//         <AppBar />
//         <Suspense>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/movies" element={<Movies />} />
//             <Route path="/movies/:id" element={<MovieInfo />}>
//               <Route path="cast" element={<Cast />} />
//               <Route path="reviews" element={<Reviews />} />
//             </Route>

//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </Suspense>
//       </Container>
//     </div>
//   );
// };

// export default App;

// // import { lazy, Suspense } from 'react';
// // import { Routes, Route } from 'react-router-dom';
// // import { Container } from './Container/Conteiner';
// // import { Navigation } from './Navigation/Navigation';
// // import { Home } from 'pages/Home';

// // const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
// // const Movies = lazy(() => import('../pages/Movies'));
// // const Movie = lazy(() => import('../pages/Movie'));
// // const Cast = lazy(() => import('../pages/Cast'));
// // const Reviews = lazy(() => import('../pages/Reviews'));

// // function App() {
// //   return (
// //     <Container>
// //       <Navigation />
// //       <Suspense>
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/movies" element={<Movies />} />
// //           <Route path="/movies/:id" element={<Movie />}>
// //             <Route path="cast" element={<Cast />} />
// //             <Route path="reviews" element={<Reviews />} />
// //           </Route>

// //           <Route path="*" element={<NotFoundPage />} />
// //         </Routes>
// //       </Suspense>
// //     </Container>
// //   );
// // }

// // export default App;


import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Container } from './Container/Conteiner';
// import { Navigation } from './Navigation/Navigation';
// import { Home } from 'pages/Home';
import { Container } from './Container/Container';
import {Navigation} from './Navigation/Navigation';
import { Home } from 'pages/Home';

// const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
// const Movies = lazy(() => import('../pages/Movies'));
// const Movie = lazy(() => import('../pages/Movie'));
// const Cast = lazy(() => import('../pages/Cast'));
// const Reviews = lazy(() => import('../pages/Reviews'));

const NotFound = lazy(() => import('../pages/NotFound'))
const MovieInfo = lazy (()=> import('../pages/MovieInfo'))
const Movies = lazy (()=> import('../pages/Movies'))
const Cast = lazy (()=> import('../pages/Cast'))
const Reviews = lazy (()=> import('../pages/Reviews'))

function App() {
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
}

export default App;