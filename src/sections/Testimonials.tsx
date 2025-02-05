import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Arvind Patel",
    position: "Chief Technology Officer @ WebDynamics",
    text: "Raj was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Neha Gupta",
    position: "Lead UI/UX Designer @ PixelCraft",
    text: "Working with Raj was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Raghav Sharma",
    position: "Founder & CEO @ TechPulse",
    text: "Raj's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Aditi Mehta",
    position: "Senior Product Manager @ NexaTech",
    text: "Raj is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Karan Desai",
    position: "IT Director @ NextGen Solutions",
    text: "Raj's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16">
      <div className="container">
        <SectionHeader
          subTitle="Happy Clients"
          title="What Clients Say About Me"
          description="Don't just take my word for it. See what my clients have to say
        about my work."
        />
        <div className="mt-16 flex overflow-x-clip">
          <div className="flex gap-8 pr-8 py-4 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {testimonials.map((testi: any, index: number) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-3xl p-6 relative z-0 after:z-10 after:content-['']  after:absolute after:inset-0 after:outline-2 after:outline after:outline-offset-2 after:rounded-3xl after:outline-white/20 max-w-xs md:max-w-md hover:rotate-3 transition-all duration-300"
                  >
                    <div
                      className="absolute inset-0 opacity-5 -z-10"
                      style={{
                        backgroundImage: `url(${grainImage.src})`,
                      }}
                    ></div>
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full">
                        <Image
                          src={testi.avatar}
                          alt={testi.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testi.name}</div>
                        <div className="text-sm text-white/40">
                          {testi.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm">{testi.text}</p>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
