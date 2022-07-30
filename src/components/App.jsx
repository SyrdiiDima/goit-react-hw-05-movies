import { Route,Routes } from 'react-router-dom';

import AppBar from './AppBar/AppBar';
import Container from './Container/Container';
import { Home } from 'pages/Home';

export const App = () => {
  return (
    <div>
      <Container>
        <AppBar />

        <Routes>

           <Route path="/" exact>
          <Home />
          </Route>
          

        </Routes>
       
      </Container>
    </div>
  );
};
