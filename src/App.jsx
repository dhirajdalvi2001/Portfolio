import "./App.css";
import HomePage from "./components/HomePage/HomePage.component";
import Experience from "./components/Experience/Experience.component";
import ToggleButton from "./components/ToggleButton/ToggleButton.component";
import Navbar from "./components/Navbar/Navbar.component";
import Projects from "./components/Projects/Projects.component";
import Contact from "./components/Contact/Contact.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToggleButton />
      <HomePage />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
