import { Box, SxProps, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useState } from "react";
import "./Experiences.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import NM_LOGO_WHITE from "../../img/work/NM_LOGO_WHITE.png";
import VEOLIA from "../../img/work/VEOLIA.jpg";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Experiences = () => {
  const [isWorkSecOpen, setIsWorkSecOpen] = useState(false);
  const [isEduSecOpen, setIsEduSecOpen] = useState(false);
  const [activeSec, setActiveSec] = useState(false);

  const pagination = {
    clickable: true,
    // renderBullet: function (index: number, className: string) {
    //   // return '<span class="' + className + '">' + (index + 1) + "</span>";
    //   return <p></p>;
    // },
  };

  return (
    <Box sx={LayoutBox} className="fadein">
      <Box
        sx={BoxStyle}
        className={isWorkSecOpen ? "innerBox" : "noBorderAnimation"}
      >
        {isWorkSecOpen ? (
          <Box className="education">
            <Box>
              <HighlightOffIcon
                sx={closeIcon}
                onClick={() => {
                  isWorkSecOpen
                    ? setIsWorkSecOpen(false)
                    : setIsWorkSecOpen(true);
                  activeSec ? setActiveSec(false) : setActiveSec(true);
                }}
              />
            </Box>
            <Box>
              <Swiper
                spaceBetween={10}
                initialSlide={0}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 10,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={pagination}
                modules={[EffectCoverflow, Pagination]}
                className="slide"
              >
                {workData.map((img) => (
                  <SwiperSlide key={img.id} className="slider">
                    <Box className="slide-content">
                      <Box className="exp-image">
                        <img src={img.img} alt="" className="exp-image" />
                      </Box>
                      <Box className="">
                        <h1>{img.title}</h1>
                        <p>{img.field}</p>
                        <p>{img.date}</p>
                      </Box>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>
        ) : (
          <Box>
            <Typography
              sx={activeSec ? mainTextsActive : mainTexts}
              onClick={() => {
                isEduSecOpen ? setIsEduSecOpen(false) : setIsEduSecOpen(true);
                activeSec ? setActiveSec(false) : setActiveSec(true);
              }}
            >
              Education
            </Typography>
          </Box>
        )}
      </Box>
      <Box
        sx={BoxStyle}
        className={isEduSecOpen ? "innerBox" : "noBorderAnimation"}
      >
        {isEduSecOpen ? (
          <Box className="education">
            <Box>
              <HighlightOffIcon
                sx={closeIcon}
                onClick={() => {
                  isEduSecOpen ? setIsEduSecOpen(false) : setIsEduSecOpen(true);
                  activeSec ? setActiveSec(false) : setActiveSec(true);
                }}
              />
            </Box>
            <Box>
              <Swiper
                spaceBetween={10}
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
                {educationData.map((img) => (
                  <SwiperSlide key={img.id} className="slider">
                    <Box className="slide-content">
                      <Box className="exp-image">
                        <img src={img.img} alt="" className="exp-image" />
                      </Box>
                      <Box className="">
                        <h1>{img.title}</h1>
                        <p>{img.field}</p>
                        <p>{img.date}</p>
                      </Box>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>
        ) : (
          <Box>
            <Typography
              sx={activeSec ? mainTextsActive : mainTexts}
              onClick={() => {
                isWorkSecOpen
                  ? setIsWorkSecOpen(false)
                  : setIsWorkSecOpen(true);
                activeSec ? setActiveSec(false) : setActiveSec(true);
              }}
            >
              Work
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

const LayoutBox: SxProps = {
  width: { xs: "100%", md: "100%", lg: "80%", xl: "80%" },
  // paddingLeft: { xs: '0', md: '0',lg: '8em' },
  margin: { xs: "auto", md: "0", lg: "auto" },
  height: { xs: "100vh", md: "100vh", lg: "100%", xl: "100vh" },
  display: "flex",
  flexDirection: { xs: "column", md: "column", lg: "row" },
  alignItems: "center",
  justifyContent: {
    xs: "space-around",
    md: "column",
    lg: "space-around",
    xl: "space-around",
  },
  textColor: blueGrey[900],
  zIndex: "2",
  marginTop: { xs: "5em", md: "0em", lg: "0", xl: "0" },
};
const BoxStyle: SxProps = {
  width: { xs: "100%", md: "100%", lg: "50%", xl: "50%" },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  // height: '20vh',
};
const mainTexts: SxProps = {
  cursor: "pointer",
  fontSize: { xs: "3em", md: "3em", lg: "5em" },
  webkitTextStroke: "0.2px #eceff0",
  fontFamily: "Gentium Book Plus, serif",
  color: "rgba(32, 216, 207, 0.993)",
  zIndex: "10",
  p: "1em",
  borderRadius: ".4em",
  minWidth: { xs: "250px", md: "250px", lg: "300px" },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(17, 62, 80, 0.493)",
  boxShadow: "2px 2px 10px 5px  rgba(33, 253, 253, 0.5)",
  backdropFilter: "blur(20px)",
  "&:hover": {
    boxShadow: "2px 2px 15px 10px  rgba(33, 253, 169, 0.5)",
  },
};
const mainTextsActive: SxProps = {
  cursor: "pointer",
  fontSize: { xs: "3em", md: "3em", lg: "3em", xl: "3em" },
  display: { xs: "none", md: "flex", lg: "flex", xl: "flex" },
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  fontFamily: "Gentium Book Plus, serif",
  color: "rgba(10, 181, 248, 0.8)",
  zIndex: "10",
  padding: { xs: ".2em", md: "1em", lg: "1em", xl: "1em" },
  borderRadius: ".4em",
  boxShadow: "2px 2px 100px 1px  rgba(33, 253, 253, 0.5)",
  backgroundColor: "rgba(17, 62, 80, 0.493)",
  minWidth: { xs: "250px", md: "350px", lg: "350px" },
  backdropFilter: "blur(10px)",
  "&:hover": {
    boxShadow: "2px 2px 15px 10px  rgba(33, 253, 169, 0.5)",
  },
};
const imageListBox: SxProps = {
  width: { xs: "350px", md: "80%", lg: "800px", xl: "600px" },
  height: { xs: "340px", md: "80%", lg: "800px", xl: "600px" },
  borderRadius: "2em",
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
const itemsDetails: SxProps = {
  "&:hover": {
    backgroundColor: "rgba(35, 160, 233, 0.21)",
    borderRadius: ".5em",
  },
};

const educationData = [
  {
    id: 1,
    img: "https://storage.googleapis.com/ares-profile-pictures/hd/medieinstitutet-7f3bdbdf1dd4d7fd4246ab8b72ff30b5_hd.jpg",
    title: "Medieinstitutet",
    field: "Front-End Developer",
    date: "Sept 2021 - May 2023",
    featured: true,
  },
  {
    id: 2,
    img: "https://storage.googleapis.com/ares-profile-pictures/hd/medieinstitutet-7f3bdbdf1dd4d7fd4246ab8b72ff30b5_hd.jpg",
    title: "Medieinstitutet",
    field: "Webbutvecklare inom e-handel",
    date: "Sep 2020 – jan 2021",
  },
  {
    id: 3,
    img: "https://bloggcampusmolndal.files.wordpress.com/2017/12/campusmolndal_logo.jpg",
    title: "Campus mölndal",
    field: "Front-End Developer",
    date: "Aug 2019 – may 2020",
  },
  {
    id: 4,
    img: "https://yellow.place/file/image/thumb/0/0/1304/djmrjyskgpdsmlya.jpg",
    title: "Goteborg tekniska college",
    date: "Aug 2018 - May 2019",
    field: "Elinstallation",
  },
];
const workData = [
  {
    id: 1,
    img: `${NM_LOGO_WHITE}`,
    title: "Nordic Morning",
    field: "INTERNSHIP-Front-End Developer",
    date: "January-2023 - may-2023",
  },
  {
    id: 2,
    img: `${NM_LOGO_WHITE}`,
    title: "Nordic Morning",
    field: "INTERNSHIP-Front-End Developer",
    date: "September-2022 - November-2022",
  },
  {
    id: 3,
    img: ` ${VEOLIA}`,
    title: "VEOLIA",
    field: "INTERNSHIP-Electrical installation",
    date: "Mars-2019",
  },
];
export default Experiences;
