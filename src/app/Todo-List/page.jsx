import Image from "next/image";
import React from "react";
import todo from "/public/Projects/Todo-list.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Todo = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={todo}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Todo - List</h2>
          <h3>React JS </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="pb-3 pt-3">OverView</h2>
          <p>
            This app was built using React JS and hosted on Vercel. It is just a
            simple todo list to add your daily work activity task and mark them
            completed.
          </p>
          <Link href="https://github.com/Kush8459/React-todo-list" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
          <Link href="https://react-todo-list-five-omega.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-2 mt-4">Demo</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React Js
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Todo;
