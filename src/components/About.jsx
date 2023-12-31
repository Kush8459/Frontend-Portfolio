/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hello and welcome to my portfolio! I am currently a dedicated
            student at Chandigarh University, passionately pursuing my
            Bachelor's degree in Computer Science. My journey into the vast
            realm of technology has been nothing short of exhilarating, with a
            particular focus on software development. I find immense joy and
            fulfillment in crafting digital experiences that seamlessly blend
            functionality and creativity. In the ever-evolving landscape of web
            development, I've honed my skills in Front-End technologies,
            mastering the intricacies of HTML, CSS, and JavaScript. Beyond the
            basics, I've delved into advanced frameworks like ReactJS and
            NextJS, leveraging their power to create dynamic and responsive user
            interfaces. My toolkit extends to the use of Tailwind CSS, ensuring
            that my designs are not only visually appealing but also maintain a
            high level of efficiency.
          </p>
          <p className="py-2 text-gray-600">
            Beyond the web, I've cultivated a versatile skill set in programming
            languages such as C++, Java, Python, and C. This diversity allows me
            to approach problem-solving with a holistic perspective, adapting to
            the specific needs of each project. I understand the importance of
            version control and collaboration, utilizing Git to streamline the
            development process and contribute effectively to team projects. As
            I navigate my academic journey, I remain driven by a genuine passion
            for technology and its limitless possibilities. My goal is to
            continue exploring new avenues in software development, contributing
            to innovative projects, and staying at the forefront of emerging
            technologies. Join me on this exciting adventure, and let's build
            the future together through code and creativity!
          </p>
          <Link href="#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/about.jpg"
            alt=""
            width={550}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
