/* eslint-disable react/jsx-no-comment-textnodes */
import Box, { BoxProps } from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled, SxProps } from '@mui/material/styles';
import { Avatar, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

//Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { useEffect, useState } from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Experiences from '../Experiences/Experiences';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import {Contact} from '../ContactMe/Contact';
// img
// import ballon from '../../img/img/clouds/newBallon2.png'
import cloud1 from '../../img/img/clouds/cloud1.png'
import cloud2 from '../../img/img/clouds/cloud2.png'
import cloud3 from '../../img/img/clouds/cloud3.png'
import cloud4 from '../../img/img/clouds/cloud4.png'
import cloud5 from '../../img/img/clouds/cloud5.png'
import Experiencefrom from '../../img/experience1.png'
// import cloud6 from '../../img/img/clouds/cloud6.png'
import bigCloud from '../../img/img/clouds/bigCloud.png'
import backgroundImage from '../../img/img/clouds/sky-background.jpg'
// import Ballon from '../../img/SVG/Baloon';
import './MainPage.css'



const NavBar = () => {
  const [activePage, setActivePage] = useState('About');
  const [smokeFilter, setSmokeFilter] = useState(false);

  const LayoutBox = styled(Box)<BoxProps>(({ theme }) => ({
    color: theme.palette.getContrastText(blueGrey[900]),
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    zIndex: '99999',
  }));
  const loadingAnimation = () => {
    setSmokeFilter(true)
  }
    useEffect(() => {
    setTimeout(() => {if( smokeFilter) setSmokeFilter(false)}, 500)
    }, [smokeFilter]);
  
  
  return (
    <>
    <Box>
    {
     !smokeFilter ?  
      <Box sx={ballonBox} className=
      {
        activePage === 'Contact' ? 
        'ballonBoxHom'  : 'none'
        
        }>
        <Box className="ballon-big-box">
      {/* <img className='balloon-img' src={ballon} alt="avatar" /> */}
      {/* <Box className="ballon-text">
        Sone text
      </Box> */}
      </Box>
    </Box> 
    : null
    
    }
    
    {!smokeFilter ? 
    <Box>
    <Box  sx={cloudBox} className= 'cloudBox'>
          <img  src={cloud1}  alt="" />
          <img  src={cloud2}  alt="" />
          <img  src={cloud3}  alt="" />
          <img  src={cloud4}  alt="" />
          <img  src={cloud5}  alt="" />
        </Box>
        
        <Box  sx={bigCloudBox} className='BigCloudBox'>
          <img  src={bigCloud}  alt="" />
        </Box>
        </Box>
    : null }        
    <LayoutBox>
    
    <Box sx={NavBox}  >
    <Box >
    <Stack spacing={2}>
    <Box sx={NaveBoxInner}>
      <Box onClick={() => {
        setActivePage('About')
        loadingAnimation()
        }}
        sx={iconRoot}
        >
    <Box  sx={AvatarBox} className={smokeFilter ? 'nave-items' : 'fadein iconTest'}>
      <Avatar sx={{ bgcolor: 'rgba(46, 189, 189, 0.767)' }} className={smokeFilter ? 'filter' : 'nav-avatar'} ><HomeOutlinedIcon className='nav-icon'/></Avatar >
      <Typography className='nav-text ' >About</Typography>
    </Box>
      </Box>
      <Box  onClick={() => {
        loadingAnimation()
        setActivePage('Experiences')
        }}>
        <Box sx={AvatarBox} className={smokeFilter ? 'nave-items' : 'fadein iconTest'}>
        <Avatar sx={{ bgcolor: 'rgba(46, 189, 189, 0.767)' }} className={smokeFilter ? 'filter' : 'nav-avatar'} > <img src={Experiencefrom} alt="" className='nav-icon' /> </Avatar  >
          <Typography className='nav-text' >Experiences</Typography>
        </Box>
      </Box>
      <Box onClick={() => {
        loadingAnimation()
        setActivePage('Skills')
    }}>
        <Box sx={AvatarBox} className={smokeFilter ? 'nave-items' : 'fadein iconTest'}>
        <Avatar sx={{ bgcolor: 'rgba(46, 189, 189, 0.767)' }} className={smokeFilter ? 'filter' : 'nav-avatar'}><DeveloperModeIcon className='nav-icon'/></Avatar  >
          <Typography className='nav-text' >Skills</Typography>
        </Box>
      </Box>
      <Box onClick={() => {
        loadingAnimation()
        setActivePage('Portfolio')
        }}>
      <Box   sx={AvatarBox} className={smokeFilter ? 'nave-items' : 'fadein iconTest'}>
        <Avatar sx={{ bgcolor: 'rgba(46, 189, 189, 0.767)' }} className={smokeFilter ? 'filter' : 'nav-avatar'}><PermMediaIcon className='nav-icon'/></Avatar  >
        <Typography className='nav-text' >Portfolio</Typography>
        </Box>
      </Box>
      <Box onClick={() => {
        loadingAnimation()
        setActivePage('Contact')
        }}>
      <Box sx={AvatarBox} className={smokeFilter ? 'nave-items' : 'fadein iconTest'}>
        <Avatar sx={{ bgcolor: 'rgba(46, 189, 189, 0.767)' }} className={smokeFilter ? 'filter' : 'nav-avatar'}><ContactMailIcon className='nav-icon'/></Avatar >
           <Typography className='nav-text' >Contact Me</Typography>
        </Box>
      </Box>
    </Box>
    </Stack>
  </Box>
  </Box>

 <Box sx={bodyBoxStyle}>
       {smokeFilter ? null : activePage === 'About' && <AboutMe  />}
       {smokeFilter ? null : activePage === 'Experiences' && <Experiences />}
       {smokeFilter ? null : activePage === 'Skills' && <Skills />}
       {smokeFilter ? null : activePage === 'Portfolio' && <Portfolio />}
       {smokeFilter ? null : activePage === 'Contact' && <Contact />}
     </Box>



    </LayoutBox>
    </Box>
  
    </>

    
  )
}
const NavBox: SxProps = {
  height: {xs: '12vh', md: '100vh', lg: '100vh'},
  width: {xs: '95%', md: '100%', lg: '10%'},
  // borderRight: {xs: 'none', md: 'none', lg: '1px solid #d1c4e9'},
  transition: 'all .6s',
  position: {xs: 'absolute', md: 'absolute', lg: 'absolute', xl: 'absolute'},
  top: 0,
  left: 0,
  zIndex: '999',
  '&:hover': {
    // backgroundColor: '#022c33',
    // width: '15%',
    borderRight: 'none',
  },
}
const NaveBoxInner: SxProps = {
  height: {xs: '12vh', md: '40vh', lg: '40vh'},
  width: {xs: '100%', md: '6%%', lg: '6%'}, 
  paddingTop: {xs: '0em', md: '15em', lg: '15em'}, 
  paddingLeft: {xs: '0em', md: '1em', lg: '1em'}, 
  display: 'flex',
  flexDirection: {xs: 'row', md: 'column', lg: 'column', xl: 'column'},
  justifyContent: {xs: 'space-around', md: 'space-between', lg: 'space-between'},
  alignItems: {xs: 'center', md: 'flex-start', lg: 'flex-start'},
  
  // position: {xs: 'absolute', md: 'relative', lg: 'relative'},
  // top: 0,
  // left: 0,
}

const AvatarBox: SxProps = {
  display: 'flex',
  Width: {xs: '100%', md: '100%', lg: '100%'},
  flexDirection:  {xs: 'column', md: 'row', lg: 'row'},
  justifyContent: {xs: 'space-between', md: 'space-between', lg: 'space-between'},
  alignItems: 'center',
  cursor: 'pointer',
}
const bodyBoxStyle: SxProps = {
  width: { xs: '100%', md: '100%',lg: '100%' },
  height: { xs: '100vh', md: '100vh', lg: '100vh' },
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row', lg:'row' },
  // marginLeft: '10%',
}
// const navImg: SxProps = {
//   position: "absolute",
//   top: "25%",
//   left: "1em",
//   display: {xs: 'none', md: 'block', lg: 'block'},
//   width: 50, 
//   height: 50
// }
const ballonBox: SxProps = {
  overflow: 'hidden',
  width: { xs: '100%', md: '100%', lg: '100%', xl:'100%'},
  height: { xs: '100%', md: '100%', lg: '100%'},
  marginLeft: { xs: '0', md: '', lg: '0em', xl:'0'},
  // display: { xs: 'none', md: 'block', lg: 'block', xl:'block'},
}
const cloudBox: SxProps = {
  position: 'absolute',
  right: '0',
  left: '0',
  width: { xs: '100%', md: '100%', lg: '100%'},
  height: { xs: '100%', md: '100%', lg: '100%'},
  overflow: 'hidden',
}
const bigCloudBox: SxProps = {
  position: 'absolute',
  right: '0',
  left: '0',
  width: { xs: '100%', md: '100%', lg: '100%'},
  height: { xs: '100%', md:'100%', lg:'100%' },
  overflow: 'hidden',
  zIndex: '2'
}
const iconRoot: SxProps = {
  // zIndex: '999',
  // "&:hover": {
  //   visibility: 'hidden',
  // },
}
export default NavBar