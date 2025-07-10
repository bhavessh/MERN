import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./component/home";
import Register from "./component/Register";
function App() {
  return (
    <div className="App-Container">
      <h1 style={{ backgroundColor: "orange" }}>MERN Frontend</h1>
      <Home age={21} />
      
      <h3>This is footer</h3>
      <Register></Register>
    </div>
  );
}
export default App;