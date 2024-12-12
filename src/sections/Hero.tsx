import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div className="relative z-0 py-32 md:py-48 lg:py-60 overflow-x-clip">
      <div className="[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] absolute inset-0">
        <div
          className="-z-10 absolute inset-0 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="hero-ring size-[620px]"></div>
        <div className="hero-ring size-[820px]"></div>
        <div className="hero-ring size-[1020px]"></div>
        {/* shouldOrbit: boolean;
            shouldSpin: boolean;
            spinDuration: string;
            orbitDuration?: string;
         */}
        <HeroOrbit
          size={800}
          rotation={20}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="10s"
        >
          <SparkleIcon className="text-emerald-300/20 size-8" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={90}
          shouldOrbit
          orbitDuration="15s"
          shouldSpin
          spinDuration="10s"
        >
          <SparkleIcon className="text-emerald-300/20 size-20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="10s"
        >
          <StarIcon className="text-emerald-300 size-12" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={20}
          shouldOrbit
          orbitDuration="22s"
          shouldSpin
          spinDuration="10s"
        >
          <StarIcon className="text-emerald-300 size-8" />
        </HeroOrbit>
        <HeroOrbit
          size={630}
          rotation={-50}
          shouldOrbit
          orbitDuration="35s"
          shouldSpin
          spinDuration="10s"
        >
          <StarIcon className="text-emerald-300 size-8" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={60}
          shouldOrbit
          orbitDuration="25s"
          shouldSpin
          spinDuration="10s"
        >
          <StarIcon className="text-emerald-300 size-8" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="10s"
        >
          <SparkleIcon className="text-emerald-300/20 size-20" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="inline-flex items-center gap-4 border-gray-800 bg-gray-950 px-4 py-1.5 border rounded-md">
            <div className="relative bg-green-500 rounded-full size-2.5">
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping-large"></div>
            </div>
            <div className="font-medium text-sm">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-lg">
          <h1 className="mt-8 font-serif text-3xl text-center md:text-5xl tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I&apos;m trying to be specialized...
          </p>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center gap-4 mt-8">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border-white/15 hover:bg-gray-600/75 px-6 border rounded-xl h-12 transition duration-300"
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </a>
          <button className="inline-flex items-center gap-2 border-white bg-white hover:bg-gray-300/75 px-6 border rounded-xl h-12 text-gray-900 transition duration-300">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
