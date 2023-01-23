import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateNote from "./components/CreateNote";
import Notes from "./components/Notes";
import Login from './components/Login'
import './App.css';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences.jsx';

function App() {
  return (

   <Router>

    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />

    
      <Route path="/notes" element={<Notes />} />

      
      <Route path="/create" element={<CreateNote />} />
      <Route path="/login" element={<Login />} />
      <Route path="/preferences" element={<Preferences />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
   </Router>
  );
}

export default App;
