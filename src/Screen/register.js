



import { useState } from "react"
import { Link } from "react-router-dom"
import {toast } from "react-toastify"
import axios from 'axios'
import { base_URL } from "../Config/BaseURL"
//import axios from "axios"
import Lottie from 'react-lottie';
import * as animationData from '../Assets/loding.js.json'

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};


function Register(){
const [loading, setLoading]= useState(false)
  const [values, setValues] = useState({
     name : "",
     email : "",
     mobile : "",
     password : "",
     
})


    const handleInput = (e)=> {

        setValues({...values , [e.target.name] : e.target.value})
    }
    const handleSubmit=()=>{
       

      var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
         if(! reg.test(values.email)){
             
            toast.error("please enter a Valid Email 21")
         }

         else if(values.password.length < 6)
         {
           toast.error("Please Enter Atleast 5 Digit Password ")

         }
         else{
         // console.log(values)
            setLoading(true)
            axios.post(base_URL + 'register', values).then((res) =>{

               toast.success(res.data.message)
               setLoading(false)
            }).catch((err)=>{

                toast.error(err.response.data.message)
                setLoading(false)
            })

         }

    }

    return(
    
    
    
    
      <> 
        {loading == true ?
        <>
      <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={false}
              isPaused={false}/>
              <h4 style={{color : "green" , textAlign : 'center'}}>Pleaswe wait we are fatching data for you</h4>
        </>
              :

<div class="login-part">
  <div class="form-group">
    <label for="l1">Name</label>
    <input type="text" name='name' onChange={handleInput} class="form-control" id="l1"  placeholder="Enter Your Name"/>
   
  </div>
  <div class="form-group">
    <label for="l2">Email</label>
    <input type="email"  name='email'  onChange={handleInput} class="form-control" id="l2" placeholder="Enter Your email"/>
  </div>
  <div class="form-group">
    <label for="l3">Mobile</label>
    <input type="mobile"   name='mobile' onChange={handleInput} class="form-control" id="l3" placeholder=" Enter Your number"/>
  </div>

  <div class="form-group">
    <label for="l4">Password</label>
    <input type="password" name='password' onChange={handleInput} class="form-control" id="l4" placeholder="Enter Your Password"/>
  </div>
  <br></br>

  <button type="submit"  onClick={handleSubmit}    class="btn btn-primary">Submit</button>


  <br></br>

  <i> <h5> Allready hava an account? &nbsp; <Link to='/login'> Login Here</Link> </h5></i>

  </div>

        
        }   
      </>
    )
    
    
    }
    
    
    
    
    export default Register

    


