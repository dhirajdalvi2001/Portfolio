import React, { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Preloader from "./components/Preloader/Preloader.component";
const ToggleButton = lazy(() =>
  import("./components/ToggleButton/ToggleButton.component")
);
const Navbar = lazy(() => import("./components/Navbar/Navbar.component"));
const HomePage = lazy(() => import("./components/HomePage/HomePage.component"));
const Experience = lazy(() =>
  import("./components/Experience/Experience.component")
);
const Projects = lazy(() => import("./components/Projects/Projects.component"));
const Education = lazy(() =>
  import("./components/Education/Education.component")
);
const Contact = lazy(() => import("./components/Contact/Contact.component"));

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
      <Suspense fallback={<Preloader />}>
        <Navbar />
        <ToggleButton />
        <HomePage />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
