import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {Shop} from './components/Shop/Shop.jsx'
import { Categories } from './components/Categories/Categories.jsx'
import { Login } from './components/Login/Login.jsx'
import Home from './components/Home/Home.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import ForgotPassword from './components/Forgot/Forgot.jsx'
import { ShoppingCart } from './components/Cart/ShoppingCart.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}> 
      <Route path='' element={<Home/>}></Route>
      <Route path='/shop' element={<Shop/>}></Route>
      <Route path='/categories' element={<Categories/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/forgotpassword' element={<ForgotPassword/>}></Route>
      <Route path='/cart' element={<ShoppingCart/>}></Route>
    </Route>
    
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
