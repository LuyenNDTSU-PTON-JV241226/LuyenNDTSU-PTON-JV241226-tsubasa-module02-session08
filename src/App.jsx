import './App.css'
import {BrowserRouter,Routes,Route, NavLink} from "react-router-dom"
import Home from './ss08-1/Home'
import Login from './ss08-2/Login'
import NotFound from './ss08-3/NotFound'
import Home1 from './ss8-4/Home1'
import Contact from './ss8-4/Contact'
import Product from './ss8-5/Product'
import Home2 from './ss8-5/Home2'
import Detail from './ss8-5/Detail'
import ListUser from './ss8-6/ListUser'
import UserDetail from './ss8-6/UserDetail'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Home/>}></Route>
      <Route path="/ss08-2/login" element={<Login/>}></Route>
      <Route path="*" element={<NotFound/>} ></Route>
    </Routes>
    <nav style={{display:"flex", gap: 15}}>
      <NavLink to={"/ss8-4/Home1"}>Home</NavLink>
      <NavLink to={"/ss8-4/Contact"}>Contact</NavLink>
    </nav>
    <Routes>
      <Route path="/ss8-4/Home1" element={<Home1/>}></Route>
      <Route path="/ss8-4/contact" element={<Contact/>} ></Route>
    </Routes>
    <nav style={{display:"flex", gap: 15}}>
      <NavLink className={({isActive})=>(isActive ? "active" : "")} to={"/ss8-5/Home2"}>Home</NavLink>
      <NavLink className={({isActive})=>(isActive ? "active" : "")} to={"/ss8-5/product"}>Product</NavLink>
      <NavLink className={({isActive})=>(isActive ? "active" : "")} to={"/ss8-5/detail"}>Detail</NavLink>
    </nav>
    <Routes>
      <Route path="/ss8-5/Home2" element={<Home2/>}></Route>
      <Route path="/ss8-5/product" element={<Product/>} ></Route>
      <Route path="/ss8-5/detail" element={<Detail/>}></Route>
    </Routes>
    <Route path="" element={<ListUser />}></Route>
            <Route path="user-detail/:id" element={<UserDetail />}></Route>
    </BrowserRouter>
    </>
  )
}

export default App
