export type Skill = 
  "HTML5" | "CSS3" | "JavaScript" | "SCSS" | "React" | "TailwindCSS" | "TypeScript";

type ColorName = {
  bg: string;
  text: string;
};

export const skillColors: Record<Skill, ColorName> = {
  HTML5 : {
    bg: "bg-[#E34F26]",
    text: "text-white"
  },
  CSS3 : {
    bg: "bg-[#1572B6]",
    text: "text-white"
  },
  JavaScript : {
    bg: "bg-[#F7DF1E]",
    text: "text-[#1E1E1E]"
  },
  SCSS : {
    bg: "bg-[#CC6699]",
    text: "text-white"
  },
  React : {
    bg: "bg-[#61DAFB]",
    text: "text-[#1E1E1E]"
  },
  TailwindCSS : {
    bg: "bg-[#06B6D4]",
    text: "text-white"
  },
  TypeScript : {
    bg: "bg-[#3178C6]",
    text: "text-white"
  }
}