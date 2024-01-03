import "./App.css";
import HomePage from "./components/HomePage/HomePage.component";
import Experience from "./components/Experience/Experience.component";
import ToggleButton from "./components/ToggleButton/ToggleButton.component";
import Navbar from "./components/Navbar/Navbar.component";
import Projects from "./components/Projects/Projects.component";
import Contact from "./components/Contact/Contact.component";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ fontSize: "12px" }}
      />
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
