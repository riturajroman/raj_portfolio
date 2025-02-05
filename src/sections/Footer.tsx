import Link from "next/link";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "LinkedIn",
    link: "#",
  },
  {
    title: "YouTube",
    link: "#",
  },
  {
    title: "Twitter",
    link: "#",
  },
  {
    title: "Instagram",
    link: "#",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip">
      <div className="absolute h-[350px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 pointer-events-none"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All Rights Reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((items, index) => (
              <Link
                key={index}
                href={items.link}
                className="inline-flex items-center gap-1.5 hover:text-emerald-300 transition-all hover:scale-105"
              >
                <span className="font-semibold">{items.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
