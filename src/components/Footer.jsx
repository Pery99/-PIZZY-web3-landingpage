import React from 'react';
import { motion } from 'framer-motion';
import { FaDiscord, FaTelegramPlane, FaTwitter, FaMediumM, FaGithub } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Footer = () => {
  const socialLinks = [
    { icon: <FaDiscord />, label: 'Discord' },
    { icon: <FaTelegramPlane />, label: 'Telegram' },
    { icon: <FaTwitter />, label: 'Twitter' },
    { icon: <FaMediumM />, label: 'Medium' },
    { icon: <FaGithub />, label: 'GitHub' },
  ];

  const footerLinks = {
    Protocol: ['Tokenomics', 'Governance', 'Security', 'Documentation'],
    Community: ['Blog', 'Community Hub', 'Forum', 'Events'],
    Resources: ['Whitepaper', 'Audit Reports', 'Brand Assets', 'FAQs'],
  };

  return (
    <footer className="relative bg-[#0C0C1D] pt-20 overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C0C1D] to-[#0C0C1D] pointer-events-none" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-12">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Join the $PIZZY Community
              </h2>
              <p className="text-gray-400 max-w-md">
                Be part of the next generation of decentralized finance. Join our growing community and stay updated.
              </p>
            </motion.div>

            {/* Newsletter */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-[#1A123D]/50 border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/20 transition duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="p-3 rounded-xl bg-gradient-to-b from-[#2A0E61]/50 to-[#162454]/50 border border-purple-500/20 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column - Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-white font-semibold">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-cyan-400 transition-colors inline-flex items-center group"
                      >
                        <span>{link}</span>
                        <HiArrowNarrowRight className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 py-6 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 $PIZZY Protocol. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;