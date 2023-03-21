import "./Skills.css";
import { Box } from "@mui/material";
import { TagCloud } from "@frank-mayer/react-tag-cloud";

type Tag = {
  text: string;
  value: number;
};

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
  return (
    <Box className="mainSphereContainer">
      <TagCloud
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
          radius: Math.min(800, w.innerWidth, w.innerHeight) / 2,
          maxSpeed: "normal",
          initSpeed: "fast",
          // direction: 130,
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
