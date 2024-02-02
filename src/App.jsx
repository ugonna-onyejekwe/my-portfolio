import { useState } from "react";
import "./App.scss";
import { Home_page } from "./pages/home_page";
import { Routes, Route } from "react-router-dom";
import { Details } from "./pages/detail_page/detail_page";
import { More_pro } from "./pages/more_project_page/more_pro";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home_page />} />
        <Route path="/:name" element={<Details />} />
        <Route path="/more_projects" element={<More_pro />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
