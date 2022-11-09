import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function About() {
  let galleryNavigate = useNavigate();
  let homeNavigate = useNavigate();
  let { username } = useParams();

  return (
    <>
      <h1>This is About Page of {username}</h1>
      <button onClick={() => { galleryNavigate('/gallery') }}>Redirect to Gallery page</button>
      <button onClick={() => { homeNavigate('/') }}>Redirect to Home page</button>
    </>
  )
}

export default About