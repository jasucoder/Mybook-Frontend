
import {Route, Routes} from 'react-router-dom'
import Home from '../Screen/home';
import Book from '../Screen/Book';
import Category from '../Screen/Category';
import Navbar from '../Layout/navbar';
import ViewProduct from '../Screen/viewProduct';
import Login from '../Screen/login';
import Register from '../Screen/register';
import Forgotpassword from '../Screen/Forgotpassword';

// mistick is here please remove comment on functon AuthRouths

function AuthRouts(){


return(

    <>
    
    <Routes>
         <Route path='/' element ={< Login/>} />

       
         <Route path='/register' element ={< Register/>} />
         <Route path='/login' element ={< Login/>} />
         <Route path='/frgpt' element ={< Forgotpassword/>} />
         
         <Route path='*' element ={< Login/>} />

    </Routes>
    
    </>
)
}

export default AuthRouts