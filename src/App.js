import './App.css';
import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz2DKzulwaGrVco27Ox0bhbAZ_Mn4IOq0",
  authDomain: "crud-39371.firebaseapp.com",
  projectId: "crud-39371",
  storageBucket: "crud-39371.appspot.com",
  messagingSenderId: "1029686903261",
  appId: "1:1029686903261:web:b7d39c4c9d605a26527634"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


function App() {
  const [postText, setPostText] = useState('')
  const [posts, setPosts] = useState([])




  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} =>`, doc.data());
        let newArray = [...posts, doc.data()]
        setPosts(newArray)
      });
    }
    getData();
  }, [])



  const savePost = async (e) => {
    e.preventDefault();
    console.log('post', postText);

    try {
      const docRef = await addDoc(collection(db, 'posts'), {//here posts is the name of the collection
        text: postText,
        createdon: new Date().getTime()
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

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
