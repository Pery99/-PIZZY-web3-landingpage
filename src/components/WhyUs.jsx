import React from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { FaRocket, FaChartLine, FaEthereum } from 'react-icons/fa';
import { SiHiveBlockchain } from 'react-icons/si';

const WhyUs = () => {
  const stats = [
    { label: 'Total Supply', value: '1B', icon: <SiHiveBlockchain className="text-2xl" /> },
    { label: 'TVL', value: '$25M+', icon: <FaChartLine className="text-2xl" /> },
    { label: 'APY', value: '250%', icon: <FaRocket className="text-2xl" /> },
  ];

  return (
    <div className="relative min-h-screen bg-[#0C0C1D] flex items-center py-12 md:py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 20%, rgba(66, 211, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 60% 60%, rgba(66, 211, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 20%, rgba(66, 211, 246, 0.15) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        />
        {/* Floating Elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 opacity-20"
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          >
            <FaEthereum className="w-full h-full text-purple-500" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-10 text-center lg:text-left"
          >
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-block"
              >
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border border-cyan-400/20 text-cyan-400">
                  Revolutionary DeFi Protocol
                </span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Future of DeFi
                </span>
                <br />
                <span className="text-white">Starts Here</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Experience the next evolution in decentralized finance with our innovative yield optimization and cross-chain integration.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-xl blur-xl group-hover:opacity-100 transition-opacity opacity-0" />
                  <div className="relative p-6 rounded-xl bg-gradient-to-b from-[#2A0E61]/50 to-[#162454]/50 border border-purple-500/20">
                    <div className="text-cyan-400 mb-3">{stat.icon}</div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group perspective mt-8 lg:mt-0"
          >
            <motion.div
              whileHover={{ rotateY: 10, rotateX: 5 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
              <div className="relative bg-gradient-to-b from-[#2A0E61] to-[#162454] p-6 md:p-8 rounded-2xl space-y-6 md:space-y-8">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white">Join $PIZZY Now</h3>
                  <p className="text-gray-400">Access exclusive features and earn high yields in our ecosystem</p>
                  
                  <div className="space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-purple-500/20 transition duration-300"
                    >
                      Connect Wallet
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-400/10 text-white font-bold text-lg border border-purple-500/20 hover:border-purple-500/40 transition duration-300"
                    >
                      View Documentation
                    </motion.button>
                  </div>
                </div>

                <div className="pt-6 border-t border-purple-500/20">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-gray-400">Available on</span>
                    <div className="flex flex-wrap justify-center gap-3">
                      {['Ethereum', 'BSC', 'Polygon'].map((chain) => (
                        <motion.span
                          key={chain}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20"
                        >
                          {chain}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;