import Navbar from "./Components/Header/Navbar"
import Hero from "./Components/Hero/Hero"


function App() {


  return (
    <>
   <div className="min-h-screen relative">
    <div className="sticky top-0 z-50"> <Navbar></Navbar></div>
    <Hero></Hero>
   </div>
    </>
  )
}

export default App
