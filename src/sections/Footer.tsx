import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const Footer = () => {
  const FOOTER_LINK = [
    { title: "Youtube", href: "#" },
    { title: "Twitter", href: "#" },
    { title: "Github", href: "#" },
    { title: "Facebook", href: "#" },
  ];

  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="bottom-0 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] left-1/2 -z-10 absolute bg-emerald-300/30 w-[1600px] h-[400px] -translate-x-1/2"></div>
      <div className="container">
        <div className="flex md:flex-row flex-col md:justify-between items-center gap-8 border-white/15 py-6 border-t text-sm">
          <div className="text-white/40">
            &copy; {currentYear}. All rights reserved.
          </div>
          <nav className="flex md:flex-row flex-col items-center gap-6">
            {FOOTER_LINK.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
