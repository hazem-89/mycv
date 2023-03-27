import { Box, Button, SxProps, Typography } from "@mui/material";
// import { SxProps } from '@mui/material/styles';
import { Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import WarZone from "../../img/Portfolio/Animal-WarZone/Picture1.png";
import QuitApp from "../../img/Portfolio/Quit/Screenshot 1.png";
import Hats from "../../img/Portfolio/HatsOnHats/Untitled.png";
import Shoe from "../../img/Portfolio/Shoe/Screenshot.png";
import Calender from "../../img/Portfolio/Calendar/Picture4.png";
import ChatApp from "../../img/Portfolio/ChatApp/chat.png";
import Mollify from "../../img/Portfolio/Mollify/Mollify.jpg";
import PHIEE from "../../img/Portfolio/Phiee/PHIEE.png";
import ChubbyDog from "../../img/Portfolio/Chubby-dog/Chubby-dog.png";
import restaurant from "../../img/Portfolio/Restaurant/restaurant.png";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "./Carousel.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

const data = [
  {
    id: "1",
    img: [`${Mollify}`],
    title: "Mollify",
    dis: "A mobile App built with React Native",
    moreInfo:
      "This app let's parents manage their children's todo lists. Register Create your parent profile Create your children(s) profile Enter child's room Set task for your child Set reward for your child After the child has done its task, he/she can request if it's done The child can interact with room and the task to request as well The parent can then accept in their profile if the task is done If it's done, the points increases After the user has enough points they recieve the reward. This App is built with React Native, TypeScript, and Firebase",
    url: "https://github.com/hazem-89/Mollify",
    demoUrl: "",
  },
  {
    id: "2",
    img: [`${PHIEE}`],
    title: "PHIEE",
    dis: "A group project, built with React, TypeScript, and MUI",
    moreInfo:
      "A group project built with React, TypeScript, and MUI, using Agile methodology and Scrum",
    url: "https://github.com/Prisberg/nr1team",
    demoUrl: "https://phiee.netlify.app/",
  },
  {
    id: "3",
    img: [`${ChubbyDog}`],
    title: "Chubby Dog",
    dis: "A full stack  project, built with React, TypeScript, Firebase and MUI",
    moreInfo:
      "A full stack  project, built with React, TypeScript, Firebase and MUI",
    url: "https://github.com/mirrenil/arbetsmetodik",
    demoUrl: "https://chubbydog.vercel.app/",
  },
  {
    id: "4",
    img: [`${WarZone}`],
    title: "Animal war zone",
    dis: "A group project Game, built with ReactJS and P5.js",
    moreInfo:
      "Final project for school. A mobile App built with React Native, Redux, TypeScript, and Firebase",
    url: "https://animalwarzone.netlify.app/",
    demoUrl: "https://animalwarzone.netlify.app/",
  },
  {
    id: "5",
    img: [`${QuitApp}`],
    title: "Quit App",
    dis: "A stop smoking challenge app, built with React and typeScript",
    moreInfo: "A stop smoking challenge app, built with React and typeScript",
    url: "https://wizardly-lalande-982ec4.netlify.app/",
    demoUrl: "https://wizardly-lalande-982ec4.netlify.app/",
  },
  {
    id: "6",
    img: [`${restaurant}`],
    title: "Mosaic Restaurant",
    dis: "Full stack project for restaurant booking.",
    moreInfo:
      "Full stack project for restaurant booking,  including a client and a server. The server is connected to a mongodb database and be structured based on a REST API with resources",
    url: "https://github.com/hazem-89/restaurant-booking",
    demoUrl: "",
  },
  {
    id: "10",
    img: [`${Hats}`],
    title: "Full stack Web shope",
    dis: "A full stack webShop",
    moreInfo:
      "In project task, we will build a webShop application including a client and a server. The server connected to a mongodb database and be structured based on a REST API with resources.",
    url: "https://github.com/spaceflake/newShop",
    demoUrl: "",
  },
  {
    id: "7",
    img: [`${Shoe}`],
    title: "Front-end Web shope",
    dis: "A group project, built with React, TypeScript and MUI",
    moreInfo:
      "Our vision was to create an epic e-commerce application that sells premium Shoes The goal was to make the site as minimalistic and simple as possible but with all the necessary functions. Through the web shop the user can view different shoes both general and in detail. Shoes can be putted in the basket both from the landing page as well as in the detailed page. From the basket the user get an overview of their products as well as the amount and total cost. At the checkout the user will input their contact information, choose delivery partner, payment options and finally get an confirmation letter with a personal order number. From the perspective of the admin user it is possible to login and add products as well as delete and edit.",
    url: "https://github.com/nybbe123/react-webshop",
    demoUrl: "https://flourishing-madeleine-966145.netlify.app/",
  },
  {
    id: "8",
    img: [`${ChatApp}`],
    title: "Socket Chat App",
    dis: 'A group project "Chat app", built with React, TypeScript and Socket-io-chat',
    moreInfo:
      "A chat app built with Socket.io, Typescript and React. This is a school assignment where the task was to build a chat application using Socket.io",
    url: "https://github.com/hazem-89/socket-io-chat",
    demoUrl: "",
  },
  {
    id: "9",
    img: [`${Calender}`],
    title: "Todo calender",
    dis: "Todo calender, built with JS",
    moreInfo: "A simple Todo calender, built with JS",
    url: "https://hazem-89.github.io/Todo-Calendar/",
    demoUrl: "https://hazem-89.github.io/Todo-Calendar/",
  },
];
type dataTypes = {
  id: string;
  img: string[];
  title: string;
  dis: string;
  moreInfo: string;
  url: string;
  demoUrl: string;
};
const Portfolio = () => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [ProjectToDisplay, setProjectToDisplay] = useState<dataTypes>(data[0]);
  const pagination = {
    clickable: true,
    // renderBullet: function (index: number, className: string) {
    //   return '<span class="' + className + '">' + (index + 1) + "</span>";
    // },
  };

  return (
    <>
      <Box className="mainBox">
        {!detailsOpen ? (
          <>
            <Swiper
              spaceBetween={20}
              initialSlide={0}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={pagination}
              modules={[EffectCoverflow, Pagination]}
              className="slide"
            >
              {data.map((project) => (
                <SwiperSlide key={project.id} className="slider">
                  <Box
                    className="slide-content"
                    onClick={() => {
                      setProjectToDisplay(project);
                      setDetailsOpen(true);
                    }}
                  >
                    <Box className="port-image">
                      <img
                        className="detailsImage"
                        src={project.img[0]}
                        alt=""
                      />
                    </Box>
                    <Box className="port-info">
                      <h1>{project.title}</h1>
                      <p>{project.dis}</p>
                    </Box>
                    <Button
                      onClick={() => {
                        setProjectToDisplay(project);
                        setDetailsOpen(true);
                      }}
                      variant="contained"
                      sx={MainInfoButton}
                    >
                      More info
                    </Button>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        ) : (
          <>
            <Box sx={detailsContainer}>
              <Box sx={detailsContent}>
                <Box>
                  <HighlightOffIcon
                    sx={closeIcon}
                    onClick={() => {
                      detailsOpen
                        ? setDetailsOpen(false)
                        : setDetailsOpen(true);
                    }}
                  />
                </Box>
                <Box sx={detailsImage}>
                  {ProjectToDisplay.img?.map((src: string) => (
                    <Box>
                      <img className="detailsImage" src={src} alt="" />
                    </Box>
                  ))}
                </Box>
                <Box sx={detailsInfo}>
                  <Box sx={detailsInfoInner}>
                    <Box>
                      <Typography
                        variant="h1"
                        component="h2"
                        sx={detailsMainTitle}
                      >
                        {ProjectToDisplay.title}
                      </Typography>
                      <Typography className="detailsInfo">
                        {ProjectToDisplay.moreInfo}
                      </Typography>
                    </Box>
                    <Box>
                      {ProjectToDisplay.demoUrl && (
                        <Button variant="contained" sx={moreInfoBtn}>
                          <a
                            href={ProjectToDisplay.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Live Demo
                          </a>
                        </Button>
                      )}
                      <Button variant="contained" sx={moreInfoBtn}>
                        <a
                          href={ProjectToDisplay.url}
                          target="_blank"
                          rel="noreferrer"
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Github Repo
                        </a>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};
const detailsContainer: SxProps = {
  zIndex: 100,
  width: "80%",
  height: "90%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent",
  textAlign: "center",
};
const detailsContent: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // backgroundColor: "transparent",
  textAlign: "center",
  width: "100%",
  height: "100%",
  color: "white",
  backgroundImage:
    "linear-gradient( 90deg, rgba(0, 0, 0, 0.611),rgba(7, 222, 250, 0.253));",
  backdropFilter: "blur(50px)",
  borderRadius: "20px",
};

const detailsImage: SxProps = {
  width: "50%",
  // height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // marginRight: 10,
  flexWrap: "wrap",
};
const detailsInfo: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  // height: "100%",
  // color: "blue",
  borderRadius: "10px",
};
const detailsInfoInner: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "80%",
  padding: "50px",
  borderRadius: "10px",
};
const MainInfoButton: SxProps = {
  width: "150px",
  height: "40px",
  margin: "10px",
  backgroundColor: "#3f51b5",
  color: "white",
  "&:hover": {
    backgroundColor: "#4f61c5",
  },
};
const moreInfoBtn: SxProps = {
  width: "150px",
  height: "40px",
  margin: "10px",
  backgroundColor: "#3f51b5",
  color: "white",
  "&:hover": {
    backgroundColor: "#4f61c5",
  },
};
const closeIcon: SxProps = {
  width: { xs: "50px", md: "60px", lg: "60px", xl: "60px" },
  height: { xs: "50px", md: "60px", lg: "60px", xl: "60px" },
  position: "absolute",
  fontSize: "4em",
  top: "15px",
  right: "15px",
  zIndex: "8",
  fill: "#c83349",
  cursor: "pointer",
};
const detailsMainTitle: SxProps = {
  marginBottom: ".2em",
  color: "#00d9ff",
};
export default Portfolio;
