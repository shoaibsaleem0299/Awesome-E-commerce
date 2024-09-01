import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {Shop} from './components/Shop/Shop.jsx'
import { Categories } from './components/Categories/Categories.jsx'
import { Find } from './components/Find/Find.jsx'
import Home from './components/Home/Home.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}> 
      <Route path='' element={<Home/>}></Route>
      <Route path='/shop' element={<Shop/>}></Route>
      <Route path='/categories' element={<Categories/>}></Route>
      <Route path='/quickfind' element={<Find/>}></Route>
    </Route>
    
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
