"use client";

import SectionHeader from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import jsIcon from "@/assets/icons/square-js.svg";
import htmlIcon from "@/assets/icons/html5.svg";
import cssIcon from "@/assets/icons/css3.svg";
import reactIcon from "@/assets/icons/react.svg";
import githubIcon from "@/assets/icons/github.svg";
import nextIcon from "@/assets/icons/nextjs.svg";
import mapImage from "@/assets/images/map.png";
import smileEmoji from "@/assets/images/memoji-smile.png";
import CardHeaderAbout from "@/components/CardHeaderAbout";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolBoxItems = [
  {
    title: "HTML 5",
    icon: htmlIcon,
  },
  {
    title: "CSS3",
    icon: cssIcon,
  },
  {
    title: "JavaScript",
    icon: jsIcon,
  },
  {
    title: "Reactjs",
    icon: reactIcon,
  },
  {
    title: "Nextjs",
    icon: nextIcon,
  },
  {
    title: "Github",
    icon: githubIcon,
  },
];

const hobbies = [
  {
    title: "Fitness",
    icon: "🏋️",
    left: "20%",
    top: "17%",
  },
  {
    title: "Cricket",
    icon: "🏏",
    left: "70%",
    top: "17%",
  },
  {
    title: "Photography",
    icon: "📷",
    left: "25%",
    top: "45%",
  },
  {
    title: "Gaming",
    icon: "🎮",
    left: "80%",
    top: "45%",
  },
  {
    title: "Music",
    icon: "🎵",
    left: "20%",
    top: "73%",
  },
  {
    title: "Biking",
    icon: "🏍️",
    left: "65%",
    top: "73%",
  },
  {
    title: "Travelling",
    icon: "🧳",
    left: "75%",
    top: "89%",
  },
];

export const AboutSection = () => {
  const dragRef = useRef(null);

  return (
    <div className="py-14" id="about">
      <div className="container">
        <SectionHeader
          subTitle="About Me"
          title="A Glimpse Into My World"
          description="Learn Who I am, What I do, What Inspires Me."
        />
        <div className="mt-14 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-1 relative">
              <div className="bg-gray-800 rounded-3xl p-6 relative z-0 overflow-hidden h-[320px] border-2 border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                <CardHeaderAbout
                  title="My Reads"
                  description="Discover the books that influence my perspectives."
                />
                <div className="w-40 mx-auto mt-8">
                  <Image src={bookImage} alt="Book Image" />
                </div>
              </div>
            </div>
            <div className="md:col-span-3 lg:col-span-2 bg-gray-800 rounded-3xl p-6 relative z-0 overflow-hidden h-[320px] border-2 border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] flex flex-col justify-center">
              <CardHeaderAbout
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
              />
              <ToolboxItems
                items={toolBoxItems}
                className="animate-move-left"
              />
              <ToolboxItems
                items={toolBoxItems}
                className="animate-move-right"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            <div className="md:col-span-3 bg-gray-800 rounded-3xl p-6 relative z-0 overflow-hidden h-[320px] border-2 border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] flex flex-col">
              <CardHeaderAbout
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital world."
              />
              <div className="relative flex-1 overflow-hidden" ref={dragRef}>
                {hobbies.map((hobby: any, index: number) => (
                  <motion.div
                    key={index}
                    className="absolute inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 cursor-pointer"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                      transform: "translate(-50%, -50%)",
                    }}
                    drag
                    dragConstraints={dragRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.icon}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 bg-gray-800 rounded-3xl relative z-0 overflow-hidden border-2 border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)] h-[320px]">
              <Image
                src={mapImage}
                alt="map image"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:contents-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full -z-20 animate-ping"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full -z-10"></div>
                <Image src={smileEmoji} alt="smile icon" className="size-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
