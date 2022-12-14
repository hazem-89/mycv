import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Box, SxProps, TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import './Contact.css'
import Typewriter from "typewriter-effect";
// icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



export const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }


  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_k1o9fkc', e.currentTarget, 'ESPqehn2bhHlCBCrS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.currentTarget.reset()
      handleClickOpen()
  };
  return (
    <>
    <Box sx={mainBox}>
     <Box>
     <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Thanks for your email"}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-description">
            I will contact you ASAP
          </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
     </Box>
    <form  onSubmit={sendEmail}>
      <Box sx={formBox} className="formBox">
      <p  className='title'>
        Contact Me
      </p>
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
        <a target="_blank" rel="noreferrer" href="https://github.com/hazem-89"> <GitHubIcon sx={icons} /></a>
         <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hazem-kawas-66971b185/"> <LinkedInIcon  sx={icons}/></a>
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
  marginLeft: { xs:'20px', md: '0px', lg: '0px'},
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

