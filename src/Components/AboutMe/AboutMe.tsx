import { SxProps } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Avatar, Typography } from '@mui/material';
import faceImg from '../../img/img/face1.jpg'
import Typewriter from "typewriter-effect";
import { useEffect, useState } from 'react';

// icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import classes from'../../SmokeAnimation.module.css'



const AboutMe = () => {
  const [popUpOn, setPopUpOn] = useState(false)
  const [backGroundAnimation, setBackGroundAnimation] = useState(false) 
  const [typeEnded, setTypeEnded] = useState(false) 
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  
  useEffect(() => {
    const interval = setInterval(() => {
      const target = new Date("05/20/2023 23:59:59")
      const now = new Date();
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      setHours(h)

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      setMinutes(m)
      const  s = Math.floor((difference % (1000 * 60)) / (1000))
      setSeconds(s)
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])



  useEffect(() => {
    const backGroundAnimationTimer = window.setTimeout(() => {
      backGroundAnimation ? setBackGroundAnimation(false) : setBackGroundAnimation(true)
    }, 8000)
    return () =>  clearTimeout(backGroundAnimationTimer);
  }, [backGroundAnimation]);

  useEffect(() => {
    window.setTimeout(() => {
      if( popUpOn) setPopUpOn(false)
    }, 5000);
  }, [popUpOn]);
  useEffect(() => {
    window.setTimeout(() => {
      if( !popUpOn) setPopUpOn(true)
    }, 20000);
  }, [popUpOn]);

  return (
    <Box sx={AboutBoxStyle}>
      <Box sx={aboutDiv}>
      <Box className={classes.fadeIn} sx={aboutMainPicBoxStyle} >
        <Avatar alt="Hazem Kawas" src={faceImg} sx={aboutMainPicStyle} />
      </Box>
      <Box sx={aboutInfo} className={classes['aboutInfo']} >
        <Box className="textBox">
      <Typography className={classes.aboutWelcome} sx={aboutWelcome}  >
         Welcome to my profile
        </Typography>
      <Typography sx={aboutMainText} className={classes.aboutMainText} >
      <Typewriter
              onInit={(typewriter)=> {
              typewriter
              .pauseFor(2000)
              .typeString(`Hello...<br />`)
              .pauseFor(100)
              .typeString(`I am <span className='aboutName'>Hazem Kawas</span>, a web developer based in Gothenburg-Sweden. <br />`)
              .pauseFor(300)
              .typeString(`Besides coding I love gaming and long walks with my dogs 🐕🐕. <br />`)
              // .typeString(`Life is a challenge, I like to make it easier when it comes to the web!. <br />`)
              .callFunction(() => {
                setTypeEnded(true); 
              })
              .start();
                }}
                />       
        </Typography>
        </Box>
        <Box sx={infoBox}>
          {typeEnded && 
          (
            <Box>
              <ul  className={classes.infoBox}>
                <li>AGE : <span>33</span> </li>
                <li>FREELANCE: <span>Available</span></li>
                <li>PHONE:<a href="tel:+46706211404"> <span>+46 706 211 404</span> </a></li>
                <li>E-MAIL: <span>hazem.k.4488@gmail.com</span> </li>
              </ul>
            </Box> 
          )}
        </Box>
       {typeEnded && (
         <Box sx={countDown} className={classes.fadeIn}>
          <Box className={classes.countDown}>
         <Typography>
           Time to be ready for work
         </Typography>
       <Typography sx={countDownText}>{days < 10 ?  '0' + days : days} : {hours < 10 ?  '0' + hours : hours} : {minutes < 10 ?  '0' + minutes : minutes} : {seconds < 10 ?  '0' + seconds : seconds }</Typography>
          </Box>
     </Box>
       )}
       
      </Box>
      </Box>
      {typeEnded && (
         <Box  sx={aboutIcons} className={classes.fadein}>
        
         <a target="_blank" rel="noreferrer" href="https://github.com/hazem-89"> <GitHubIcon sx={icons} /></a>
         <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hazem-kawas-66971b185/"> <LinkedInIcon  sx={icons}/></a>
         {/* <ContactMailIcon  sx={icons}/> */}
         
         
         </Box>
       )}
        {typeEnded && popUpOn ? <>
          <Box sx={popUp}>
          <Typography  sx={popUpText}>
            {/* Hello..!
            Lets get in touch */}
             <Box >
              {popUpOn ?  <Typewriter
              onInit={(typewriter)=> {
              typewriter 
              .typeString(`Lets get in touch!`)
              .pauseFor(1000)
              // .callFunction(() => {
              //   setTypeOn(true); 
              // })
              .start();
                }}
                /> : null
                    }
                    </Box>
          </Typography>
        </Box>
        </> : null}
      </Box>
  )
}

const AboutBoxStyle: SxProps = {
  width: { xs: '100%', md: '100%', lg: '100%' },
  paddingTop: { xs: '3em', md: '0em', lg: '0em' },
  paddingLeft: { xs: '0em', md: '2em', lg: '2em'},
}
const aboutDiv: SxProps = {
  display: 'flex',
  flexDirection: {xs: 'column', md: 'row', lg: 'row'},
  alignItems: 'center',
  paddingLeft: {xs: '0', md: '1em', lg: '1em'},
  position: 'relative',

}
const aboutMainText: SxProps = {
  width: { xs: '300px', md: '400px', lg: '400px', xl: '400px' },
  position: { xs: 'absolute', md: 'relative', lg: 'absolute', xl: 'absolute' },
  top: { xs: '7em', md: '0', lg: '0', xl: '5em' },
  left: { xs: '0em', md: '0', lg: '0', xl: '0' },
  zIndex: '1',
  textAlign: 'left',
  marginLeft: '1em',
  fontSize:  { xs: '12px', md: '0', lg: '0', xl: '1.1em' },
}
const aboutWelcome: SxProps = {
  width: { xs: '300px', md: '100%', lg: '100%', xl: '100%' },
  position: { xs: 'absolute', md: 'relative', lg: 'absolute', xl: 'absolute' },
  top: { xs: '2em', md: '10', lg: '0', xl: '1em' },
  left: { xs: '1em', md: '0', lg: '0', xl: '0' },
  zIndex: '1',
  fontSize:  { xs:'1em', md: '0', lg: '0', xl: '1.5em' },
}
const aboutMainPicBoxStyle: SxProps = {
  position: { xs: 'absolute', md: 'absolute', lg: 'absolute', xl: 'absolute' },
  top: { xs: '2em', md: '5em', lg: '10em', xl: '10em' },
  left: { xs: '1em', md: '35%', lg: '25%', xl: '25%' },
  transform: { xs: '0', md: 'translate(-50%, 0%)', lg: 'translate(-50%, 0%)', xl: 'translate(-50%, 0%)' },
  overflow: 'hidden',
}
const aboutMainPicStyle: SxProps = {
  width:  { xs: '200px', md: '300px', lg: '300px', xl: '400px' },
  height:  { xs: '200px', md: '300px', lg: '300px', xl: '400px' },
  overflow: 'hidden',
  zIndex: '0'
}


const aboutIcons: SxProps = {
  position: { xs: 'absolute', md: 'absolute', lg: 'absolute', xl: '' },
  bottom: { xs: '0em', md: '1em', lg: '1em', xl: '0' },
  left: { xs: '50%', md: '50%', lg: '50%', xl: '50%' },
  transform: { xs: 'translate(-50%, 0%)', md: 'translate(-50%, 0%)', lg: '0', xl: '0' },
  zIndex: '3',
  display: { xs: 'none', md: 'block', lg: 'block', xl: 'block' }
}
const icons: SxProps = {
  width:  { xs: '30px', md: '30px', lg: '40px' },
  height:  { xs: '30px', md: '30px', lg: '40px' },
  fill: '#DE5656',
  cursor: 'pointer',
}
const popUp: SxProps = {
  width: {xs: '100px', md: '150px', lg: '150px'},
  height: '50px',
  backgroundColor: '#fff',
  position: 'absolute',
  left: { xs: '50%', md: '50%', lg: '50%', xl: '48%' },
  bottom: { xs: '1.5em', md: '2em', lg: '2.5em', xl: '1em' },
  transform: { xs: 'translate(50%, -20%)', md: 'translate(+40%, -40%)', lg: 'translate(+40%, -40%)', xl: 'translate(+40%, -40%)' },
  borderRadius: '1em 1em  1em 0.1em',
  alignItems: 'center',
  zIndex: '6',
  border: '1px dashed #DE5656',
  userSelect: 'none',
  display: { xs: 'none', md: 'flex', lg: 'flex', xl: 'flex' }
}
const popUpText: SxProps = {
  color: 'rgb(141, 15, 15)',
  fontSize: '.9em',
  padding: '1em',
}

const aboutInfo: SxProps = {
  width: { xs: '380px', md: '500px', lg: '550px' },
  height: { xs: '400px', md: '400px', lg: '550px' },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '6',
  textAlign: 'center',
  position: 'absolute',
  left: { xs: '.5em', md: '30em', lg: '50em', xl: '50em'},
  top: { xs: '15em', md: '4px', lg: '5em', xl: '5em' },
  padding: { xs: '4px', md: '4px',  lg: '1em', xl: '1em' },
  fontWeight: 'bold',
  margin:{ xs: 'auto', md: '0', lg: '0' },

}
const countDown: SxProps = {
  zIndex: '1',
  position: 'absolute',
  right: { xs: '50%', md: '15em', lg: '15em', xl: '50%'},
  bottom: { xs: '.5em', md: '4px', lg: '5em', xl: '1em' },
  transform: 'translateX(50%)',
  fontWeight: '900',
  minWidth: '300px',
}
const countDownText: SxProps = {
 fontSize: { xs: '1em', md: '2em', lg: '2em', xl: '2em' }
}
const infoBox: SxProps = {
 width: '100%',
 fontFamily: `''Raleway', sans-serif'`,
 paddingTop: '6em',
 paddingLeft: '1em'
}



export default AboutMe