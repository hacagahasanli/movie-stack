import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Movie } from "./pages";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
//http://www.omdbapi.com/?i=tt3896198&apikey=e7ebf3a9

export default App;
