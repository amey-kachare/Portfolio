import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Project from './components/Project.jsx'
import { gitInfoLoader } from './features/gitInfoLoader.js'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='' element={<Home/>}/>
      <Route path='contact' element={<Contact/>}/>

      <Route loader={gitInfoLoader} path='project' element={<Project/>}/> 

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
