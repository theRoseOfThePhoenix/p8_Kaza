// @ts-nocheck
import React from "react";
import "./styles/main.scss";
import Header from "./components/Hearder/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
