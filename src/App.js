import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";
import "./App.css";
import GenresPage from "./pages/GenresPage";
import StoriesPage from "./pages/StoriesPage";
import Community from "./pages/Community";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage  />}/>
        <Route path="/genres" element={<GenresPage/>}/>
        <Route path="/stories" element={<StoriesPage/>}/>
        <Route path="/community" element={<Community/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/stories/:id" element={<StoryPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
