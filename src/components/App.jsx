import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import AppBar from './AppBar/AppBar';
import Container from './Container/Container';
import { Home } from 'pages/Home';
import MovieInfo from 'pages/MovieInfo';
import Movies from 'pages/Movies';

// const MovieInfo = lazy(() => import('../pages/MovieInfo'));

export const App = ()=>{
  return (
    <div>
      <Container>
        <AppBar />

        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieInfo />}>
            {/* <Route path="cast" element={<Cast />} /> */}
            {/* <Route path="reviews" element={<Reviews />} /> */}
          </Route>

          {/* <Route path="*" element={<NotFoundPage />} /> */}
          {/* <Route path='/' element={<Home />} /> 
          <Route path='/movies' element={ <Movies />} exact></Route>
          <Route path = './movies/:id' element={<MovieInfo />}></Route> */}
        </Routes>
       
      </Container>
    </div>
  );
};


export default App;