import React, { useState } from 'react';
import { createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search';
import AboutPage from './pages/AboutPage';
import PostItem, { singlePostLoader } from './pages/PostItemPage';
import PostsPage, { postsLoader } from './pages/PostsPage';
import { TPost } from './types/PostTypes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<NavBar />}>
      <Route index element={<AboutPage />} />
      <Route path='posts'>
        <Route index element={<PostsPage />} loader={postsLoader} />
        <Route path=':id' element={<PostItem />} loader={singlePostLoader} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
