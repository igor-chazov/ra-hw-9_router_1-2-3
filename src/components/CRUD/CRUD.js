import './crud.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Main from './Main/Main';
import AddPost from './AddPost/AddPost';
import PostView from './PostView/PostView';

function GRUD() {
  return (
    <Router>
      <div className="page-grud">
        <Routes>
          <Route path="/*" element={<Navigate replace to="/" />} />
          <Route path="/" element={<Main />} />
          <Route path="/posts/new" element={<AddPost />} />
          <Route path="/posts/:id" element={<PostView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default GRUD;
