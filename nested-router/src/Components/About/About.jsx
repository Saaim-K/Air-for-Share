import React from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

function About() {
  // let galleryNavigate = useNavigate();
  let homeNavigate = useNavigate();
  let { username } = useParams();

  return (
    <>
      <h1>This is About Page of {username}</h1>
      <Link to='gallery'><button>Redirect to Gallery page</button></Link>
      <button onClick={() => { homeNavigate('/') }}>Redirect to Home page</button>
    </>
  )
}

export default About