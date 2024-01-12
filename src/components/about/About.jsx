import React from "react";
import Section from "../common/Section";
import { motion } from "framer-motion";
import Quote from "../quote/Quote";
import { FeaturedCardSection } from "../card/FeaturedCardSection";
import FeaturedCard from "../card/FeaturedCard";
import { FaGraduationCap } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import RightSvg from "../../assets/svg/right-pattern.svg";
import BlurCircles from "../BlurCirclesBG/BlurCircles";
import { Reveal } from "../utils/Reveal";

const About = () => {
  return (
    <Section
      id="about"
      title="Overview"
      subtitle="Full Stack Developer"
      className="relative"
    >
      <img
        src={RightSvg}
        alt=""
        className="absolute hidden right-0 bottom-[40%] w-2/12 max-w-xs md:block"
        loading="lazy"
        height={700}
        width={320}
      />
      <div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="flex flex-col min-h-fit text-center xl:text-left xl:flex-row max-w-7xl px-4 mx-auto items-center md:pt-0 md:pb-16 md:mx-20 z-10"
      >
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5 ml-0  xl:pt-0 xl:ml-20 md:pt-10"
        >
          <h4 className="text-2xl font-medium text-amber-600 dark:text-amber-300">
            <Reveal width="100%">Here's a Little Background.</Reveal>
          </h4>
          <div className="bg-white dark:bg-[#101111] p-5 rounded-3xl shadow-lg shadow-gray-400/50 dark:shadow-black/30 ">
            {/* border dark:border-white/5 border-black/10 */}
            <p className="text-base font-light">
              Hi, I am <span className="font-semibold">Prajwal Borkar</span> I
              am a{" "}
              <span className="font-semibold">Full Stack Web Developer</span>. I
              am proficient in{" "}
              <span className="font-semibold">
                {" "}
                Apache NiFi, ReactJS, Spring, Spring Boot, Java, Tailwind CSS{" "}
              </span>
              and many more. I am looking for new opportunities to implement and
              increase my skills in{" "}
              <span className="font-semibold">software development </span> and
              <span className="font-semibold"> web development.</span>
            </p>
          </div>
          <h4 className="text-2xl font-medium text-amber-600 dark:text-amber-300">
            <Reveal width="100%">Work Experience.</Reveal>
          </h4>
          {/* Job card */}
          <FeaturedCard
            icon={
              <div className="rounded-xl bg-amber-400 p-3.5 dark:bg-amber-400">
                <FaLaptopCode className="h-5 w-5 text-white" />
              </div>
            }
            title="28 September 2021 - Present "
            desc={[
              "Working as a Software Engineer at Mphasis.",
              "Here I am working on Apache NiFi, Java, Spring Boot.My role is to develop and maintain the Apache NiFi flows. Also I am working on the Java and Spring Boot project for the client. Maintaining the code quality and writing the unit test cases.",
            ]}
          />
          <h4 className="text-2xl font-medium text-amber-600 dark:text-amber-300">
            <Reveal width="100%">Education.</Reveal>
          </h4>
          {/* Education card */}
          <FeaturedCard
            icon={
              <div className="rounded-xl bg-amber-400 p-3.5 dark:bg-amber-400">
                <FaGraduationCap className="h-5 w-5 text-white" />
              </div>
            }
            title="05 August 2021"
            desc="BE in Computer Engineering from Sinhgad Institute of Technology and Science."
          />
        </motion.div>
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Background blur circles */}
          <BlurCircles />
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative pt-10 md:pt-5 lg:pt-0"
        >
          <Quote />
        </motion.div>
      </div>

      {/* Featured Card Section */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="2xl:px-40"
      >
        <FeaturedCardSection />
      </motion.div>
    </Section>
  );
};

export default About;
