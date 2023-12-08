import './styles.css';
import {FiLogOut} from 'react-icons/fi';
import {FaReply} from 'react-icons/fa';
export default function Head({title}){


   return(
    <div className="head">
  <FaReply size={24} color='blue'/>
        <h2>{title}</h2>
    <FiLogOut size={24} color='red'/>
    </div>
   )    
}