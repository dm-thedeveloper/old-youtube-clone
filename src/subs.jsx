import './subs.css';
import sublogo from './solidlogo.jpg'
import { useState } from 'react';
import { paste } from '@testing-library/user-event/dist/paste';
function Subcribe(){

let [sub,ed]= useState(false);
let [like,setLike]=useState(false);
    return (<>
    <div className="thirdsection">   
     <div className="sub">
<h2 className="heading">FRACTURED REFLECTIONS - Psychological Thriller Short Film</h2>

<div className="sublogo">
<div className="loog">
 
 <img src={sublogo} alt="" /> <p className="filmmakers">The Solid Filmmakers</p> <div className="verify"><i class="fa-solid fa-check"></i></div> 
 <button onClick={()=>ed(!sub)} className={`${sub?"sed":"sued"}` }> {sub?<span>subscribed!</span>:<span> subscribe</span>}</button> <br /><p className='Million'> 104M subscribers</p> <br />
</div>
<div className="like">
<div className="lidis"> <button onClick={()=>setLike(!like)} className='D'>  {like?<i class="fa-solid fa-thumbs-up"></i>:<i class="fa-regular fa-thumbs-up"></i>} {like?<span >9M</span>:"8M"} </button>
 <button className='L'><i class="fa-regular fa-thumbs-down"></i></button></div>  
 <div className="share"><i class="fa-solid fa-share"></i> Share</div>

 <div className="share"><i class="fa-solid fa-arrow-down"></i> Download</div>
 <div className="share"><i class="fa-solid fa-scissors"></i> Clip</div>
 <div className="dots"><i class="fa-solid fa-ellipsis-vertical"></i></div>

 {/* <i class="fa-solid fa-scissors"></i> */}
</div>
</div>

    </div>

    <div className="video">



    </div>
    </div>


    </>)
}

export {Subcribe}