import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Movie } from './pages';
import { GlobalStyle } from './components';

const App = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
