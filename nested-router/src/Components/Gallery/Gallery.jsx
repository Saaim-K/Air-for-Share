import React from 'react'
import { useNavigate,Link } from 'react-router-dom'

function Gallery() {
  // let aboutNavigate = useNavigate();
  let homeNavigate = useNavigate();
  return (
    <>
      <h1>This is Gallery Page</h1>
      <Link to='about'><button>Redirect to about page</button></Link>
      <button onClick={() => { homeNavigate('/') }}>Redirect to Home page</button>
    </>
  )
}

export default Gallery