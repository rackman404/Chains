import React from "react";
import {BrowserRouter as Router,
        Routes,
        Route,
        Navigate,
} from "react-router-dom";

//import pages 
import Profile from './Pages/Profile';
import HomePage from './Pages/HomePage';
import Conversations from './Pages/Conversations';


export default function MyApp(){
  
  return (
    <>
      <Router></Router>
      <Router>
        <Routes>
          <Route
            path = "/" 
            element={<HomePage/>}
          />
          <Route
            path = "/Profile" 
            element={<Profile/>}
          />
          <Route
            path = "/Conversations" 
            element={<Conversations/>}
          />
        </Routes>
      </Router>
    </>
  );
}