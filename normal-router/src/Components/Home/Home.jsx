import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  let aboutNavigate = useNavigate();
  let galleryNavigate = useNavigate();
  return (
    <>
      <h1>This is Home Page</h1>
      <button onClick={() => { aboutNavigate('/about/:username') }}>Redirect to About page</button>
      <button onClick={() => { galleryNavigate('/gallery') }}>Redirect to Gallery page</button>
    </>
  )
}

export default Home