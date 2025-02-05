import heroImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Image from "next/image";
import bgImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparcleIcon from "@/assets/icons/sparkle.svg";
import Section1Orbit from "@/components/Section1Orbit";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${bgImage.src})` }}
        ></div>
        <div className="hero-ring"></div>

        <div className="hero-ring size-[820px]"></div>
        <div className="hero-ring size-[1020px]"></div>
        <div className="hero-ring size-[1220px]"></div>
        <Section1Orbit
          size={430}
          rotation={-14}
          shouldOrbit
          spinDuration="30s"
          starShouldSpin
          starSpinDuration="6s"
        >
          <SparcleIcon className="size-8 text-emerald-100" />
        </Section1Orbit>
        <Section1Orbit
          size={440}
          rotation={90}
          shouldOrbit
          spinDuration="32s"
          starShouldSpin
          starSpinDuration="6s"
        >
          <SparcleIcon className="size-8 text-emerald-100" />
        </Section1Orbit>
        <Section1Orbit
          size={520}
          rotation={-41}
          shouldOrbit
          spinDuration="34s"
          starShouldSpin
          starSpinDuration="6s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </Section1Orbit>
        <Section1Orbit
          size={530}
          rotation={178}
          shouldOrbit
          spinDuration="36s"
          starShouldSpin
          starSpinDuration="6s"
        >
          <SparcleIcon className="size-10 text-emerald-100" />
        </Section1Orbit>
        <Section1Orbit
          size={550}
          rotation={10}
          shouldOrbit
          spinDuration="38s"
          starShouldSpin
          starSpinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </Section1Orbit>
        <Section1Orbit
          size={590}
          rotation={98}
          shouldOrbit
          spinDuration="40s"
          starShouldSpin
          starSpinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </Section1Orbit>
        <Section1Orbit
          size={650}
          rotation={-5}
          shouldOrbit
          spinDuration="42s"
          starShouldSpin
          starSpinDuration="6s"
        >
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </Section1Orbit>
        <Section1Orbit
          size={710}
          rotation={148}
          shouldOrbit
          spinDuration="44s"
          starShouldSpin
          starSpinDuration="6s"
        >
          <SparcleIcon className="size-14 text-emerald-100" />
        </Section1Orbit>
        <Section1Orbit
          size={720}
          rotation={88}
          shouldOrbit
          spinDuration="46s"
          starShouldSpin
          starSpinDuration="6s"
        >
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </Section1Orbit>
        <Section1Orbit
          size={800}
          rotation={-72}
          shouldOrbit
          spinDuration="48s"
          starShouldSpin
          starSpinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </Section1Orbit>
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <Image src={heroImage} alt="Hero" className="size-[100px]" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60">
            I specialize in transforming designs into functional,
            high-performing web applications. Let&apos;s discuss your next
            project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/20 px-6 h-12 rounded-xl hover:bg-white hover:text-black transition-all duration-500">
            <span className="font-semibold">Download My Resume</span>
            <ArrowDown className="size-4" />
          </button>
          <Link href={"/contact"}>
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-transparent hover:text-white transition-all duration-500">
              <span>👋</span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
