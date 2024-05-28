import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movie from './pages/Movie';
import Favourite from './pages/Favourite';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Movie />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
