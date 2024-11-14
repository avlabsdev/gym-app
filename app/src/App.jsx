// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

// fonts
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/100.css"; // Specify weight
import "@fontsource/poppins/100-italic.css"; // Specify weight and style
import "@fontsource/poppins/200.css"; // Specify weight
import "@fontsource/poppins/200-italic.css"; // Specify weight and style
import "@fontsource/poppins/300.css"; // Specify weight
import "@fontsource/poppins/300-italic.css"; // Specify weight and style
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import "@fontsource/poppins/500.css"; // Specify weight
import "@fontsource/poppins/500-italic.css"; // Specify weight and style
import "@fontsource/poppins/600.css"; // Specify weight
import "@fontsource/poppins/600-italic.css"; // Specify weight and style
import "@fontsource/poppins/700.css"; // Specify weight
import "@fontsource/poppins/700-italic.css"; // Specify weight and style
import "@fontsource/poppins/800.css"; // Specify weight
import "@fontsource/poppins/800-italic.css"; // Specify weight and style
import "@fontsource/poppins/900.css"; // Specify weight
import "@fontsource/poppins/900-italic.css"; // Specify weight and style
import Hero from "./components/Hero";
import Generator from "./components/Generator";
import Workout from "./components/Workout";

// icons
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGear } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <Hero />
      <Generator />
      <Workout />
    </>
  );
}

export default App;
