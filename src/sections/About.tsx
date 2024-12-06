"use client";

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import ToolsIcon from "@/components/ToolsIcon";
import mapImg from "@/assets/images/real-map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const HOBBIES = [
  {
    title: "Reading",
    emoji: "📕",
    left: "5%",
    top: "5%",
  },
  {
    title: "Walking",
    emoji: "🚶",
    left: "5%",
    top: "50%",
  },
  {
    title: "Riding",
    emoji: "🚴",
    left: "10%",
    top: "35%",
  },
  {
    title: "Touring",
    emoji: "⛺",
    left: "35%",
    top: "40%",
  },
  {
    title: "Sleeping",
    emoji: "🛌",
    left: "70%",
    top: "45%",
  },
  {
    title: "Eating",
    emoji: "🍜",
    left: "5%",
    top: "65%",
  },
  {
    title: "Exploring",
    emoji: "🗺",
    left: "45%",
    top: "70%",
  },
];

const TOOLBOX = [
  {
    title: "Javascript",
    icon: JavascriptIcon,
  },
  {
    title: "HTML",
    icon: HTMLIcon,
  },
  {
    title: "CSS",
    icon: CSSIcon,
  },
  {
    title: "React",
    icon: ReactIcon,
  },
  {
    title: "Next.js",
    icon: ReactIcon,
  },
  {
    title: "Github",
    icon: GithubIcon,
  },
  {
    title: "Node.js",
    icon: GithubIcon,
  },
  {
    title: "Docker",
    icon: ChromeIcon,
  },
  {
    title: "Postman",
    icon: HTMLIcon,
  },
  {
    title: "AWS",
    icon: CSSIcon,
  },
  {
    title: "SQL",
    icon: ReactIcon,
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div id="about" className="py-18 lg:py-28">
      {/* Section Header */}
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspire me."
        />
        <div className="flex flex-col justify-center items-center gap-8 mx-auto mt-20">
          {/* books and tools combined */}
          <div className="md:gap-8 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            {/* books section  */}
            <Card className="md:col-span-2 lg:col-span-1 mb-6 h-[320px]">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective."
              />
              <div className="mx-auto mt-2 md:mt-0 w-40">
                <Image src={bookImage} alt="Book cover" className="" />
              </div>
            </Card>
            {/* tools section  */}
            <Card className="md:col-span-3 lg:col-span-2 h-[320px]">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                className=""
              />
              <ToolboxItems
                items={TOOLBOX}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:29s]"
              />
              <ToolboxItems
                items={TOOLBOX}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:33s]"
              />
            </Card>
          </div>
          {/* hobby and map combined */}
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3 lg:gid-cols-5">
            {/* hobby section */}
            <Card className="flex flex-col md:col-span-2 lg:col-span-3 p-0 h-[320px]">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {HOBBIES.map((hobby) => (
                  <motion.div
                    drag
                    dragConstraints={constraintRef}
                    key={hobby.title}
                    className="inline-flex absolute items-center gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5 rounded-full"
                    style={{ left: hobby.left, top: hobby.top }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            {/* map section  */}
            <Card className="relative md:col-span-2 lg:col-span-1 p-0 h-[320px]">
              <Image
                src={mapImg}
                alt="map"
                className="object-left-top w-full h-full object-cover"
              />
              <div className="top-1/2 left-1/2 absolute after:absolute after:inset-0 after:content-[''] rounded-full after:rounded-full -translate-x-1/2 -translate-y-1/2 size-20 after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-950/30">
                <div className="-z-20 absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full animate-ping [animation-duration:2s]"></div>
                <div className="-z-10 absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full"></div>
                <Image
                  src={smileMemoji}
                  alt="smile emoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
