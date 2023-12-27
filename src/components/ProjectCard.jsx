import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ img, text, projecturl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:scale-105 ease-in duration-300 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image className="rounded-xl group-hover:opacity-10" src={img} alt="/" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {text}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">Next-Js</p>
        <Link href={"projecturl"}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;