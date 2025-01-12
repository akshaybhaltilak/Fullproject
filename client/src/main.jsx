import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import News from './Pages/News/News.jsx'
import Code from './Pages/Code/Code.jsx'
import Community from './Pages/Community/Community.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/news' element={<News />} />
      <Route path='/code' element={<Code />} />
      <Route path='/community' element={<Community />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)