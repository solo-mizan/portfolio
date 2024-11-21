import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="lg:py-24 pb-16">
      <div className="container">
        <div className="flex justify-center">
          <p className="bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400 font-semibold text-transparent uppercase tracking-widest">
            Real-world Results
          </p>
        </div>
        <h2 className="mt-6 font-serif text-3xl text-center md:text-5xl">
          Featured Projects
        </h2>
        <p className="mx-auto mt-4 max-w-md text-center text-white/60 md:text-lg lg:text-xl">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col gap-16 mt-8 md:mt-16">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="relative z-0 after:z-10 after:absolute after:inset-0 after:content-[''] bg-gray-800 mx-auto md-px-10 px-8 p-6 md:pt-12 rounded-3xl overflow-hidden after:outline-2 after:outline after:-outline-offset-2 pt-8 after:rounded-3xl after:outline-white/30 after:pointer-events-none lg:pt16 lg:px-20"
            >
              <div
                className="-z-10 absolute inset-0 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              <div className="lg:gap-16 lg:grid lg:grid-cols-2">
                <div className="">
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
                      <li className="inline-flex gap-2 text-sm text-white/50 md:text-base">
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
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 lg:mt-0 -mb-4 md:mb-0"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
