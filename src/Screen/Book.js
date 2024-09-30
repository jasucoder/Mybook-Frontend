import React from 'react'
import Mycart from './mycart'
import "../Styless/book.css"
function about(){
let box = document.querySelector('.product-container');
/*
const btnpressprev = () =>{

  let width = box.offsetWidth;
  box.scrollLeft = box.scrollLeft - width;
  console.log(width)

}
const btnpressnext = () =>{
  let width = box.offsetWidth;
  box.scrollLeft = box.scrollLeft + width;
  console.log(width)

}

*/

const btnPressNext = () => {
  const slider = document.querySelector('.product-container');
  const width = slider.offsetWidth;
  slider.scrollLeft += width;
}
const btnPressPrev = () => {
  const slider = document.querySelector('.product-container');
  const width = slider.offsetWidth;
  slider.scrollLeft -= width;
}

const btnPressNextSecond = () => {
  const slider = document.querySelector('.product-containersecond');
  const width = slider.offsetWidth;
  slider.scrollLeft += width;
}
const btnPressPrevSecond = () => {
  const slider = document.querySelector('.product-containersecond');
  const width = slider.offsetWidth;
  slider.scrollLeft -= width;
}

const btnPressNextThird = () => {
  const slider = document.querySelector('.product-containerthird');
  const width = slider.offsetWidth;
  slider.scrollLeft += width;
}
const btnPressPrevThird = () => {
  const slider = document.querySelector('.product-containerthird');
  const width = slider.offsetWidth;
  slider.scrollLeft -= width;
}

const btnPressNextFour = () => {
  const slider = document.querySelector('.product-containerfour');
  const width = slider.offsetWidth;
  slider.scrollLeft += width;
}
const btnPressPrevFour = () => {
  const slider = document.querySelector('.product-containerfour');
  const width = slider.offsetWidth;
  slider.scrollLeft -= width;
}

const btnPressNextFifth = () => {
  const slider = document.querySelector('.product-containerfifth');
  const width = slider.offsetWidth;
  slider.scrollLeft += width;
}
const btnPressPrevFifth = () => {
  const slider = document.querySelector('.product-containerfifth');
  const width = slider.offsetWidth;
  slider.scrollLeft -= width;
}



return(


    <>
    <div  class="book-heading">
        <h1>Treanding Books</h1>

    </div>
    <div class="product-crousel">
        <button class="pre-btn" onClick={btnPressPrev}><p>&lt;</p></button>
        <button class="next-btn" onClick={btnPressNext}><p>&gt;</p></button>
     <div class="product-container">
     <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>


      
      
      
       

     </div>

    </div>


  

    <div  class="book-headingsecond">
        <h1>Mystrey Books</h1>

    </div>
    <div class="product-crouselsecond">
        <button class="pre-btn" onClick={btnPressPrevSecond}><p>&lt;</p></button>
        <button class="next-btn" onClick={btnPressNextSecond}><p>&gt;</p></button>
     <div class="product-containersecond">
     
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      
      
       

     </div>

    </div>





    <div  class="book-headingthird">
        <h1>Romance Books</h1>

    </div>
    <div class="product-crouselthird">
        <button class="pre-btn" onClick={btnPressPrevThird}><p>&lt;</p></button>
        <button class="next-btn" onClick={btnPressNextThird}><p>&gt;</p></button>
     <div class="product-containerthird">
     
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      
      
       

     </div>

    </div>

    



    <div  class="book-headingfour">
        <h1>Clasic Books</h1>

    </div>
    <div class="product-crouselfour">
        <button class="pre-btn" onClick={btnPressPrevFour}><p>&lt;</p></button>
        <button class="next-btn" onClick={btnPressNextFour}><p>&gt;</p></button>
     <div class="product-containerfour">
     
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      
      
       

     </div>

    </div>
       




    <div  class="book-headingfifth">
        <h1> Kids Books</h1>

    </div>
    <div class="product-crouselfifth">
        <button class="pre-btn" onClick={btnPressPrevFifth}><p>&lt;</p></button>
        <button class="next-btn" onClick={btnPressNextFifth}><p>&gt;</p></button>
     <div class="product-containerfifth">
     
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      <div class="book-container">
      <img src="https://static.pw.live/5eb393ee95fab7468a79d189/84879316-dc3d-48cf-9b53-58bed31ec845.png"  cartno='1'/>
      </div>
      
      
       

     </div>

    </div>

    
    </>
)
}

export default about