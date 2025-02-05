import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex items-center justify-center fixed top-3 w-full z-20">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/70 backdrop-blur-0">
        <Link href="/" className="nav-link">
          Home
        </Link>

        <Link href="#projects" className="nav-link">
          Projects
        </Link>

        <Link href="#about" className="nav-link">
          About
        </Link>

        <Link
          href="/contact"
          className="nav-link bg-blue-700 text-white hover:bg-gray-900"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};
