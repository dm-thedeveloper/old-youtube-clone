import log from './logo.png';
import holly from './holly.jpg';
import './d.css'
import { useState } from 'react';
import { findByLabelText } from '@testing-library/react';

function Nav(){

let [slide,setSlide]=useState(false);
    return(<>

    <nav>    
        <div className="logo">  <button onClick={()=>setSlide(true)} className='bars' ><i class="fa-solid fa-bars"></i></button>  <img src={log} alt="jjj" /> <span className='pk'> <sub>pk</sub></span></div>
        <div className="serach"> <div className="serch"> <input type="text" /> <div className='Xmark'> <i> &times;</i></div><div className="srcicon"><i class="fa-solid fa-magnifying-glass"></i></div></div> <div className="audio"> </div> </div>
        <div className="notifications"> <div className="camera"> <i class="fa-regular fa-file-video"></i></div> <div className="notificatiosn"> <i class="fa-regular fa-bell"></i><sup>9+</sup> </div> <div className="loged"> <img src={holly} alt="" /></div></div> 
    </nav>
    <div className={`layer ${slide?"layerClz":""}`}></div>

    <div className={`slide ${slide?"slideAcrive":""}`}> <button onClick={()=>setSlide(false)}>X</button> 
    
    <ul>
        <li>
            Menue

        </li>
        <li>
            contact
        </li>
        <li> subscriptions</li>
    </ul>
    </div>

   
    
    </>)
}



export {Nav}