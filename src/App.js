import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Blog from './components/Blog';
import BlogList from './components/BlogList';
import BlogPage from './components/BlogPage';

function App() {
  return (<>
   <Router>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPage />} />
      </Routes>
   </Router>
  {/* <Blog /> */}
  </>
  );
}

export default App;