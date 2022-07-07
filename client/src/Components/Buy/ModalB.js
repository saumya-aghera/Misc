import React from 'react'
import './ModalB.css'
const ModalB = ({quantity,number,address}) => {
        return (
            <div className='modal-txt'>
     <h2>Contact the Seller Now</h2>   
     <p>_________________</p>
    
     
      <p>Quantity: {quantity} <br></br>Contact Number: {number} <br></br>
      Address: {address}</p>
            </div>
        )

};


export default ModalB;