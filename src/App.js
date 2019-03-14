import React from "react";
import Jumbotron from "./components/Jumbotron";
import MainGameContainer from "./components/MainGameContainer";
import Footer from "./components/Footer";
import "./App.css";


const App = () => (
  <div className="container-fluid mainContainer">
    <Jumbotron />
    <MainGameContainer /> 
    <Footer />
  </div>
);

export default App;