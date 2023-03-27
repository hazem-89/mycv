import { SxProps } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Avatar, Typography } from "@mui/material";
import faceImg from "../../img/img/face2.jpg";
import { useEffect, useState } from "react";
import "./AboutMe.css";

// icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Typewriter from "./TypeWriter";

const AboutMe = () => {
  const [popUpOn, setPopUpOn] = useState(false);
  const [backGroundAnimation, setBackGroundAnimation] = useState(false);
  const [typeEnded, setTypeEnded] = useState(false);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const target = new Date("05/20/2023 23:59:59");
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const backGroundAnimationTimer = window.setTimeout(() => {
      backGroundAnimation
        ? setBackGroundAnimation(false)
        : setBackGroundAnimation(true);
    }, 8000);
    return () => clearTimeout(backGroundAnimationTimer);
  }, [backGroundAnimation]);

  useEffect(() => {
    window.setTimeout(() => {
      if (popUpOn) setPopUpOn(false);
    }, 5000);
  }, [popUpOn]);

  useEffect(() => {
    window.setTimeout(() => {
      if (!popUpOn) setPopUpOn(true);
    }, 8000);
  }, [popUpOn]);

  return (
    <Box sx={AboutBoxStyle}>
      <Box sx={aboutDiv}>
        <Box className="fadeIn" sx={aboutMainPicBoxStyle}>
          <Avatar alt="Hazem Kawas" src={faceImg} sx={aboutMainPicStyle} />
          {/* <Typography variant="h1" style={{}}>
            Hazem Kawas
          </Typography> */}
        </Box>
        <Box sx={aboutInfo} className="aboutInfo">
          <Box sx={aboutWelcome}>
            <Box>
              <p className="aboutWelcome">Welcome to my profile</p>
            </Box>
            <Box sx={aboutMainText}>
              <Box className="aboutMainText">
                <Typewriter
                  text="  Hello. My name is Hazem Kawas. I am a web developer based in Gothenburg-Sweden. Besides coding I love gaming and long walks with my dogs 🐕🐕."
                  setTypeEnded={setTypeEnded}
                />
                {/* <Typewriter
                  text="  I am a web developer based in Gothenburg-Sweden. Besides coding I love gaming and long walks with my dogs 🐕🐕."
                  setTypeEnded={setTypeEnded}
                /> */}
              </Box>
            </Box>
          </Box>
          <Box style={{ minHeight: 350, marginTop: 30 }}>
            <Box sx={typeEnded ? infoBox : DisplayNone}>
              <Box>
                <ul className="infoBox">
                  <li>
                    AGE : <span>33</span>
                  </li>
                  <li>
                    FREELANCE: <span>Available</span>
                  </li>
                  <li>
                    PHONE:
                    <a href="tel:+46706211404">
                      <span>+46 706 211 404</span>
                    </a>
                  </li>
                  <li>
                    E-MAIL: <span>hazem.k.4488@gmail.com</span>
                  </li>
                </ul>
              </Box>
            </Box>
            {typeEnded && (
              <Box sx={countDown} className="fadeIn">
                <Box className="countDown">
                  <Typography>Days left to finish my studies</Typography>
                  <Typography sx={countDownText}>
                    {days < 10 ? "0" + days : days} {days < 10 ? "Day" : "Days"}
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      {typeEnded && (
        <Box sx={aboutIcons} className="fadein">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/hazem-89"
          >
            <GitHubIcon sx={icons} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/hazem-kawas-66971b185/"
          >
            <LinkedInIcon sx={icons} />
          </a>
          {/* <ContactMailIcon  sx={icons}/> */}
        </Box>
      )}
      {typeEnded && popUpOn ? (
        <>
          <Box sx={popUp}>
            <Box sx={popUpText}>
              {/* Hello..!
            Lets get in touch */}
              <Box>
                {popUpOn ? (
                  <Box className="aboutMainText">
                    <Typewriter
                      text="  Lets get in touch!"
                      setTypeEnded={setTypeEnded}
                    />
                  </Box>
                ) : null}
              </Box>
            </Box>
          </Box>
        </>
      ) : null}
    </Box>
  );
};

const AboutBoxStyle: SxProps = {
  width: { xs: "100%", md: "100%", lg: "100%", xl: "100%" },
  paddingLeft: { xs: "0em", md: "1em", lg: "1em", xl: "2em" },
  marginTop: { xs: "10em", md: "0em", lg: "0em", xl: "0em" },
};
const aboutDiv: SxProps = {
  display: "flex",
  flexDirection: { xs: "column", md: "row", lg: "row", xl: "row" },
  alignItems: "center",
  marginLeft: { xs: "0em", md: "4em", lg: "10em", xl: "5em" },
  justifyContent: "center",
  paddingLeft: { xs: "0", md: "1em", lg: "1em" },
  height: { xs: "100%", md: "100%", lg: "100%", xl: "100%" },
};
const aboutMainText: SxProps = {
  width: { xs: "300px", md: "400px", lg: "450px", xl: "500px" },
  zIndex: "1",
  textAlign: "left",
  paddingLeft: "1em",
  fontSize: { xs: "16px", md: "1.1em", lg: "1.1em", xl: "1.1em" },
};
const aboutWelcome: SxProps = {
  width: { xs: "100%", md: "100%", lg: "100%", xl: "100%" },
  zIndex: "1",
};
const infoBox: SxProps = {
  width: "100%",
  fontFamily: `''Raleway', sans-serif'`,
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
const aboutMainPicBoxStyle: SxProps = {
  marginRight: { xs: "0em", md: "4em", lg: "4em", xl: "4em" },
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};
const aboutMainPicStyle: SxProps = {
  width: { xs: "200px", md: "300px", lg: "350px", xl: "400px" },
  height: { xs: "200px", md: "300px", lg: "350px", xl: "400px" },
  overflow: "hidden",
  zIndex: "1",
};

const aboutIcons: SxProps = {
  position: { xs: "absolute", md: "absolute", lg: "absolute", xl: "" },
  bottom: { xs: "0em", md: "1em", lg: "1em", xl: "0" },
  left: { xs: "50%", md: "50%", lg: "50%", xl: "50%" },
  transform: {
    xs: "translate(-50%, 0%)",
    md: "translate(-50%, 0%)",
    lg: "0",
    xl: "0",
  },
  zIndex: "3",
  display: { xs: "none", md: "block", lg: "block", xl: "block" },
};
const icons: SxProps = {
  width: { xs: "30px", md: "40px", lg: "40px" },
  height: { xs: "30px", md: "40px", lg: "40px" },
  fill: "#DE5656",
  cursor: "pointer",
};
const popUp: SxProps = {
  width: { xs: "100px", md: "100px", lg: "150px" },
  height: "50px",
  backgroundColor: "#fff",
  position: "absolute",
  left: { xs: "50%", md: "50%", lg: "48.5%", xl: "48.5%" },
  bottom: { xs: "1.5em", md: "2em", lg: "2em", xl: "1em" },
  transform: {
    xs: "translate(50%, -20%)",
    md: "translate(+40%, -40%)",
    lg: "translate(+40%, -40%)",
    xl: "translate(+40%, -40%)",
  },
  borderRadius: "1em 1em  1em 0.1em",
  alignItems: "center",
  zIndex: "6",
  border: "1px dashed #DE5656",
  userSelect: "none",
  display: { xs: "none", md: "flex", lg: "flex", xl: "flex" },
};
const popUpText: SxProps = {
  color: "rgb(141, 15, 15)",
  fontSize: ".9em",
  padding: "1em",
};

const aboutInfo: SxProps = {
  width: { xs: "400px", md: "450px", lg: "500px", xl: "550px" },
  height: { xs: "450px", md: "500px", lg: "500px", xl: "500px" },
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "6",
  textAlign: "center",
  position: "relative",
  padding: { xs: "1em", md: ".5em", lg: "em", xl: "1em" },
  fontWeight: "bold",
  marginTop: { xs: "2em", md: "0em", lg: "0em", xl: "0em" },
};
const countDown: SxProps = {
  zIndex: "1",
  fontWeight: "900",
  minWidth: "300px",
  textAlign: "center",
  marginTop: "2em",
};
const countDownText: SxProps = {
  fontSize: { xs: "1em", md: "2em", lg: "2em", xl: "2em" },
};

const DisplayNone: SxProps = {
  display: "none",
};

export default AboutMe;
