
import './App.css'
import {useState} from "react"
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Card from './components/Card/Card'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'



function App() {

const [showSignIn, setShowSignIn] = useState(false)
const [showSignUp, setShowSignUp] = useState(false)

  return (
    <>
    
      <NavBar openSignIn={() => setShowSignIn(true)}/>
      <Hero />
      <Card />
      <footer>
        <div className="line"></div>
        <p>© 2025 Blogs , vica web solutions</p>
      </footer>
      {showSignIn && (
        <SignIn
          closePopup={() => setShowSignIn(false)}
          openSignUp={() => {
            setShowSignIn(false)
            setShowSignUp(true)
          }}
        />
        
      )}
      {showSignUp && (
  <SignUp
    closePopup={() => setShowSignUp(false)}
    openSignIn={() => {
      setShowSignUp(false);
      setShowSignIn(true);
    }}
  />
)}
    </>
  )
}

export default App

