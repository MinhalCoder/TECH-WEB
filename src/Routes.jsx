// src/Routes.js
import React from 'react';

import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePages/HomePage';
import BlogPostPage from './Pages/BlogPostPage/BlogPostPage';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import ContactUsPage from './Pages/ContactUsPage/ContactUsPage';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/BlogPostPage" element={<BlogPostPage />} />
      <Route path="/aboutus" element={<AboutUsPage />} />
      <Route path="/contactus" element={<ContactUsPage />} /> 
      {/* <Route path="/singlePostPage" element={<SinglePostPage/>} />  */}

    </Routes>
  );
};

export default AppRoutes;
