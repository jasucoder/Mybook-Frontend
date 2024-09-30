
import '../Styless/navbar.css'
import {useNavigate} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'


function Navbar(){
  const dispatch = useDispatch()
  const navigate =useNavigate()
  
const cart_count  =  useSelector((state)=> state.CartReducer.cart_count ? state.CartReducer.cart_count : 0)


  function checkActive(path){

    var y = window.location.href.includes(path)

    return y
  }

  function handlelogout(){


    // localStorage.setItem('auth', false)
     //window.location.reload()

     dispatch({type : "LOGIN_FAILED", login_data :{}})
     
   
   }




return(

    <>

<div class="header">

<header class="header-content">
  <a href="#logo" class="logo">
   <img src= "data:image/png;base64,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" alt="logoImages" class="logo-icon "/>
   <span class="logo-text">Studysync</span> 

  </a>

  <nav class="navbar">
    <a  class={`nav-link ${checkActive('home') ? 'active' : "" }`}  onClick={()=>navigate('/home')}  >Home</a>
    <a  class={`nav-link ${checkActive('book') ? 'active' : "" }`}  onClick={()=>navigate('/about')}  >Books</a>
    <a  class={`nav-link ${checkActive('category') ? 'active' : "" }`}  onClick={()=>navigate('/pricing')} >Category</a>
    <a  class={`nav-link ${checkActive('artical') ? 'active' : "" }`}  onClick={()=>navigate('/artical')}  >Artical</a>
    <a  class={`nav-link ${checkActive('blog') ? 'active' : "" }`}  onClick={()=>navigate('/blog')}  >Blog</a>


  </nav>

 
  <input  class="contact-button" type="text" placeholder="Search.."></input>
  
  <div style={{marginRight :20, cursor : "pointer"}}   onClick={()=> navigate('/mycart')} >

<i class="fa" style={{fontSize:"30px"}}>&#xf23d;</i>
<span class='badge badge-warning' id='lblCartCount'>{cart_count}</span>
</div>
<form class="d-flex" role="search"> 

 {/*  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
  <button  onClick={handlelogout} class="btn btn-outline-success" type="submit">Logout</button>
</form> 




</header>





</div>

    
    </>
)
}

export default Navbar