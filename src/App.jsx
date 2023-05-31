import "./App.css";
import HomePage from "./components/HomePage/HomePage.component";
import Experience from "./components/Experience/Experience.component";
import ToggleButton from "./components/ToggleButton/ToggleButton.component";
import Navbar from "./components/Navbar/Navbar.component";
import Projects from "./components/Projects/Projects.component";
import ScrollUp from "./components/ScrollUp/ScrollUp.component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToggleButton />
      <HomePage />
      <Experience />
      <Projects />
      <ScrollUp />
    </div>
  );
}

export default App;
