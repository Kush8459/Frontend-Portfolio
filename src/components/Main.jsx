/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <div
      id="home"
      className="w-full h-screen flex items-center text-center py-16"
    >
      <div className="max-w-[1240px] md:grid grid-cols-3 m-auto p-4 md:space-x-4 md:space-y-5 space-y-10">
        <div className="md:flex md:col-span-1 space-y-5 md:space-y-0">
          <div className="w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image
              className="rounded-xl"
              src="/profile.jpg"
              alt="/"
              width={400}
              height={300}
            />
          </div>
        </div>
        <div className="md:flex md:col-span-2 flex-col space-y-5">
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Kush</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications and
            Landing Pages
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 gap-5">
            <Link
              href="https://www.linkedin.com/in/kush-agrawal-9a5184212/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link
              href="https://github.com/Kush8459"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link
              href="mailto:agrawalkush04@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link
              href="https://t.me/Agrawal_Kush_21bcs6138"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
