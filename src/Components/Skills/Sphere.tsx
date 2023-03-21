import "./Skills.css";
import { Box } from "@mui/material";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import randomColor from "randomcolor";
import { useEffect, useLayoutEffect, useState } from "react";

type TagCloudOptions = {
  radius?: number;
  maxSpeed?: "slow" | "normal" | "fast";
  initSpeed?: "slow" | "normal" | "fast";
  fontFamily?: string;
  fontSizeFactor?: number;
  backgroundColor?: string;
  opacityFactor?: number;
  direction?: number;
  keepVertical?: boolean;
  mouseOutDelay?: number;
  mouseOverDelay?: number;
  shuffleTags?: boolean;
  shape?: "sphere" | "vcylinder" | "hcylinder";
  zoom?: number;
  useContainerInlineStyles?: boolean;
  useItemInlineStyles?: boolean;
};

const TagCloudComponent = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function generateRandomColors(numColors: any) {
    return randomColor({ count: numColors });
  }
  const generateRandomColor = () => {
    const colors = generateRandomColors(50);
    const skillsText =
      document.querySelectorAll<HTMLElement>(".tagcloud--item");
    for (let i = 0; i < skillsText.length; i++) {
      const skill = skillsText[i];
      skill.style.color = colors[i];
    }
  };

  useLayoutEffect(() => {
    const generateRandomColor = () => {
      const colors = generateRandomColors(50);
      const skillsText =
        document.querySelectorAll<HTMLElement>(".tagcloud--item");
      for (let i = 0; i < skillsText.length; i++) {
        const skill = skillsText[i];
        skill.style.color = colors[i];
      }
    };

    setTimeout(() => {
      generateRandomColor();
    }, 10);
  }, [width, generateRandomColor]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Box className="mainSphereContainer">
      <TagCloud
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
          radius:
            width <= 900
              ? Math.min(600, w.innerWidth, w.innerHeight) / 2
              : Math.min(1000, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: "fast",
          initSpeed: "fast",
          direction: 230,
          useContainerInlineStyles: false,
        })}
        onClick={(tag: string, ev: MouseEvent) => alert(tag)}
        onClickOptions={{ passive: true }}
      >
        {[
          "VSCode",
          "TypeScript",
          "React",
          "JavaScript",
          "Figma",
          "Material UI",
          "NextJs",
          "ESLint",
          "Node.js",
          "MongoDB",
          "HTML",
          "CSS",
          "Sass",
          "Azure",
          "Git",
          "GitHub",
          "React Native",
          "MS SQL",
          "Firebase",
        ]}
      </TagCloud>
    </Box>
  );
};

export default TagCloudComponent;
