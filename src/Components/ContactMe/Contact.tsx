import React from 'react';
import emailjs from '@emailjs/browser';
import { Box, SxProps, TextField, Button, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import './Contact.css'
import Typewriter from "typewriter-effect";
// icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export const Contact = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_k1o9fkc', e.currentTarget, 'ESPqehn2bhHlCBCrS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.currentTarget.reset()
  };
  return (
    <>
    <Box sx={mainBox}>
     
    <form  onSubmit={sendEmail}>
      <Box sx={formBox} className="formBox">
      <Typography sx={text} className='title'>
        Contact Me
      </Typography>
      <TextField
        id="name-input"
        name="from_name"
        label="Name"
        type="text"
        sx={textArea}
        required
      />
      <TextField
        id="name-input"
        name="email"
        label="Email"
        type="email"
        sx={textArea}
        required
      />
      <TextField
        id="name-input"
        name="message"
        label={<Typewriter
          onInit={(typewriter)=> {
          typewriter 
          .pauseFor(1500)
          .typeString(`Lets get in touch!`)
          // .callFunction(() => {
          //   setTypeOn(true); 
          // })
          .start();
            }}
            />}
        type="text"
        multiline
        rows={4}
        maxRows={8}
        sx={textArea}
        className='message'
        required
      />
      <Button
      endIcon={<SendIcon />}
      type="submit" 
      value="Send"
      variant="contained"
      sx={button}
      >
        Send
      </Button>
      </Box>
    </form>
    </Box>
    <Box  sx={aboutIcons}>
        <GitHubIcon sx={icons} />
        <LinkedInIcon  sx={icons}/>
        </Box>
    </>
  )
}


const mainBox: SxProps = {
  zIndex: '5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  marginLeft: { xs:'0em', md: '15em', lg: '15em', xl: '15em' },
}
const text: SxProps = {
  color: 'rgba(82, 15, 15, 0.938)',
}
const textArea: SxProps = {
  minWidth:{ xs: '300px', md: '400px', lg: '400px'},
  maxWidth:{ xs: '300px', md: '400px', lg: '400px'},
  marginBottom: '1em',
  color: 'white'

}
const formBox: SxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  minHeight: { xs: '450px', md: '400px', lg: '500px'},
  minWidth:{ xs:'350px', md: '500px', lg: '600px'},
  maxWidth:{ xs:'350px', md: '500px', lg: '600px'},
  borderRadius: '1em',
  marginLeft: { xs:'40px', md: '0px', lg: '0px'},
  marginTop: { xs:'100px', md: '0px', lg: '0px'}
}
const button: SxProps = {
  minWidth:{ xs: '100px', md: '200px', lg: '200px'},
  backgroundColor: 'black',
  color: 'white',
  borderRadius: '.5em',
  textDecoration: 'none',
  "&:hover": {
    border: "1px solid #00FF00",
    backgroundColor: 'rgba(46, 189, 189, 0.767)'
  },
}


const aboutIcons: SxProps = {
  position: { xs: 'absolute', md: 'absolute', lg: 'absolute', xl: '' },
  bottom: { xs: '1em', md: '1em', lg: '1em', xl: '0' },
  left: { xs: '50%', md: '50%', lg: '50%', xl: '50%' },
  transform: { xs: 'translate(-50%, 0%)', md: 'translate(-50%, 0%)', lg: '0', xl: '0' },
  zIndex: '5',
}
const icons: SxProps = {
  width:  { xs: '30px', md: '30px', lg: '40px' },
  height:  { xs: '30px', md: '30px', lg: '40px' },
  fill: '#DE5656',
  cursor: 'pointer',
  zIndex: '5'
}

