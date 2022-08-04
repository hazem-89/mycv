import { Box, IconButton, ImageList, ImageListItem, ImageListItemBar, SxProps, Typography } from '@mui/material'
import { blueGrey } from '@mui/material/colors';
import { useState } from 'react';
import './Experiences.css'
import InfoIcon from '@mui/icons-material/Info';

//
import eduIcon from '../../img/Edu/edu.png'

const Experiences = () => {
 const [isWorkSecOpen, setIsWorkSecOpen] = useState(false)
 const [isEduSecOpen, setIsEduSecOpen] = useState(false)
 const [activeSec, setActiveSec] = useState(false)

  return (
    <Box sx={LayoutBox} className='fadein'>
      <Box className= {isEduSecOpen ? 'animation' : 'noAnimation' }>
      <img   src={eduIcon} alt="" />
    </Box>
      <Box className= {isWorkSecOpen ? 'workAnimation' : 'noAnimation' }>
        <img  className='workImage' src="https://kinsta.com/wp-content/uploads/2020/04/code-review-tools.png" alt="" />
      </Box>
     
    <Box sx={BoxStyle} className={isWorkSecOpen ? 'innerBox' : 'noBorderAnimation' } >
      {isWorkSecOpen ? 
       <Box className="education">
       <ImageList sx={imageListBox}>
        {workData.map((item, index) => (
        <ImageListItem key={index}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            className="edu-image"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.field}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
                
              </IconButton>
            }
          />
        </ImageListItem>
     ))}
   </ImageList>
     </Box> : 
     <Box >
        <Typography 
        sx={activeSec ? mainTextsActive : mainTexts}
        onClick={() => {
          isEduSecOpen ? setIsEduSecOpen(false) : setIsEduSecOpen(true);
          activeSec ? setActiveSec(false) : setActiveSec(true);
        }}>
        Education
        </Typography>
     </Box>
        
    }
    
    </Box>
    <Box sx={BoxStyle} className={isEduSecOpen ? 'innerBox' : 'noBorderAnimation' }>
      {isEduSecOpen ? 
      <Box className="education" >
        <ImageList sx={imageListBox}>
        {educationData.map((item, index) => (
          <ImageListItem key={index}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              className="edu-image"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.field}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                  
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
        </Box> : 
        <Box  >
          <Typography 
            sx= {activeSec ? mainTextsActive : mainTexts} 
            onClick={() => {
            isWorkSecOpen ? setIsWorkSecOpen(false) : setIsWorkSecOpen(true)
            activeSec ? setActiveSec(false) : setActiveSec(true);
            }}>
            Work
          </Typography>
      </Box> 
    }
    </Box>
    </Box>
  )
}

const LayoutBox: SxProps = {
  width: { xs: '100%', md: '100%',lg: '100%', xl: '100%'},
  paddingLeft: { xs: '0', md: '0',lg: '2em' },
  paddingTop: { xs: '0em', md: '0',lg: '0' },
  marginTop: { xs: '0em', md: '0',lg: '0' },
  height: '100vh',
  display: 'flex',
  flexDirection: {xs: 'column', md: 'column', lg: 'row'},
  alignItems: 'center',
  justifyContent: {xs: 'space-around', md: 'column', lg: 'space-between'},
  textColor: blueGrey[900],
  zIndex: '2'
}
const BoxStyle: SxProps = {
  width: { xs: '100%', md: '80%',lg: '100%' },
  display: 'flex',
  alignItems: 'center',
  justifyContent: "center",
  // height: '20vh',
}
const mainTexts: SxProps = {
  cursor: 'pointer',
  fontSize: { xs: '3em', md: '3em',lg: '5em' },
  webkitTextStroke: '0.2px #eceff0',
  fontFamily: 'Gentium Book Plus, serif',  
  color: 'rgba(10, 181, 248, 0.7)',
  zIndex: '10',
  p: '1em',
  borderRadius:'.4em',
  minWidth: { xs: '250px', md: '80%',lg: '350px' },
  display: 'flex',
  alignItems: 'center',
  justifyContent: "center",
  // backgroundColor: 'red',
  '&:hover': {
    boxShadow:  '2px 2px 15px 15px  rgba(33, 253, 253, 0.5)',
  }
}
const mainTextsActive: SxProps = {
  cursor: 'pointer',
  fontSize: { xs: '3em', md: '3em',lg: '4em' },
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  fontFamily: 'Gentium Book Plus, serif',  
  color: 'rgba(10, 181, 248, 0.8)',
  zIndex: '10',
  padding: '1em',
  borderRadius:'.4em',
  boxShadow:  '2px 2px 150px 150px  rgba(33, 253, 253, 0.068)',
  backgroundColor: '#02423d42',
  minWidth: { xs: '250px', md: '350px', lg: '350px' },
}
const imageListBox: SxProps = {
  width: { xs: '350px', md: '80%',lg: '800px',xl: '600px' },
  height: { xs: '340px', md: '80%',lg: '800px', xl: '600px' },
  borderRadius: '2em',
}





const educationData = [
  {
    img: 'https://storage.googleapis.com/ares-profile-pictures/hd/medieinstitutet-7f3bdbdf1dd4d7fd4246ab8b72ff30b5_hd.jpg',
    title: 'Medieinstitutet',
    field: 'Front-End Devloper',
    date: "September 2021 - May 2023",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://yellow.place/file/image/thumb/0/0/1304/djmrjyskgpdsmlya.jpg',
    title: 'goteborg tekniska college',
    field: 'Elinstallation',
  },
  {
    img: 'https://bloggcampusmolndal.files.wordpress.com/2017/12/campusmolndal_logo.jpg',
    title: 'campus mölndal',
    field: 'Front-End Devloper',
    date: "August 2019 – may 2019",
  },
  {
    img: 'https://storage.googleapis.com/ares-profile-pictures/hd/medieinstitutet-7f3bdbdf1dd4d7fd4246ab8b72ff30b5_hd.jpg',
    title: 'Medieinstitutet',
    field: 'Webbutvecklare inom e-handel',
    date: "September 2020 – january 2021",
    cols: 2,
  },
  
];
const workData = [
  {
    img: 'https://yt3.ggpht.com/ZNCwA8zByeJJAw7gzknCTGjbNIHokCksg275U8vsv4QB17LizNtnlhb2itZXivhQbPTGpH1J3aI=s900-c-k-c0x00ffffff-no-rj',
    title: 'VEOLIA',
    field: 'INTERNSHIP-Electrical installation',
    date: "Mars-2019",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://teflsearch.com/sites/default/files/im%20academy.jpg',
    title: 'IM Academy',
    field: 'Activity supervisor',
    date: 'May 2015 – August 2015'
  },
  {
    img: 'https://yellow.place/file/image/cover/0/0/2671/lpdqfrhaagwnsolp.jpg',
    title: 'HANIN CAFÉ',
    field: 'Owner',
    date: "January 2011 – October 2011",
  },
  {
    img: 'http://pharaon-group.com/data/uploads/sawa-logo.png',
    title: 'SAWA',
    field: 'Customer support',
    date: "January 2011 – October 2011",
    cols: 2,
  },
  
];
export default Experiences