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
              Hello, I am <span className="font-semibold">Prajwal Borkar.</span>{" "}
              I am a{" "}
              <span className="font-semibold">Full Stack Web Developer</span>. I
              am proficient in{" "}
              <span className="font-semibold">
                {" "}
                Apache NiFi, ReactJS, Spring, Spring Boot, Java, Tailwind CSS.
              </span>
              I am particularly enthusiastic about contributing to{" "}
              <span className="font-semibold">frontend technologies.</span> I am
              excited about the prospect of leveraging my expertise to create
              impactful and user-centric frontend solutions.
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
            title="September 2021 - Present "
            desc={
              <ul className="list-disc pl-5 space-y-2">
                <li> 
                  Developed scalable client and server-side applications using Angular for frontend and Java/Spring Boot for
                  backend, ensuring high performance, testability, and seamless integration.
                  Optimized existing Angular applications, implementing advanced features by integrating new data fields and
                  modifying backend REST API calls, enhancing application functionality and user experience.
                </li>
                <li>
                  Led the successful migration of a database from Solr to
                  Oracle, adeptly transitioned from NoSQL to SQL, implemented
                  necessary codebase changes, prioritized data integrity
                  throughout the migration process, and reduced downtime by 20%
                  during critical version updates.
                </li>
                <li>
                  Automated the daily movement of 10M data files using Apache NiFi, reducing processing time by 40% and
                  improving operational efficiency by 50%.
                  Reduced data processing time by 40%, increased operational
                  efficiency by 50%, and automated 10M file movement per day
                  with Apache NiFi workflows.
                </li>
                <li>
                  Implemented a Grafana dashboard to monitor Apache NiFi performance in real time, improving operational
                  visibility and enabling data-driven decision-making.
                </li>
                <li>
                  Automated deployments using Docker and Jenkins, reducing deployment times by 60%, and ensuring
                  consistency across development, staging, and production environments.
                  Collaborated with cross-functional teams in an Agile environment, participating in sprint planning, code reviews,
                  and complex bug fixes to deliver high-quality software on time.
                </li>
              </ul>
            }
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
            title="Jun 2017-Aug 2021"
            desc={
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  BE in Computer Engineering from Sinhgad Institute of
                  Technology and Science, Pune.
                </li>
              </ul>
            }
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
