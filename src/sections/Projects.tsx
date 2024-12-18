import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Falcon Inc.",
    year: "2024",
    title: "Biyesaadi (Matrimonial Web App)",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://biyesaadi.vercel.app/",
    image: darkSaasLandingPage,
  },
  {
    company: "ETMMAM Co.",
    year: "2024",
    title: "Multivendor Business Buy Sell",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://etmmam-frontend.vercel.app/",
    image: lightSaasLandingPage,
  },
  {
    company: "Group Project",
    year: "2022",
    title: "Shohoj Pay",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://shohoj-pay-app.web.app/",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="lg:py-24 pb-16">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              style={{
                top: `calc(64px + ${projectIndex * 20}px`,
              }}
              key={project.title}
              className="top-0 px-8 md:px-10 lg:px-20 p-6 pt-8 md:pt-12 pb-0 lg:pt16 sticky"
            >
              <div className="lg:gap-16 lg:grid lg:grid-cols-2">
                <div className="lg:pb-16">
                  <div className="inline-flex gap-2 bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400 font-bold text-sm text-transparent uppercase tracking-widest">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-2 md:mt-5 font-serif text-2xl md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-white/10 mt-4 md:mt-5 border-t-2" />
                  <ul className="flex flex-col gap-3 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="inline-flex gap-2 text-sm text-white/50 md:text-base"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="inline-flex justify-center items-center gap-2 bg-white mt-8 px-6 rounded-xl w-full md:w-auto h-12 font-semibold text-gray-950">
                      <span>View Live Site</span>
                      <ArrowUpRightIcon className="size-5" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="lg:absolute mt-8 lg:mt-0 -mb-4 md:mb-0 lg:w-auto lg:max-w-none lg:h-full"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
