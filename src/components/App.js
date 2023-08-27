import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//App components
import NavBar from "./NavBar";
import Home from "./Home"
import About from "./About";
import Footer from "./footer";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
    {
    return (
      <div className="app-container">
        <Router>
        <NavBar />
   
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      
      </Router>
      <Footer/>
      </div>
      
    );
  }
}
  
  export default App;
  