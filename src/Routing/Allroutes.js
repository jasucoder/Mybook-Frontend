
import {Route, Routes} from 'react-router-dom'
import Home from '../Screen/home';
import Book from '../Screen/Book';
import Category from '../Screen/Category';
import Blog from '../Screen/Blog';
import Artical from '../Screen/Artical';
import Navbar from '../Layout/navbar';
import Futter from '../Layout/Futter';
import Upsc from '../Screen/upsc';
import ViewProduct from '../Screen/viewProduct';
import MyCart from '../Screen/MyCards';
import CheckoutPage from '../Screen/Chackout';

//import ViewProduct from '../screens/ViewProduct';




function AllRouets(){


return(

    <>
  <Navbar/>
    <Routes>
         <Route path='/' element ={< Home />} />
         <Route path='/home' element ={< Home/>} />
         <Route path='/about' element ={< Book/>} />
         <Route path='/pricing' element ={< Category/>} />
         <Route path='/blog' element ={< Blog/>} />
         <Route path='/artical' element ={< Artical/>} />
         <Route path='/upsc' element ={<Upsc/>} />
         <Route path='/viewProduct/:id' element ={<ViewProduct/>} />
         <Route path='/mycart' element ={<MyCart/>} />
         <Route path='/checkoutPage/:id' element ={<CheckoutPage/>} />

         
         <Route path='*' element ={< Home/>} />

    </Routes>
   <Futter/>
    </>
)
}

export default AllRouets

