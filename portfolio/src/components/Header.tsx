interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="fixed top-0 w-full px-[5%] py-6 bg-[rgba(10,10,10,0.9)] backdrop-blur-md z-[1000] border-b border-white/10">
      <nav className="flex justify-between items-center max-w-[1400px] mx-auto">
        <div className="text-2xl font-bold gradient-text">TY</div>
        <ul className="flex gap-8 list-none md:gap-4">
          <li><a href="#home" className="text-white no-underline transition-colors duration-300 text-[0.95rem] hover:text-[#667eea]">Home</a></li>
          <li><a href="#skills" className="text-white no-underline transition-colors duration-300 text-[0.95rem] hover:text-[#667eea]">Skills</a></li>
          <li><a href="#projects" className="text-white no-underline transition-colors duration-300 text-[0.95rem] hover:text-[#667eea]">Projects</a></li>
          <li><a href="#project-details" className="text-white no-underline transition-colors duration-300 text-[0.95rem] hover:text-[#667eea]">Details</a></li>
          <li><a href="#contact" className="text-white no-underline transition-colors duration-300 text-[0.95rem] hover:text-[#667eea]">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
