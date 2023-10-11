import React, { useEffect, useState } from 'react'
import Login from './components/login/Login'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from './firebaseConfig'
import "./App.css"
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Feed from './components/feed/Feed'
import RightSidebar from './components/rightSidebar/RightSidebar'


const App = () => {

  const [user, setUser] = useState(null)


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [])

  console.log(user)

  return (
    <div className='app'>
      {
        !user ? (
          <Login setUser={setUser} />
        ) : (
          <>
            <Navbar photoURL={user.photoURL} id={user.displayName} />
            <div className='app__body'>
              <Sidebar user={user} />
              <Feed user={user} />
              <RightSidebar />
            </div>
          </>

        )
      }
    </div>
  )
}

export default App