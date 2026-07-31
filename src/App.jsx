import { useEffect, useState } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import posts from './data/posts.json';
import Layer from './components/layer/Layer';
import Home from './components/Home/Home';
import Blog from './components/blog/Blog';
import Post from './components/post/Post';
import NotFound from './components/NotFound/NotFound';

function App() {

  let [data , setData] = useState(posts);
  

  let route = createBrowserRouter([
    {index: "", element: <Layer data={data.siteInfo} /> , children: [
      {index: true, element: <Home name={data.siteInfo.name} posts={data.posts} categories={data.categories}/>},
      {path: "home", element: <Home name={data.siteInfo.name} posts={data.posts} categories={data.categories} />},
      {path: "blog", element: <Blog posts={data}/> },
      {path: "/blog/:slug", element: <Post posts={data.posts} />},
      {path: "about", element: <h1>about</h1>},
      {path: "*", element: <NotFound/>},
    ]},
  ])
  
  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
