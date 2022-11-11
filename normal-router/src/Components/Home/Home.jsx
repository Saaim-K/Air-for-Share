import React from 'react'
import { useNavigate,Link } from 'react-router-dom'

function Home() {
  // let aboutNavigate = useNavigate();
  let galleryNavigate = useNavigate();
  return (
    <>
      <h1>This is Home Page</h1>
      <Link to='/about/:username'><button>Redirect to About page</button></Link>{/* Declarative Programmin */}
      <button onClick={() => { galleryNavigate('/gallery') }}>Redirect to Gallery page</button>{/* Imperative Programmin */}
    </>
  )
}

export default Home