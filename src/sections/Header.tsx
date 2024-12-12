export const Header = () => {
  return (
    <div className="top-3 left-1/2 z-10 fixed flex justify-center items-center mx-auto -translate-x-1/2">
      <nav className="flex gap-1 border-white/15 bg-white/10 backdrop-blur mx-auto border rounded-full">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a href="#contact" className="">
          Contact
        </a>
      </nav>
      {/* bg-white hover:bg-white/70 text-gray-900 hover:text-gray-900 nav-item */}
    </div>
  );
};
