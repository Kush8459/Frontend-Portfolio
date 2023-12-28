/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ProjectCard from "./ProjectCard";
import imdb from "/public/Projects/Imdb.png";
import Nike from "/public/Projects/nike.png";
import TicTacToe from "/public/Projects/tic-tac-toe.png";
import TodoList from "/public/Projects/Todo-list.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard img={imdb} text={"Imdb-Clone"} projecturl="/blog" />
          <ProjectCard
            img={Nike}
            text={"Nike Landing Page"}
            projecturl="/nike"
          />
          <ProjectCard
            img={TicTacToe}
            text={"Tic-Tac-Toe Game"}
            projecturl="/game"
          />
          <ProjectCard img={TodoList} text={"Todo-List"} projecturl="/Todo-List" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
