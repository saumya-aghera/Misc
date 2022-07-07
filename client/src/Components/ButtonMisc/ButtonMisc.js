import './ButtonMisc.css';
import Sell from '../Sell/Sell';
import Buy from '../Buy/Buy';

const onClick=(route)=>()=>{window.location.href=route}
const ButtonMisc = ({ btntext }) => {
  return (
      <div className="button">
           <button className='btn-misc' onClick={onClick(btntext)}>{btntext}</button>
       </div>
  )
 
};
export default ButtonMisc;