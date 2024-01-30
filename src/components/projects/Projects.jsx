import React from "react";
import { motion } from "framer-motion";
import { fadeTop, motionStep } from "./motion";
import Featured from "./Featured";
import ecommerce from "../../assets/ecommerce.png";
import movie from "../../assets/Movie.png";
import snkr from "../../assets/SNKRS.png";
import pokedex from "../../assets/Pokedex.PNG";
import Section from "../common/Section";
import ProjectCard from "./ProjectCard";
import RightSvg from "../../assets/svg/right-pattern.svg";

export const projectsData = [
  {
    id: 0,
    thumbnail: snkr,
    title: "Sneaker Hub",
    description:
      "Shoes shopping Website, implemented features like cart, checkout, etc.",
    live: "https://snkrs-hub.netlify.app",
    code: "https://github.com/PrajwalBorkar/Sneakers-Hub",
    tech: ["React.js", "Redux", "React Router", "Tailwind CSS"],
    featured: true,
  },
  {
    id: 1,
    thumbnail: ecommerce,
    title: "Ecommerce Website",
    description:
      "Ecommerce website made using ReactJS. Used Sign in with firebase and cart checkout functionality.",
    live: "https://amazon-shop-app.netlify.app/",
    code: "https://github.com/PrajwalBorkar/amazon-clone",
    tech: ["React.js", "React Router", "Tailwind CSS", "Firebase"],
    featured: true,
  },
  {
    id: 2,
    thumbnail: pokedex,
    title: "Pokedex",
    description:
      "Simple pokemon codex search application Using Pokemon API to fetch pokemons.",
    live: "https://pokedex-pokemon-searcher.netlify.app/",
    code: "https://github.com/PrajwalBorkar/Pokedex",
    tech: ["React.js", "Tailwind CSS", "Material UI"],
    featured: false,
  },

  {
    id: 3,
    thumbnail: movie,
    title: "Movie Flix",
    description:
      "Movie Recommender Web App made using Streamlit Framework. Used bag-of-the-words model to recommend movies. ",
    live: "https://movieflixhd.netlify.app/",
    code: "https://github.com/PrajwalBorkar/movieflix",
    featured: false,
    tech: ["React", "OpenImdb Api"],
  },
];

const Projects = () => {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Recent projects upon which I have worked on."
      className="relative"
    >
      <div className="space-y-5 lg:space-y-10 px-5 md:px-10 lg:px-20 2xl:px-40">
        {/* Right SVG */}
        <img
          src={RightSvg}
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        {projectsData
          .filter((e) => e.featured === true)
          .map((e, i) => (
            <motion.div key={i} variants={fadeTop} {...motionStep}>
              <Featured
                live={e.live}
                thumbnail={e.thumbnail}
                code={e.code}
                title={e.title}
                description={e.description}
                tech={e.tech}
                secondary={i % 2 === 0 ? false : true}
              />
            </motion.div>
          ))}
      </div>

      <div className="grid grid-cols-8 2xl:grid-cols-12 gap-6 gap-y-8 my-10 px-5 md:px-10 lg:px-20 2xl:px-40">
        {projectsData
          .filter((e) => e.featured !== true)
          .map((e, i) => (
            <ProjectCard
              live={e.live}
              thumbnail={e.thumbnail}
              code={e.code}
              title={e.title}
              description={e.description}
              tech={e.tech}
              key={i}
            />
          ))}
      </div>
    </Section>
  );
};

export default Projects;
