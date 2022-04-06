import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Praktika6 from './components/praktika-6/Praktika6'
import Praktika5 from './components/praktika-5/Praktika5';
import Praktika4 from './components/praktika-4/Praktika4';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/praktika-6">Praktika 6</Link>
          <Link to="/praktika-5">Praktika 5</Link>
          <Link to="/praktika-4">Praktika 4</Link>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/praktika-6' element={<Praktika6 />} />
        <Route path='/praktika-5' element={<Praktika5 />} />
        <Route path='/praktika-4' element={<Praktika4 />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

      <footer>
        <p>Footer</p>
      </footer>
    </Router>
  );
}

export default App;
