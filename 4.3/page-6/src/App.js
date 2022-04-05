import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile/:username' element={<Profile />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <footer>
        <p>Footer</p>
      </footer>
    </Router>
  );
}

export default App;
