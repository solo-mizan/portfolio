import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";

export const Footer = () => {
  const FOOTER_LINK = [
    { title: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-mizan/" },
    { title: "Github", href: "https://github.com/solo-mizan" },
    { title: "Facebook", href: "https://facebook.com/solo.mizan" },
  ];

  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative overflow-x-clip">
      <div className="bottom-0 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] left-1/2 -z-10 absolute bg-emerald-300/30 w-[1600px] h-[400px] -translate-x-1/2"></div>
      <div className="container">
        <div className="flex md:flex-row flex-col md:justify-between items-center gap-8 border-white/15 py-6 border-t text-sm">
          <div className="text-white/40">
            &copy; {currentYear}. All rights reserved.
          </div>
          <nav className="flex md:flex-row flex-col items-center gap-6">
            {FOOTER_LINK.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
