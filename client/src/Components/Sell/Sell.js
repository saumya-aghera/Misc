import React, { useState, useForm } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Sell.css'
import { FiArrowLeft } from "react-icons/fi";
import FileBase from 'react-file-base64'

function Sell (){
  const navigate = useNavigate();
  const [sellback, setsell] = useState({
    type: '',
    price: '',
    quantity: '',
    number: '',
    address: '',
    photo: ''
    //image: ''
  });
  const handleSubmit = (e) => {
    e.preventdefault();
    const formData = new formData();
    formData.append('photo',sellback.photo)
    formData.append('type',sellback.type)
    formData.append('price',sellback.price)
    formData.append('quantity',sellback.quantity)
    formData.append('number',sellback.number)
    formData.append('address',sellback.address)

    axios.post('http://localhost:5000/api/add', formData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  // const createsell =  () => {
  //     const post = {
  //       ...sellback,
  //     };
  //     axios.post('http://localhost:5000/api/add', post);
  //     console.log(`Form submitted: `,sellback);
  //     setsell({
  //       type: '',
  //       price: '',
  //       quantity: '',
  //       number: '',
  //       address: '',
  //       photo: ''
  //       //image: ''
  //     });
    
  // }
  // const history = useNavigate();
    return (
        <div className='Sell-Main'>
           
              <div onClick={() => navigate(-1)} className="backicon">
                    <FiArrowLeft/>
                </div>
            
            
            <div className='Sell-submain'>
            
                <div className='form-sell'>

                    <form>
                    {/* <h2 className='sell-text'>Sell</h2> */}
                    <select 
                        value={sellback.type}
                        onChange={(event) => {
                          setsell({ ...sellback, type: event.target.value })
                        }} >
                        <option value="">Type of Furniture</option>
                        <option value="Chairs">Chairs</option>
                        <option value="Tables">Tables</option>
                        <option value="Couches">Couches</option>
                    </select>
                    <input type="text"
                      placeholder="Price"
                      value={sellback.price}
                      onChange={(event) => {
                        setsell({ ...sellback, price: event.target.value })}}/>
                    <input type="text"
                      placeholder="Quantity"
                      value={sellback.quantity}
                      onChange={(event) => {
                        setsell({ ...sellback, quantity: event.target.value })}}/>
                    <input type="tel"
                      placeholder="Contact Number"
                      value={sellback.number}
                      onChange={(event) => {
                        setsell({ ...sellback, number: event.target.value })}}/>
                    <textarea placeholder="Pickup from" 
                        value={sellback.address}
                        onChange={(event) => {
                          setsell({ ...sellback, address: event.target.value })
                        }}  />
                        <input type="file"
                          accept=".jpg, .png, .jpeg"
                          name="photo"
                          value={sellback.photo}
                          onChange={(event) => {
                            setsell({ ...sellback, photo: event.target.value[0] })
                          }}

                        />
                        {/* <div className="fileInput"><FileBase type="file" onDone={({ base64 }) => setsell({ ...sellback, selectedFile: base64 })} /></div> */}
                    <button className="btn-submit" type="submit" onClick={handleSubmit}>
                      Submit
                    </button>
                    </form>
                </div>
                
            </div>
        </div>
    );
}

export default Sell