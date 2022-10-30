import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [post, setPost] = useState('')

  useEffect(() => {

  }, [])

  const share = (e) => {
    e.preventDefault();
    console.log('post');
  }

  return (
    <>
      <form onSubmit={share}>
        <input type="text" placeholder='enter any text' onChange={(e) => {
          setPost(e.target.value)
        }} />

      </form>
    </>
  );
}

export default App;
