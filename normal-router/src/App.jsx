import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import Error from './Components/Error/Error';

function App() {
  return (
    // ---------------------------------------- NOTES ----------------------------------------
    // Use Navigate : is used for redirecting from one page to another when clicked or any event occurs
    // Use Params : is used for nested routes
    // Any thing written write after router tag appear on all the pages
    // ---------------------------------------- NOTES ----------------------------------------

    <Router>
      {/* Anything That is written here will appear on all pages */}
      <nav>
        <ul>
          <li> <Link to='/'>Home</Link></li>
          <li><Link to='/about/:username'>About</Link></li>
          <li><Link to='/gallery'>Gallery</Link></li>
        </ul>
      </nav>
      {/* Anything That is written here will appear on all pages */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About/:username' element={<About />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='*' element={<Error />} />
      </Routes>

    </Router>

  );
}

export default App;
