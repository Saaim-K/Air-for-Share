import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import { useState } from 'react';

function App() {
  const [LogIn, setisLogIn] = useState(false);

  return (
    <>
      {/* ---------------------------------------- NOTES ---------------------------------------- */}
      {/* useNavigate : is used for redirecting from one page to another when clicked or any event occurs */}
      {/* A <Link> is an element that lets the user navigate to another page by clicking or tapping on it. */}
      {/* The  purpose of useNavigate hook and  Link (and NavLink and Navigate) components is same. */}
      {/* The only difference is  Declarative Programming and Imperative programming. */}
      {/* Declarative programming – focuses on what to execute, defines program logic, but not detailed control flow. */}
      {/* Imperative programming – focuses on how to execute, defines control flow as statements that change a program state. */}
      {/* useParams : is used for nested routes */}
      {/* Any thing written write after router tag appear on all the pages */}
      {/* ---------------------------------------- NOTES ---------------------------------------- */}

      <button onClick={() => { setisLogIn(!LogIn) }}>
        {(LogIn) ? 'Logged In' : 'Logged Out'}
      </button>
      <Router>
        {/* -------------------- Navbar -------------------- */}
        {/* Anything That is written here will appear on all pages */}

        {(LogIn) ?
          <nav>
            <ul>
              <h1><Link to='/'>Home</Link></h1>
              <h1><Link to='about/:username'>About</Link></h1>
              <h1><Link to='gallery'>Gallery</Link></h1>
            </ul>
          </nav >
          :
          <nav>
            <h1><Link to='/'>Login</Link></h1>
            <h1><Link to='signup'>SignUp</Link></h1>
          </nav >
        }

        {/* Anything That is written here will appear on all pages */}
        {
          (LogIn) ?
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='about/:username' element={<About />} />
              <Route path='gallery' element={<Gallery />} />
              <Route path='*' element={<Navigate to='/' replace={true} />} />
            </Routes>
            :
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='signup' element={<Signup />} />
              <Route path='*' element={<Navigate to='/' replace={true} />} />
            </Routes>
        }
      </Router >

    </>);
}

export default App;
