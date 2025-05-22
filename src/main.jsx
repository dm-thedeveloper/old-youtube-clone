import './main.css';
import vid1 from './vid1.jpg';
import s1 from './s1.jpg';
import s2 from './s2.jpg'
import  s5 from './s5.jpg';
import slogo from './shorts.png' 
function Main(){

    return(<>
    
  <section>
    
        <div className="screen">
        <iframe  src="https://www.youtube.com/embed/RGis_QYYYFA?si=mkYNlDQP8oVDeNfH" title="YouTube video player" youtube-nocookie frameborder="0" allow=" autoplay;   
        " allowfullscreen showinfo="0"  controls="0" ></iframe>

        </div>
        <div className="shorts">
            <div className="patti"> <div className="all">All</div>
            <div className="from"> From The Solid Filmmakers</div>
            <div className='related'> Realated</div>
            <div className='lft'><i class="fa-solid fa-chevron-right"></i>

            </div>
            </div>


<div className="vid1">
    <div className="img">
    <span className='time'>2:11</span>
        <img src={vid1} alt="" />
   
    </div>
<div className="content"> 
<p className="tilt">
The Joker | Action Thriller Short   <i class="fa-solid fa-ellipsis-vertical"></i>  Film
<br /> <span className='CN'>The Solid Filmmakers <span className="verifi"><i class="fa-solid fa-check"></i></span></span> 
<br /> <span className='CN'> 33M views <sup><b>.</b></sup> 7 months ago </span>
</p>
</div>
</div>
<hr />
<div className="slogo">
<img src={slogo} alt="" /> <h3>Shorts</h3>

    </div>
<div className="shortvid">
   
<div className="svid1">
<img src={s1} alt="" /> 
<p className='cP'><span className='cap'>
The Bag - An <span style={{color:"white"}}>____</span><i class="fa-solid fa-ellipsis-vertical"></i> <br />Action  Film.... <br /></span> <span style={{color:" rgba(0, 0, 0, 0.5)",fontSize:"13px"}}>44.7M views</span></p>
 </div>

 <div className="svid1">
<img src={s2} alt="" /> 
<p className='cP'><span className='cap'>
Pathan Teaser<span style={{color:"white"}}>____</span><i class="fa-solid fa-ellipsis-vertical"></i>Out  Now | SRK..<br /></span> <span style={{color:" rgba(0, 0, 0, 0.5)",fontSize:"13px"}}>81.3M views</span></p>
 </div>
 <div className="svid1">
<img src={s5} alt="" /> 
<p className='cP'><span className='cap'>
Gangubai <span style={{color:"white"}}>_______</span> <i class="fa-solid fa-ellipsis-vertical"></i> Kathiawadi Best..<br /></span> <span style={{color:" rgba(0, 0, 0, 0.5)",fontSize:"13px"}}>13.9M views</span></p>
 </div>
</div>



        </div>

  </section>
    
    
    </>)
}
export {Main}