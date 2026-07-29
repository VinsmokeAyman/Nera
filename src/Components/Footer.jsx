import React from 'react'
import Insta from '../Img/icons8-instagram-96.png'
import LinkedIn from '../Img/icons8-linkedin-96.png'

import { motion } from 'framer-motion';

function Footer() {
  return (
    <div className='SecondPartDiv' style={{backgroundColor:'#0F3526',marginTop:'-0',padding:'30px 0',alignItems:'center'}}>
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',alignItems:'flex-start',justifyContent:'space-around',width:'100%',height:'100%'}}>
            <div className='FooterElements'>
                <p className='Title' style={{fontSize:'16px',marginLeft:'0',padding:'0',margin:'0',padding:'0',margin:'0px 0 4px 0',fontWeight:'bold',color:'#fff'}}>Company</p>
                <div style={{width:'50px',height:'2px',backgroundColor:'#94A59E'}}></div>
                <a href="" className='Title' style={{marginLeft:'0' ,fontSize:'16px',color:'#fff',opacity:'0.6',padding:'0',margin:'25px 0 0 0',textDecoration:'none'}}>About</a>
                <a href="" className='Title' style={{marginLeft:'0' ,fontSize:'16px',color:'#fff',opacity:'0.6',padding:'0',margin:'25px 0 0 0',textDecoration:'none'}}>Our services</a>
                <a href="" className='Title' style={{marginLeft:'0' ,fontSize:'16px',color:'#fff',opacity:'0.6',padding:'0',margin:'25px 0 0 0',textDecoration:'none'}}>Privacy policy</a>
                <a href="" className='Title' style={{marginLeft:'0' ,fontSize:'16px',color:'#fff',opacity:'0.6',padding:'0',margin:'25px 0 0 0',textDecoration:'none'}}>Affiliate program</a>
            </div>
            <div className='FooterElements'>
                <p className='Title' style={{fontSize:'16px',marginLeft:'0' ,padding:'0',margin:'0px 0 4px 0',fontWeight:'bold',color:'#fff'}}>Get Help</p>
                <div style={{width:'50px',height:'2px',backgroundColor:'#94A59E'}}></div>
                <a href="" className='Title' style={{marginLeft:'0' ,fontSize:'16px',color:'#fff',opacity:'0.6',padding:'0',margin:'25px 0 0 0',textDecoration:'none'}}>FAQ</a>
                <a href="" className='Title' style={{marginLeft:'0' ,fontSize:'16px',color:'#fff',opacity:'0.6',padding:'0',margin:'25px 0 0 0',textDecoration:'none'}}>Contact</a>
                <a href="" className='Title' style={{marginLeft:'0' ,fontSize:'16px',color:'#fff',opacity:'0.6',padding:'0',margin:'25px 0 0 0',textDecoration:'none'}}>Forum</a>
            </div>
            <div className='FooterElements'>
                <p className='Title' style={{fontSize:'16px',marginLeft:'0' ,padding:'0',margin:'20px 0 4px 0',fontWeight:'bold',color:'#fff'}}>Partners</p>
                <div style={{width:'50px',height:'2px',backgroundColor:'#94A59E'}}></div>
                <a href="" className='Title' style={{marginLeft:'0' ,fontSize:'16px',color:'#fff',opacity:'0.6',padding:'0',margin:'25px 0 0 0',textDecoration:'none'}}>Sidi Rabi</a>
            </div>
            <div className='FooterElements'>
                <p className='Title' style={{fontSize:'16px',marginLeft:'0' ,padding:'0',margin:'20px 0 4px 0',fontWeight:'bold',color:'#fff'}}>Follow Us</p>
                <div style={{width:'50px',height:'2px',backgroundColor:'#94A59E'}}></div>
                <div className='logos' style={{margin:'0',marginTop:'30px'}}>
                    <motion.a href='https://www.facebook.com/profile.php?id=100004239858170'><motion.img whileHover={{y:-4}} transition={{duration:0.1,ease:'linear'}} src={LinkedIn} style={{width:'25px',marginRight:'15px'}} alt="" /></motion.a>
                    <motion.a href='https://www.instagram.com/___ayman_laqlii____/'><motion.img whileHover={{y:-4}} transition={{duration:0.1,ease:'linear'}} src={Insta} style={{width:'25px',marginRight:'15px'}} alt="" /></motion.a>
                </div>
            </div>
        </div>
        <div style={{height:'1px', width:'95%',backgroundColor:'#007E7E',opacity:'0.5',margin:'20px 0'}}></div>
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',alignItems:'flex-start',justifyContent:'space-between',width:'100%',height:'100%'}}>
            <p className='Title' style={{padding:'0',margin:'0px 0 0px 30px',fontSize:'16px',color:'#fff',opacity:'0.6',textDecoration:'none',minWidth:'350px'}}>© 2026 NERA. All rights reserved.</p>
            <p className='Title' style={{padding:'0',margin:'0px 0 0px 30px' ,fontSize:'16px',color:'#fff',opacity:'0.6',marginTop:'25px',textDecoration:'none',minWidth:'350px',textAlign:'end'}}>Num: +212661083744</p>
        </div>
    </div>
  )
}

export default Footer