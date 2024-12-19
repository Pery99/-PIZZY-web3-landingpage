import React, { useState, useEffect } from "react";
import { BiCollapse, BiMenu } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setIsOpen(!open);
  };

  const variants = {
    open: { opacity: 1, height: "100vh" },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className={`transition-all duration-300 ${
        scrolled 
          ? "py-4 bg-[#0C0C1D]/80 backdrop-blur-md border-b border-[#2A0E61]/50" 
          : "py-6 bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-space font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            $PIZZY
          </div>
          <ul className="hidden md:flex gap-8">
            {["About", "Tokenomics", "Roadmap", "Community"].map((item) => (
              <li key={item} className="group">
                <a href="" className="font-sans text-lg text-white/90 hover:text-white relative">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <span onClick={toggleNav} className="md:hidden text-white cursor-pointer hover:text-cyan-400 transition-colors">
            {open ? <BiCollapse size={28} /> : <BiMenu size={28} />}
          </span>
        </div>
      </nav>
      
      <AnimatePresence>
        {open && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 bg-[#0C0C1D]/95 backdrop-blur-lg"
          >
            <button
              onClick={toggleNav}
              className="absolute top-6 right-6 p-2 rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-500/10 hover:from-cyan-400/20 hover:to-purple-500/20 transition-all duration-300"
            >
              <BiCollapse size={28} className="text-cyan-400" />
            </button>
            <ul className="flex flex-col items-center justify-center h-full gap-12">
              {["About", "Tokenomics", "Roadmap", "Community"].map((item) => (
                <li key={item} className="relative group">
                  <a href="" className="text-2xl font-bold text-white/90 hover:text-white">
                    {item}
                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
              <div className="flex gap-6 mt-8">
                {[FaSquareXTwitter, FaFacebookSquare, FaSquareGithub].map((Icon, index) => (
                  <Icon 
                    key={index}
                    size={36} 
                    className="text-white/80 hover:text-cyan-400 transition-colors cursor-pointer"
                  />
                ))}
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
