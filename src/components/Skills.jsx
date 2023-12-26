import Image from "next/image";
import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <SkillCard img="/skills/html.png" text={"HTML"} />
          <SkillCard img="/skills/css.png" text={"CSS"} />
          <SkillCard img="/skills/javascript.png" text={"JavaScript"} />
          <SkillCard img="/skills/tailwind.png" text={"TailWind"} />
          <SkillCard img="/skills/react.png" text={"React"} />
          <SkillCard img="/skills/nextjs.png" text={"NextJs"} />
          <SkillCard img="/skills/node.png" text={"Node"} />
          <SkillCard img="/skills/github1.png" text={"Github"} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
