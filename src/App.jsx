import Navbar from "./components/Navbar.jsx"
import Contact from "./components/Contact.jsx"
import Feedback from "./components/Feedback.jsx"
import Footer from "./components/Footer.jsx"
import Future from "./components/Future.jsx"
import Hero from "./components/Hero.jsx"
import Revolution from "./components/Revolution.jsx"


const App = () => {

  return (
    <div className="px-4 lg:px-32 font-Body bg-black">
      <Navbar/>
      <Hero/>
      <Revolution/>
      <Future/>
      <Feedback/>
      <Contact/>
      <Footer/> 
    </div>
  )
}

export default App
