
import {useNavigate} from 'react-router-dom'

import '../Styless/category.css'

function Pricing(){

  const navigate =useNavigate()

  function checkActive(path){

    var y = window.location.href.includes(path)

    return y
  }


return(


    <>
    
     <div class="feature-container">
     <div class="feature-content">

         <div class="main-info">

          <h2 class="main-tital"> Your Success is our Goal </h2>
          <p class="main-description"> This is a section of some simple filler text,also known as placeholder text. 
            It shares some characteristics of real written text but is random or otherwise generated. </p>
         </div>  

         <div class="feature-grid">

           <div class="feature-card">
              

               <div class="feature-info">
                 <div class="feature-title">
                  <h1>UPSC</h1>
                 {/* <a  class={`nav-link ${checkActive('home') ? 'active' : "" }`}  onClick={()=>navigate('/home')}  >Home</a> */}
                 </div>

                 <div class="feature-description">
                 <a class={`nav-link ${checkActive('upsc') ? 'active' : "" }`}   onClick={()=>navigate('/upsc')}  > Click me</a>

                 </div>

            </div>
          </div>

          
          
          <div class="feature-card">
              

              <div class="feature-info">
                <div class="feature-title">
               <h1>Engineering</h1>

                </div>

                <div class="feature-description">
                <a href="#Start" class="Str-button"> Click me</a>

                </div>

           </div>
         </div>

         

         <div class="feature-card">
             

             <div class="feature-info">
               <div class="feature-title">
               <h1>Defence</h1>

               </div>

               <div class="feature-description">
               <a href="#Start" class="Str-button"> Click me</a>
               </div>

          </div>
        </div>

        
        

        <div class="feature-card">
            

            <div class="feature-info">
              <div class="feature-title">
             <h1>NEET/JEE</h1>

              </div>

              <div class="feature-description">
              <a href="#Start" class="Str-button"> Click me</a>
              </div>

         </div>
       </div>

       


       <div class="feature-card">
           

           <div class="feature-info">
             <div class="feature-title">
            <h1>RAS</h1>

             </div>

             <div class="feature-description">
             <a href="#Start" class="Str-button"> Click me</a>
             </div>

        </div>
      </div>



      <div class="feature-card">
          

          <div class="feature-info">
            <div class="feature-title">
            <h1>Police</h1>

            </div>

            <div class="feature-description">
            <a href="#Start" class="Str-button"> Click me</a>
            </div>

       </div>
     </div>


     <div class="feature-card">
              

              <div class="feature-info">
                <div class="feature-title">
                <h1>Teacher</h1>

                </div>

                <div class="feature-description">
                <a href="#Start" class="Str-button"> Click me</a>

                </div>

           </div>
         </div>

         
         
         <div class="feature-card">
             

             <div class="feature-info">
               <div class="feature-title">
              <h1>Science</h1>

               </div>

               <div class="feature-description">
               <a href="#Start" class="Str-button"> Click me</a>

               </div>

          </div>
        </div>

        

        <div class="feature-card">
            

            <div class="feature-info">
              <div class="feature-title">
             <h1>Student</h1>

              </div>

              <div class="feature-description">
              <a href="#Start" class="Str-button"> Click me</a>
              </div>

         </div>
       </div>

       
       

       <div class="feature-card">
           

           <div class="feature-info">
             <div class="feature-title">
             <h1>Law</h1>

             </div>

             <div class="feature-description">
             <a href="#Start" class="Str-button"> Click me</a>
             </div>

        </div>
      </div>

      


      <div class="feature-card">
          

          <div class="feature-info">
            <div class="feature-title">
          <h1>Game</h1>

            </div>

            <div class="feature-description">
            <a href="#Start" class="Str-button"> Click me</a>
            </div>

       </div>
     </div>



     <div class="feature-card">
         

         <div class="feature-info">
           <div class="feature-title">
            <h1>Kids</h1>

           </div>

           <div class="feature-description">
           <a href="#Start" class="Str-button"> Click me</a>
           </div>

      </div>
    </div>



     

     
         </div>

     </div>

   </div>
    </>
)
}

export default Pricing