import React from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Services = () => {
  const roadmapData = [
    {
      phase: "Phase 1",
      title: "Foundation",
      description: "Establishing core DeFi infrastructure",
      items: ["Smart Contract Development", "Security Audits", "Initial DEX Launch"],
      status: "completed"
    },
    {
      phase: "Phase 2",
      title: "Expansion",
      description: "Growing the DeFi ecosystem",
      items: ["Yield Farming", "Liquidity Mining", "Governance Token"],
      status: "ongoing"
    },
    {
      phase: "Phase 3",
      title: "Innovation",
      description: "Advanced DeFi features",
      items: ["Cross-chain Bridge", "Layer 2 Integration", "NFT Marketplace"],
      status: "upcoming"
    },
    {
      phase: "Phase 4",
      title: "Evolution",
      description: "Ecosystem maturity and scaling",
      items: ["DAO Governance", "Multi-chain Deployment", "DeFi 2.0 Features"],
      status: "upcoming"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0C0C1D] py-12 md:py-20 px-4 md:px-6 overflow-hidden">
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border border-cyan-400/20 text-cyan-400 inline-block mb-6">
            Development Timeline
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Our Roadmap
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Advancing the future of DeFi through strategic development and innovation
          </p>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto relative">
        {/* Center Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/20 via-purple-500/20 to-transparent" />

        {roadmapData.map((item, index) => (
          <motion.div
            key={item.phase}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`relative flex items-start mb-12 md:mb-24 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Hexagon Marker */}
            <div className="absolute left-0 md:left-1/2 transform -translate-x-2 md:-translate-x-1/2 flex items-center justify-center">
              <div className="w-8 h-8 md:w-12 md:h-12 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rotate-45 transform origin-center" />
                <div className="absolute inset-0.5 bg-[#0C0C1D] rotate-45 transform origin-center" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-cyan-400 font-bold">{index + 1}</span>
                </div>
              </div>
            </div>

            {/* Content Card */}
            <div className={`ml-16 md:ml-0 ${
              index % 2 === 0 ? 'md:mr-[50%] md:pr-12' : 'md:ml-[50%] md:pl-12'
            } relative group w-full md:w-[calc(50%-2rem)]`}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative p-6 rounded-2xl bg-gradient-to-b from-[#2A0E61]/80 to-[#162454]/80 border border-purple-500/20 backdrop-blur-sm"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium 
                      ${item.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                        item.status === 'ongoing' ? 'bg-cyan-500/20 text-cyan-400' :
                        'bg-purple-500/20 text-purple-400'}`}
                    >
                      {item.status}
                    </span>
                    <h3 className="text-xl font-bold text-white">{item.phase}</h3>
                  </div>

                  <h4 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-3">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  
                  <ul className="space-y-3">
                    {item.items.map((listItem, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="flex items-center gap-3 text-gray-300 group/item"
                      >
                        <HiOutlineArrowNarrowRight className="text-cyan-400 group-hover/item:translate-x-1 transition-transform" />
                        <span className="group-hover/item:text-white transition-colors">
                          {listItem}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
