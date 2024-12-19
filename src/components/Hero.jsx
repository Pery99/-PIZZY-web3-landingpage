import React from "react";
import { motion } from "framer-motion";
import { FaEthereum } from "react-icons/fa";

const Hero = () => {
  // Particle system setup
  const particles = Array.from({ length: 20 });

  return (
    <div className="relative min-h-[100svh] md:min-h-screen bg-[#0C0C1D] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(42,14,97,0.8),transparent_100%)]" />
      
      {/* Particle System */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
          animate={{
            y: [0, -window.innerHeight],
            x: [0, Math.sin(i) * 50],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100 + 100}%`,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="min-h-[100svh] md:min-h-screen flex items-center pt-20 md:pt-0">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 w-full items-center">
            {/* Left Column - Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8 text-center lg:text-left"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-block"
              >
                <span className="px-4 py-2 rounded-full text-sm bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border border-cyan-400/20 text-cyan-400">
                  Welcome to the Future of DeFi
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold space-y-2 md:space-y-4">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
                >
                  $PIZZY
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  className="block text-white"
                >
                  Protocol
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto lg:mx-0"
              >
                Revolutionizing DeFi with next-gen yield optimization and cross-chain integration
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold hover:shadow-lg hover:shadow-purple-500/20 transition duration-300">
                  Launch App
                </button>
                <button className="px-8 py-4 rounded-xl border border-purple-500/20 text-white font-bold hover:bg-purple-500/10 transition duration-300">
                  Learn More
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column - 3D Token Display */}
            <div className="relative h-[400px] md:h-[600px] perspective-[2000px] -mt-12 md:mt-0">
              <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full">
                  {/* Platform Effect */}
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    {/* Token Rings */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        animate={{ rotateZ: 360 }}
                        transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                      >
                        <div className={`w-[${300 + i * 60}px] h-[${300 + i * 60}px] rounded-full border border-purple-500/20`} />
                      </motion.div>
                    ))}
                    
                    {/* Center Token */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative w-48 h-48 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 backdrop-blur-xl flex items-center justify-center"
                    >
                      <FaEthereum className="w-24 h-24 text-purple-500" />
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-full blur-xl" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
