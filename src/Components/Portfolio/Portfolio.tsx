import { Box, Button } from '@mui/material'
// import { SxProps } from '@mui/material/styles';
import {  Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import WarZone from '../../img/Portfolio/Animal-WarZone/Picture1.png'
import QuitApp from '../../img/Portfolio/Quit/Screenshot 1.png'
import Hats from '../../img/Portfolio/HatsOnHats/Untitled.png'
import Shoe from '../../img/Portfolio/Shoe/Screenshot.png'
import Calender from '../../img/Portfolio/Calendar/Picture4.png'
import ChatApp from '../../img/Portfolio/ChatApp/chat.png'

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './Carousel.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    id: '1',
    img: `${WarZone}`,
    title: 'Animal war zone',
    dis: 'A group project Game, built with ReactJS and P5.js',
    url: 'https://animalwarzone.netlify.app/'
  },
  {
    id: '2',
    img: `${QuitApp}`,
    title: 'Quit App',
    dis: 'A stop smoking challenge app, built with React and typeScript',
    url: 'https://wizardly-lalande-982ec4.netlify.app/'
  },
 
  {
    id: '3',
    img: `${Hats}`,
    title: 'Full stack Web shope',
    dis: 'A full stack group project, built with React, TypeScript and MUI',
    url: 'https://github.com/spaceflake/newShop'
  },
  {
    id: '4',
    img: `${Shoe}`,
    title: 'Front-end Web shope',
    dis: 'A group project, built with React, TypeScript and MUI',
    url: 'https://flourishing-madeleine-966145.netlify.app/'
  },
  {
    id: '5',
    img: `${ChatApp}`,
    title: 'Socket Chat App',
    dis: 'A group project "Chat app", built with React, TypeScript and Socket-io-chat',
    url: 'https://github.com/hazem-89/socket-io-chat'
  },
  {
    id: '6',
    img: `${Calender}`,
    title: 'Todo calender',
    dis: 'Todo calender, built with JS',
    url: 'https://hazem-89.github.io/Todo-Calendar/'
  },
 
]

const Portfolio = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
    <Box className='mainBox'>
      <Swiper
        spaceBetween={50}
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
        className='slide'
        >
          {data.map( img => ( 
            <SwiperSlide 
              key={img.id}
              className='slider'
            >
              <Box className='slide-content'>
                <Box className='port-image'>
                    <img src={img.img} alt="" />
                </Box>
                <Box className="port-info">
                  <h1>{img.title}</h1>
                  <p>{img.dis}</p>
                </Box>
                <a href={img.url} target="_blank" rel="noreferrer">
                <Button className='demo-button'><OpenInNewIcon className='demo-icon' /></Button>

                </a>
              </Box>
              
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
      
    </>
 
  )
}

export default Portfolio