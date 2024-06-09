// import './Navbar.css';
import Shop from './Pages/Shops';
import ShopCategory from './Pages/ShopCategorys';
import Product from './Pages/Products';
import Cart from './Pages/Carts';
import Login from './Pages/Logins';
import Navbar from './Components/Navbars/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footers from './Components/Footer/Footer';
import men from './Components/Assets/men.jpeg'
import Home from './Components/Assets/Home.jpeg'
import enf from './Components/Assets/enf.jpeg'



function App() {
  return (
 <div>
   
   <BrowserRouter>
   <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/> 
        <Route path="/Mens" element={<ShopCategory banner={men} category="Mens"/>}/>
        <Route path="/womans" element={<ShopCategory banner={Home} category="womans"/>}/>
        <Route path="/kids" element={<ShopCategory banner={enf} category="kids"/>}/>
        <Route path="/products" element={<Product/>}>
         <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/> 
      </Routes> 
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
     
      
      <Footers/>
    
    </BrowserRouter>
</div>
  );
}

export default App;
