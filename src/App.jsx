import './App.css'
import PFP from './Img/No-PFP-13.jpg'
import Logo from './Img/Logo.png'
import Ultras from './Img/Ultras.jpeg'
import { useState,useEffect } from 'react'
import { motion } from "framer-motion"
import Insta from './Img/icons8-instagram-96.png'
import LinkedIn from './Img/icons8-linkedin-96.png'
import Ensat from './Img/ENSAT.png'
import ADE from './Img/ADE-ENSAT.png'
import Enactus from './Img/Enactus.JPEG'
import Cdh from './Img/CDH.png'
import Ensatronics from './Img/Ensatronics.png'
import EngineerCareer from './Img/EngineerCareer.jpeg'
import ClubSport from './Img/ClubSport.jpeg'
import CSC from './Img/CSC.jpeg'
import ISClub from './Img/ISClub.jpeg'
import TripleC from './Img/TripleC.jpeg'
import Bozar from './Img/Bozar.jpeg'
import Ensatpress from './Img/Ensatpress.png'
import Ensecrowd from './Img/Ensecrowd.jpeg'
import CIL from './Img/CIL.jpeg'
import Telecom from './Img/Telecom.png'
import TGD from './Img/TGD.jpeg'
import Footer from './Components/Footer'


function App() {

  const [SelectedHeader, setSelectedHeader] = useState(1);

  const Clubs = [{
    'name':'ENACTUS',
    'logo':Enactus,
  },
  {
    'name':'CDH',
    'logo':Cdh,
  },
  {
    'name':'ENSATRONICS',
    'logo':Ensatronics,
  },
  {
    'name':'ENGINEER CAREER CLUB',
    'logo':EngineerCareer,
  },
  {
    'name':'CLUB SPORT',
    'logo':ClubSport,
  },
  {
    'name':'CSC',
    'logo':CSC,
  },
  {
    'name':'IS CLUB',
    'logo':ISClub,
  },
  {
    'name':'TRIPLE C',
    'logo':TripleC,
  },
  {
    'name':'BOZAR',
    'logo':Bozar,
  },
  {
    'name':'ENSATPRESS',
    'logo':Ensatpress,
  },
  {
    'name':'ENSECROWD',
    'logo':Ensecrowd,
  },
  {
    'name':'CIL',
    'logo':CIL,
  },
  {
    'name':'TELECOM',
    'logo':Telecom,
  },
  {
    'name':'TGD',
    'logo':TGD,
  },
]

  const radius = 15; // The radius of the circular path in pixels
  const numPoints = 25; // More points = a smoother circle

  // Generate X and Y coordinates along a circle path
  const xPoints = Array.from({ length: numPoints + 1 }, (_, i) => {
    const angle = (i / numPoints) * 2 * Math.PI;
    return radius * Math.cos(angle);
  });

  const yPoints = Array.from({ length: numPoints + 1 }, (_, i) => {
    const angle = (i / numPoints) * 2 * Math.PI;
    return radius * Math.sin(angle);
  });


  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <img style={{width:'50px',margin:'0'}} src={Logo} alt="Profile" />
        </div>
        <nav className="nav">
          <ul>
            <div style={{display:'flex',flexDirection:'column'}}>
              <motion.li onClick={() => setSelectedHeader(1)} style={{color:SelectedHeader===1?'#0F3526':'#333'}} whileHover={{ y: -2, color:'#94A59E' }}>Home</motion.li>
              {SelectedHeader===1?<motion.div initial={{ width: 0 }} animate={{ width: '60px' }} transition={{duration:'0.1',ease:'linear'}} style={{height:'2px',backgroundColor:'#94A59E'}}></motion.div>:null}
            </div>
            <div style={{display:'flex',flexDirection:'column'}}>
              <motion.li onClick={() => setSelectedHeader(2)} style={{color:SelectedHeader===2?'#0F3526':'#333'}} whileHover={{ y: -2, color:'#94A59E' }}>Documentation</motion.li>
              {SelectedHeader===2?<motion.div initial={{ width: 0 }} animate={{ width: '120px' }} transition={{duration:'0.1',ease:'linear'}} style={{height:'2px',backgroundColor:'#94A59E'}}></motion.div>:null}
            </div>
            <div style={{display:'flex',flexDirection:'column'}}>
              <motion.li onClick={() => setSelectedHeader(3)}  style={{color:SelectedHeader===3?'#0F3526':'#333'}} whileHover={{ y: -2, color:'#94A59E' }}>Reclamation</motion.li>
              {SelectedHeader===3?<motion.div initial={{ width: 0 }} animate={{ width: '100px' }} transition={{duration:'0.1',ease:'linear'}} style={{height:'2px',backgroundColor:'#94A59E'}}></motion.div>:null}    
            </div>
            <div style={{display:'flex',flexDirection:'column'}}>
              <motion.li onClick={() => setSelectedHeader(4)} style={{color:SelectedHeader===4?'#0F3526':'#333'}} whileHover={{ y: -2, color:'#94A59E' }}>Parascolaire</motion.li>
              {SelectedHeader===4?<motion.div initial={{ width: 0 }} animate={{ width: '90px' }} transition={{duration:'0.1',ease:'linear'}} style={{height:'2px',backgroundColor:'#94A59E'}}></motion.div>:null}
            </div>
            <div style={{display:'flex',flexDirection:'column'}}>
              <motion.li onClick={() => setSelectedHeader(5)} style={{color:SelectedHeader===5?'#0F3526':'#333'}} whileHover={{ y: -2, color:'#94A59E' }}>Profile</motion.li>
              {SelectedHeader===5?<motion.div initial={{ width: 0 }} animate={{ width: '50px' }} transition={{duration:'0.1',ease:'linear'}} style={{height:'2px',backgroundColor:'#94A59E'}}></motion.div>:null}
            </div>
          </ul>
        </nav>
        <div className="profile">
          <img style={{width:'50px',height:'50px'}} src={PFP} alt="Profile" />
        </div>
      </header>
      <div style={{display:'flex',flexDirection:'column',overflowX:'hidden',alignItems:'center',}}>
        <div style={{height:'calc(95vh)'}} className='First'>
            <motion.div initial={{ opacity: 0, x: -65 }} animate={{ opacity: 1, x: 0 }} transition={{duration:0.3,ease:'linear',}} style={{display:'flex',flex:'1',flexDirection:'column',justifyContent:'center',height:'70vh'}}>
                <div style={{display:'flex',position:'relative',flexDirection:'column',alignItems:'flex-start',margin:'85px 0 30px 120px'}}>
                    <p  className='Title' style={{fontSize:'50px',fontWeight:'bold',margin:'0 0 30px 0',lineHeight:'1',color:'#000'}} ><span style={{color:'#0F3526'}}>NERA</span>. <br />The <span style={{color:'#0F3526'}}>N</span>ew <span style={{color:'#0F3526'}}>ERA</span>.</p>
                    <p  className='Title' style={{fontSize:'22px',fontWeight:'400',margin:'0 0 40px 0',color:'#68788A',width:''}}>Discuss your problems, receive important updates, and manage your school life easily for a more organized, successful future.</p>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <button className='LogBut' style={{backgroundColor:'#0F3526',height:'50px'}}>
                            <p  className='Title' style={{fontSize:'14px',padding:'0',margin:'0',color:'#fff'}} >Get Started Today</p>
                        </button>
                        <button className='LogBut' style={{backgroundColor:'#94A59E',height:'50px',marginLeft:'25px',border:'2px solid #F0F0F0'}}>
                            <p  className='Title' style={{fontSize:'14px',padding:'0',margin:'0',color:'#0F3526'}} >Our Team →</p>
                        </button>
                    </div>    
                    <div style={{display:'flex',position:'absolute',bottom:'-90px',flexDirection:'row',margin:'40px 0 0 0'}}>
                        <motion.button whileHover={{y:-2}} className='LogBut' style={{backgroundColor:'#0F3526',height:'40px',width:'40px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <img src={Insta} style={{width:'24px',height:'24px'}} alt="Instagram" />
                        </motion.button>
                        <motion.button whileHover={{y:-2}} className='LogBut' style={{backgroundColor:'#0F3526',height:'40px',width:'40px',display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'10px'}}>
                            <img src={LinkedIn} style={{width:'24px',height:'24px'}} alt="LinkedIn" />
                        </motion.button>
                    </div>      
                </div>  
                         
            </motion.div>
            <div style={{flex:'1.4'}}>
                <motion.div initial={{ opacity: 0,x: 65 }} animate={{ opacity: 1,x:0 }} transition={{ duration: 0.3 }} className='Div1'>
                    <motion.img 
                    animate={{
                      x: xPoints,
                      y: yPoints,
                      //scale: [1, 1.01, 1, 0.99, 1],
                    }}

                    transition={{
                      duration: 8,           // Time to complete one full triangle loop
                      ease: "linear",        // Keeps the speed constant along the path
                      repeat: Infinity,      // Loops forever
                      repeatType: "loop",
                    }}
                    src={Ultras} alt="" style={{width:'80%',borderRadius:'10px',marginTop:'60px',boxShadow:'0 6px 10px rgba(0,0,0,0.4)'}} className=''/>
                    
                </motion.div>            
            </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',width:'100vw',backgroundColor:'#94A59E'}}>
            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} style={{display:'flex',width:'100%',flexDirection:'column',alignItems:'center'}}>
                <p className='Title' style={{color:'#F6F6F6',fontSize:'28px',margin:'40px 0 5px 0',fontWeight:'600',padding:'0px 0'}}>ENSAT</p>
                <motion.div initial={{ width: 0 }} animate={{ width: '80px' }} transition={{duration:'0.1',ease:'linear'}} style={{height:'2px',backgroundColor:'#F6F6F6',}}></motion.div>
            </motion.div>
            <div style={{display:'flex',flexDirection:'row',margin:'50px 0 90px 0',width:'100%',alignItems:'center'}}>
                <div style={{display:'flex',flexDirection:'column',width:'300px',height:'300px',alignItems:'center',justifyContent:'center',flex:'1'}}>
                    <motion.div  initial={{ opacity: 0, x: -65 }} whileInView={{ opacity: 1, x: 0 }} transition={{duration:0.3,ease:'linear',}} style={{display:'flex',width:'300px',height:'300px',alignItems:'center',justifyContent:'center',backgroundColor:'#F6F6F6',borderRadius:'50%'}}>
                      <img src={Ensat} alt="" />
                    </motion.div>
                </div>
                <div style={{display:'flex',flexDirection:'column',width:'300px',height:'300px',alignItems:'center',justifyContent:'center',flex:'2.5'}}>
                    <motion.p initial={{ opacity: 0, x: 65 }} whileInView={{ opacity: 1, x: 0 }} transition={{duration:0.3,ease:'linear',}} className='Title' style={{fontSize:'20px',lineHeight:'1.6',color:'#F6F6F6',textAlign:'justify',padding:'0',margin:'0 50px 0 0'}}>Créée en 1998 en partenariat  avec l'INSA de Lyon (France) et la Faculté des Sciences & Techniques (FST) de Tanger, l'Ecole Nationale des Sciences Appliquées de Tanger (ENSA Tanger) est un établissement public relevant de l'Université Abdelmalek Essaâdi  et a pour mission de former des Ingénieurs d'Etat pluri-compétents, et innovants. L'ENSA Tanger conduit une politique d'excellence déclinée à tous les niveaux. Première des ENSA du Maroc a être créée avec une forte ambition d'ouverture sur l'environnement socio-économique, l' ENSA Tanger se fixe aujourd'hui un nouveau défi : renforcer et consolider son positionnement parmi les meilleurs établissements d'enseignement supérieur technologiques du Maroc.</motion.p>
                </div>
            </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',width:'100vw',backgroundColor:'#F6F6F6'}}>
            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} style={{display:'flex',width:'100%',flexDirection:'column',alignItems:'center'}}>
                <p className='Title' style={{color:'#94A59E',fontSize:'28px',margin:'40px 0 5px 0',fontWeight:'600',padding:'0px 0'}}>Association Des Etudiants</p>
                <motion.div initial={{ width: 0 }} animate={{ width: '320px' }} transition={{duration:'0.1',ease:'linear'}} style={{height:'2px',backgroundColor:'#94A59E',}}></motion.div>
            </motion.div>
            <div style={{display:'flex',flexDirection:'row-reverse',margin:'50px 0 90px 0',width:'100%',alignItems:'center'}}>
                <div style={{display:'flex',flexDirection:'column',width:'300px',height:'300px',alignItems:'center',justifyContent:'center',flex:'1'}}>
                    <motion.div initial={{ opacity: 0, x: 65 }} whileInView={{ opacity: 1, x: 0 }} transition={{duration:0.3,ease:'linear',}} style={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#F6F6F6'}}>
                      <img style={{width:'300px',height:'300px'}} src={ADE} alt="" />
                    </motion.div>
                </div>
                <div style={{display:'flex',flexDirection:'column',width:'300px',height:'300px',alignItems:'center',justifyContent:'center',flex:'2.5'}}>
                    <motion.p initial={{ opacity: 0, x: -65 }} whileInView={{ opacity: 1, x: 0 }} transition={{duration:0.3,ease:'linear',}} className='Title' style={{fontSize:'20px',lineHeight:'1.6',color:'#333',textAlign:'justify',padding:'0',margin:'0 50px 0 80px'}}>L’ADE Tanger (Association Des Étudiants de l’ENSA de Tanger) est l’organe d’organisation, de représentation et d’animation au sein de l’École Nationale des Sciences Appliquées de Tanger. Elle sert de pont essentiel entre l'administration, le corps professoral et les étudiants, tout en coordonnant la vie associative de l'école. <br />Être à l'ADE, c'est s'engager à bâtir une communauté estudiantine soudée, dynamique et tournée vers l'avenir. C'est l'opportunité pour chaque étudiant de développer son potentiel de manager, de travailler en équipe et de marquer l'histoire de l'école en apportant de nouvelles idées et des projets ambitieux (proposer une "nouvelle ère" d'initiatives).</motion.p>
                </div>
            </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',width:'100vw',backgroundColor:'#94A59E'}}>
            <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} style={{display:'flex',width:'100%',flexDirection:'column',alignItems:'center'}}>
                <p className='Title' style={{color:'#F6F6F6',fontSize:'28px',margin:'40px 0 5px 0',fontWeight:'600',padding:'0px 0'}}>Nos Clubs</p>
                <motion.div initial={{ width: 0 }} animate={{ width: '120px' }} transition={{duration:'0.1',ease:'linear'}} style={{height:'2px',backgroundColor:'#F6F6F6',}}></motion.div>
            </motion.div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',margin:'50px 0 90px 0',width:'100%',padding:'0 80px',alignItems:'center',flexWrap:'wrap',}}>
                {Clubs.map((club,index)=>(
                    <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -10,transition:{duration:0.1,ease:'linear'},transitionDelay:0.1 }} transition={{duration:0.3,ease:'linear'}} className='hoverCard' style={{display:'flex',flexDirection:'column',borderRadius:'15px',backgroundColor:'#B7C3BE',width:'200px',height:'250px',alignItems:'center',margin:'0 20px 20px 0'}}>
                        <img src={club.logo} style={{width:'130px',height:'130px',borderRadius:'50%',margin:'20px 0 0 0 ',objectFit:'cover'}} alt={club.name} />
                        <p className='Title' style={{color:'#F6F6F6',textAlign:'center',fontSize:'20px',margin:'20px 0 5px 0',fontWeight:'600',padding:'0px 0'}}>{club.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
  
export default App
