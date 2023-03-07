import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateNote from "./components/CreateNote";
import Notes from "./components/Notes";
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences.jsx';
import AddContent from "./components/AddContent";
import { UserContextProvider } from "./UserContext";
import Header from "./components/Header";

function App() {
  return (
    <UserContextProvider>
      <Router>

        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />

        
          <Route path="/notes" element={<Notes />} />

          <Route path="/addcontent" element={<AddContent />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Login />} />

          <Route path="/register" element={<Register />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
   </UserContextProvider>
  );
}

export default App;
