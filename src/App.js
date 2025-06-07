import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";
import "./App.css";
import GenresPage from "./pages/GenresPage";
import StoriesPage from "./pages/StoriesPage";
import Community from "./pages/Community";
import AboutPage from "./pages/AboutPage";
import NewStory from "./pages/NewStory";
import Signin from "./pages/Signin";
import ContactForm from "./pages/ContactForm";
function App() {

  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
  return (
    <Router>
      <Routes>
         <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/home" replace /> : <Signin />
          }
        />
        {/* <Route path="/signin" element={<Signin/>}/> */}
        <Route path="/home" element={<HomePage  />}/>
        <Route path="/genres" element={<GenresPage/>}/>
        <Route path="/stories" element={<StoriesPage/>}/>
        <Route path="/community" element={<Community/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/newstory" element={<NewStory/>}/>
        <Route path="/ContactForm" element={<ContactForm/>}/>
        <Route path="/stories/:id" element={<StoryPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
