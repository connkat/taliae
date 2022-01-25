import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Contact } from "./pages";
import Header from "./components/Header.jsx";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
