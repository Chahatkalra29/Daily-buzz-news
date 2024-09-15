import Navbar from "./Components/Navbar.jsx";
import Newsboard from "./Components/Newsboard.jsx";
import "./App.css";
import React, { useState } from "react";

const App = () => {
  const[category,setCategory]= useState("general");
  

  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
      <styles/>
    </div>
  );

  
};


export default App;


