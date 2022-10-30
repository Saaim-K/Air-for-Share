import './App.css';
import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2U_D5BiQP7-a27Ah-JrIZ9CracDABau4",
  authDomain: "crud-52601.firebaseapp.com",
  projectId: "crud-52601",
  storageBucket: "crud-52601.appspot.com",
  messagingSenderId: "253797641341",
  appId: "1:253797641341:web:67aebc3b62af9074931514"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


function App() {
  const [postText, setPostText] = useState('')
  const [post, setPost] = useState([])

  useEffect(() => {

  }, [])

  const savePost = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "users"), {
        text: postText,
        createdOn: new Date().getTime(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    console.log('post', postText);
  }

  return (
    <>




      <form onSubmit={savePost}>
        <input type="text" placeholder='enter any text' onChange={(e) => { setPostText(e.target.value) }} />
      </form>



      <div>

        {/* map */}

      </div>
    </>
  );
}

export default App;
