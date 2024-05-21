import React from 'react'
import './Content.css'
import symbol from '../Images/MotionArtEffect-logo.png';
import img1 from '../Images/motionarteffect-img2.png';
import img2 from '../Images/motionarteffect-img1.png';
import img3 from '../Images/motionarteffect-img3.png';
import stars from '../Images/motionarteffect-img4.png';
import stick from '../Images/motionarteffect-img5.png';
import arrow from '../Images/arrow.png';
import section from '../Images/motionarteffect-img11.png';
import page from '../Images/motionarteffect-img10.png';
import browsers from '../Images/motionarteffect-img8.png';
import weight from '../Images/motionarteffect-img9.png';
import response from '../Images/motionarteffect-img6.png';
import friendly from '../Images/motionarteffect-img7.png';

const Content = () => {
  return (
    <>
    <div className='content'>
    <div className='top'>
        <img className='symbol' src={symbol} alt='symbol'/>
        <button className='purchase'>Purchase Now</button> 
    </div>

<div className='topic'>
    <div className='start'>
            <span className='line1'>Transform</span>
            <span className='line2'>Your Website</span>
            <span className='line3'>With Motion</span>
            <span className='line4'>Art Effect</span>
    </div>
<div className='center'>
    <h1 className='attract1'>Attract Your Visitors</h1>
    <h1 className='attract2'>Attention With Colorful</h1>
    <h1 className='attention'>Motion Art Effect</h1>
    <div className='pa'>
    <p className='para'>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution</p>
   <p className='para2'>for seamlessly integrating captivating animations into your website. </p>
   </div>
</div>
</div>


<p className='rev_para'>Trusted by thousands of users around the world</p>

<div className='ratings'>
  <div className='rat1'>
    <img className='img' src={img1} alt='icon'/>
    <div className='rev'>
    <img className='star' src={stars} alt=''></img>
    <p>4.5 Score, 9 Reviews</p>
    </div>
  </div>

  <div className='rat2'>
    <img className='img2' src={img2} alt='icon'/>
    <div className='rev'>
    <img className='star' src={stars} alt=''></img>
    <p>4.5 Score, 9 Reviews</p>
</div>
  </div>

  <div className='rat3'>
    <img className='img' src={img3} alt='icon'/>
    <div className='rev'>
    <img className='star' src={stars} alt=''></img>
    <p>4.5 Score, 9 Reviews</p>
</div>
  </div>
</div>

<div className='mid'>
  <div className='pass'>
<h1 className='turn'>Turn Your Cursor Into A Colorful Magic</h1>
<h1 className='turn2'>Wand & Charm Your Visitors</h1>
<p className='first'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse</p>
<p className='second'>your website with visually stunning motion art elements.</p>
<button className='button'>
  <div className='but'>
    <p>Purchase From Envato</p>
    <img className='arrow' src={arrow} alt=''/>
  </div>
</button>
</div>
<img className='stick' src={stick} alt=''/>
</div>

<div className='app'>
  <h1 className='apply'>Apply On Any Section Or Enable For</h1>
  <h1 className='apply2'>Whole Page</h1>
  </div>

  <div className='sections'>
    <button className='sec_but'>
      <h1 className='sec_h'>Apply On Section</h1>
      <p className='sec_p'>Apply on section is a game-changer, offering an unparralleled way to</p>
      <p className='sec_p2'>manage applications directly from your website.</p>
      <img className='sec_img' src={section} alt=''></img>
    </button>

    <button className='page_but'>
      <h1 className='page_h'>Apply On Page</h1>
      <p className='page_p'>Take your website to new heights with Motion Art for Elementor.</p>
      <p className='page_p2'>Embrace the power of motion and animation.</p>
      <img className='page_img' src={page} alt=''></img>
    </button>
  </div>

  <button className='browser'>
    <h1 className='brow_h'>Supported by All Popular Browsers</h1>
    <p className='brow_p1'>Rest assured, Motion Art is designed to be compatible</p>
    <p className='brow_p2'>with all major web browsers.</p>
    <img className='brow_img' src={browsers} alt=''/>
  </button>
   
  <div className='fin-container'>
  <h1 className='fin_h1'>An All-Round Plugin With Powerful</h1>
  <h1 className='fin_h2'>Features</h1>
</div>

  <p className='fin_p1'>Whether you're a seasoned web designer or just starting out, Motion Art for</p>
  <p className='fin_p2'>Elementor seamlessly integrates with the Elementor platform, providing you</p>
  <p className='fin_p3'>with a seamless and intuitive experience.</p>

  <div className='prop'>
    <button className='weigh'>
      <img className='prop_icon' src={weight} alt=''/>
      <h1 className='prop_h1'>Light Weight</h1>
      <p className='prop_p1'>Motion Art for Elementor is designed to </p>
      <p className='prop_p2'>be lightweight.</p>
    </button>

    <button className='resp'>
      <img className='prop_icon' src={response} alt=''/>
      <h1 className='prop_h1'>100% Responsive</h1>
      <p className='prop_p1'>Create a consistent visual experience</p>
      <p className='prop_p2'>across all devices.</p>
    </button>

    <button className='user'>
      <img className='prop_icon' src={friendly} alt=''/>
      <h1 className='prop_h1'>User Friendly Interface</h1>
      <div className='text-container'>
    <p className='prop_p1'>Ensure a smooth experience for both</p>
    <p className='prop_p2'>applicants and administrators.</p>
  </div>
    </button>
  </div>

    </div>
    </>
  )
}

export default Content
