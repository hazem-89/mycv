import { Box, BoxProps, styled, SxProps } from "@mui/material";

import React, { useEffect } from "react";
import "./Skills.css";
//Icons
import TS from "../../img/img/skills/ts.png";
import JS from "../../img/img/skills/js.png";
import Figma from "../../img/img/skills/figma.png";
import MUI from "../../img/img/skills/mui.png";
import Node from "../../img/img/skills/node.png";
import ReactImg from "../../img/img/skills/react.png";
import Mongo from "../../img/img/skills/mongo.png";
import Html from "../../img/img/skills/html.png";
import Css from "../../img/img/skills/css.png";
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const SkillsIcons = [
  {
    img: `${TS}`,
  },
  {
    img: `${JS}`,
  },

  {
    img: `${Node}`,
  },
  {
    img: `${Css}`,
  },
  {
    img: `${Html}`,
  },
  {
    img: `${Mongo}`,
  },
  {
    img: `${ReactImg}`,
  },
  {
    img: `${Figma}`,
  },
  {
    img: `${MUI}`,
  },
  {
    img: `${TS}`,
  },
  {
    img: `${JS}`,
  },

  {
    img: `${Node}`,
  },
  {
    img: `${Css}`,
  },
  {
    img: `${Html}`,
  },
  {
    img: `${Mongo}`,
  },
  {
    img: `${ReactImg}`,
  },
  {
    img: `${Figma}`,
  },
  {
    img: `${MUI}`,
  },
  {
    img: `${TS}`,
  },
  {
    img: `${JS}`,
  },

  {
    img: `${Node}`,
  },
  {
    img: `${Css}`,
  },
  {
    img: `${Html}`,
  },
  {
    img: `${Mongo}`,
  },
  {
    img: `${ReactImg}`,
  },
  {
    img: `${Figma}`,
  },
  {
    img: `${MUI}`,
  },
];

const Skills = () => {
  const LayoutBox = styled(Box)<BoxProps>(({ theme }) => ({
    height: "100vh",
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    "&:hover": {
      // backgroundColor: blueGrey[700],
    },
  }));

  const floatingBubbles = () => {
    let ballBox = document.querySelector(".ballBox");
    if (!ballBox) {
      ballBox = document.createElement("ul");
      ballBox.className = "ballBox";
    }

    let ballBox1 = document.querySelector("canvas");
    if (!ballBox1) {
      ballBox1 = document.createElement("canvas");
      // ballBox1.style.width = 600 + 'px';
    }

    for (let i = 0; i < SkillsIcons.length; i++) {
      const skill = SkillsIcons[i];

      const skillImg = document.createElement("img");
      skillImg.className = "skillImg";
      skillImg.src = skill.img;
      skillImg.style.bottom =
        Math.floor((Math.random() * HEIGHT) / 100) * 100 + "px";
      skillImg.style.left =
        100 + Math.floor((Math.random() * (WIDTH - 100)) / 100) * 100 + "px";
      let W = window.matchMedia("(max-width: 420px)");
      if (W.matches) {
        skillImg.style.bottom =
          Math.floor((Math.random() * HEIGHT) / 100) * 100 + "px";
        skillImg.style.left =
          Math.floor((Math.random() * (WIDTH + 200)) / 100) * 100 + "px";
        skillImg.style.height =
          500 - Math.floor(Math.random() * 1000) / 9000 + "px";
      }

      const ball = document.createElement("li");
      ball.className = "ball";
      let existingImg = ballBox.querySelector(`img[src="${skill.img}"]`);
      if (!existingImg) {
        skillImg.style.position = "fixed";
        skillImg.style.height = 100 + Math.floor(Math.random() * 100) + "px";
        skillImg.style.zIndex = "999";
        // skillImg.style.width = 100 + Math.floor(Math.random() * 150) + 'px';
        ballBox.appendChild(ball);
        ball.appendChild(skillImg);
      }
    }

    const skillBox = document.querySelector(".bubbleBox");
    if (skillBox) {
      if (!ballBox1.parentElement) {
        skillBox.appendChild(ballBox1);
      }
      if (!ballBox.parentElement) {
        skillBox.appendChild(ballBox);
      }
    }
  };
  useEffect(() => {
    floatingBubbles();
  }, []);

  return (
    <>
      <LayoutBox>
        <Box sx={main} className="bubbleBox"></Box>
      </LayoutBox>
    </>
  );
};

const main: SxProps = {
  maxWidth: { xs: "", md: "", lg: "", xl: "50%" },
};
export default Skills;
