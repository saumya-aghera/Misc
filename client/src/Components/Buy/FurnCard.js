import React,{useState} from 'react';
import cardpic from '../../images/cardpic.jpg'
import './FurnCard.css';
import Modal from 'react-modal';
import ModalB from './ModalB.js';
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor       : 'white',
      //backgroundColor       : 'rgb(0, 106, 75, 0.7)',
      paddingRight          : '70px',
      paddingLeft           : '70px',
      paddingTop            : '80px',
      paddingBottom         : '80px',
      border                : '0.5px solid gray'
    }
};
const FurnCard = (props) => {
    const item  = props.item;
    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    return(
        <div className="card-container">
            <img src={item.selectedFile || cardpic} className="cardpic" alt="" />
            <div className="desc">                    
                <h4> {item.type}</h4>   
                <p>Price: {item.price}</p>   
                <button onClick={setModalIsOpenToTrue} className="modal-btn">Details</button>
                <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)} >
                {/* <button onClick={setModalIsOpenToFalse}></button> */}
                <ModalB quantity={item.quantity} number={item.number} address={item.address}/>
                {/* <ModalB content={[item.number,item.address]}/> */}
            </Modal>
       

                {/* <button onClick={() => this.getModal(item)}>Popup</button>           */}
                {/* <p>Contact No.: {item.number}</p>
                <p>Address: {item.address}</p> */}
            </div>
            {/* <Modal
          show={this.state.showModal}
          onHide={this.hideModal}
          number={this.state.dataModal.number}
        /> */}
        </div>
    )
};

export default FurnCard;