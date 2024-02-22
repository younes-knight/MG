import './App.css'
import Nav from './components/1-navbar.jsx'
import Home from './pages/1-home.jsx'
import Services from './pages/2-services.jsx'
import About from './pages/3-about-us.jsx'
import Portfolio from './pages/4-portfolio.jsx'
import Contact from './pages/5-contact.jsx'

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Services />
      <About />
      <Portfolio />
      <Contact />
    </>
  )
}

export default App
