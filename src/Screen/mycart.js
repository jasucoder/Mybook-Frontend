import React from 'react'
import '../Styless/mycart.css'

const mycart = (props) => {
  return (
    <div class="mycart">
      Mycart No. {props.cartno}
    </div>
  )
}

export default mycart
