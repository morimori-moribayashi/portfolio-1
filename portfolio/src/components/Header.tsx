import { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header className={`fixed top-0 w-full px-[5%] py-6 backdrop-blur-md z-[1000] border-b border-white/10 transition-all duration-300 ${isScrolled ? 'bg-[rgba(10,10,10,0.95)]' : 'bg-[rgba(10,10,10,0.9)]'}`}>
            <nav className="flex justify-between items-center max-w-[1400px] mx-auto">
                <div className="text-2xl font-bold gradient-text">TY</div>
                <ul className="flex gap-8 list-none md:gap-4">
                    <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-white no-underline transition-colors duration-300 text-[0.95rem] hover:text-[#667eea]">Home</a></li>
                    <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="text-white no-underline transition-colors duration-300 text-[0.95rem] hover:text-[#667eea]">Skills</a></li>
                    <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="text-white no-underline transition-colors duration-300 text-[0.95rem] hover:text-[#667eea]">Projects</a></li>
                    <li><a href="#project-details" onClick={(e) => scrollToSection(e, 'project-details')} className="text-white no-underline transition-colors duration-300 text-[0.95rem] hover:text-[#667eea]">Details</a></li>
                    <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-white no-underline transition-colors duration-300 text-[0.95rem] hover:text-[#667eea]">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
