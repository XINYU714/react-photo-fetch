import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";
//負責UI介面
//在APP整個的ＵＩ架構輸出成一個oject 在傳入index.js去渲染
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/react-photo-fetch"
          element={<Homepage />}
        />
        <Route
          path="/react-photo-fetch/about"
          element={<About />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
