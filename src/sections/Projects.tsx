import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Link from "next/link";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import SectionHeader from "@/components/SectionHeader";

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
    link: "#",
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
    link: "#",
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
    link: "#",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16" id="projects">
      <div className="container">
        <SectionHeader
          subTitle="Real-World Projects"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col mt-10 gap-20">
          {portfolioProjects.map((project: any, index: number) => (
            <div
              key={index}
              className="bg-gray-800 rounded-3xl z-0 after:content-[''] after:absolute after:inset-0 after:z-10 after:outline-2 after:outline after:outline-offset-2 after:rounded-3xl after:outline-white/20  after:pointer-events-none sticky"
              style={{
                top: `calc(64px + ${index * 50}px)`,
              }}
            >
              <div className="overflow-hidden px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
                <div
                  className="absolute inset-0 -z-10 opacity-5"
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                  }}
                ></div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-1 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:text-4xl">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4" />
                    <ul className="flex flex-col gap-4 mt-4">
                      {project.results.map((result: any, index: number) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm md:text-base text-white/50"
                        >
                          <CheckIcon className="size-5" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={project.link}>
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-6">
                        <span>View Live Site</span>
                        <ArrowUpRightIcon className="size-5" />
                      </button>
                    </Link>
                  </div>
                  <div className="relative">
                    <Image
                      className="mt-8 -mb-4 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none lg:rounded-br-[2.5rem]"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
