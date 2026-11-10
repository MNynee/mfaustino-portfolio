const Header = () => {
  return (
    <header className="flex flex-col gap-2 px-4 py-3 md:flex-row md:justify-between md:items-center lg:px-18 lg:py-8" id="header">
      <div className="text-[17px] xl:text-[26px] font-fraunces">MATHEUS FAUSTINO</div>
      <div>
        <nav>
          <ul className="flex gap-x-5 xl:gap-x-6 text-[12px] xl:text-[15px]">
            <li>
              <a href="#projects" className="group">
                Projects
                <div className="bg-main-text h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
              </a>
            </li>
            <li>
              <a href="#about" className="group">
                About
                <div className="bg-main-text h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
              </a>
            </li>
            <li>
              <a href="#contact" className="group">
                Contact
                <div className="bg-main-text h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
