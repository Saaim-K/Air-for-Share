import React from 'react'
import { useNavigate } from 'react-router-dom'

function Gallery() {
  let aboutNavigate = useNavigate();
  let homeNavigate = useNavigate();
  return (
    <>
      <h1>This is Gallery Page</h1>
      <button onClick={() => { aboutNavigate('/about/:username') }}>Redirect to about page</button>
      <button onClick={() => { homeNavigate('/') }}>Redirect to Home page</button>
    </>
  )
}

export default Gallery