// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaLinkedin, FaGithub, FaUserAlt, FaBriefcase, FaCode, FaEnvelope } from 'react-icons/fa';
// import { TypeAnimation } from 'react-type-animation';
// import { projects } from './data.js';

// export default function Portfolio() {
//   return (
//     <div className="bg-black text-gray-200 min-h-screen font-sans">
//       {/* Header */}
//       <header className="bg-gray-900 shadow sticky top-0 z-50">
//         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//           <div className="flex items-center space-x-4">
//             <div className="text-2xl font-bold text-white">Vishal Verma</div>
//             <nav className="hidden md:flex space-x-6 text-gray-300">
//               <a href="#about" className="hover:text-white flex items-center space-x-1"><FaUserAlt /> <span>About</span></a>
//               <a href="#experience" className="hover:text-white flex items-center space-x-1"><FaBriefcase /> <span>Experience</span></a>
//               <a href="#projects" className="hover:text-white flex items-center space-x-1"><FaCode /> <span>Projects</span></a>
//               <a href="#contact" className="hover:text-white flex items-center space-x-1"><FaEnvelope /> <span>Contact</span></a>
//             </nav>
//           </div>
//           <div className="flex items-center space-x-4">
//             <a href="https://www.linkedin.com/in/vishalverma123/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white"><FaLinkedin /></a>
//             <a href="https://github.com/VishalVermaa01" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white"><FaGithub /></a>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-16 flex items-center">
//         <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8">
//           <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
//             <img
//               src="/profile.jpg"
//               alt="Vishal Verma"
//               className="w-40 h-40 rounded-full object-cover border-4 border-gray-600 shadow-lg"
//             />
//           </motion.div>
//           <div className="text-center md:text-left">
//             <motion.h1
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-5xl font-extrabold mb-2 text-white"
//             >
//               Vishal Verma
//             </motion.h1>
//             <motion.h2
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-2xl font-bold mb-4 text-gray-300"
//             >
//               <TypeAnimation
//                 sequence={['Blockchain & Web3 Developer', 2000, 'Full-Stack DApp Builder', 2000, 'Smart Contract Engineer', 2000]}
//                 wrapper="span"
//                 speed={50}
//                 repeat={Infinity}
//               />
//             </motion.h2>
//             <p className="max-w-xl mb-6 text-gray-300">
//               Passionate about building secure, scalable, and decentralized solutions. Skilled in Solidity, React.js, and blockchain architecture.
//             </p>
//             <div className="flex justify-center md:justify-start space-x-4">
//               <a href="https://www.linkedin.com/in/vishalverma123/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 text-gray-900 px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-white">
//                 <FaLinkedin /> <span>LinkedIn</span>
//               </a>
//               <a href="https://github.com/VishalVermaa01" target="_blank" rel="noopener noreferrer" className="bg-gray-100 text-gray-900 px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-white">
//                 <FaGithub /> <span>GitHub</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="container mx-auto px-6 py-16">
//         <motion.h3 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold mb-4 text-white">About Me</motion.h3>
//         <motion.p initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl text-gray-400">
//           I'm a B.Tech Computer Science student at IIIT Ranchi (2022-2026) with a strong foundation in blockchain development, smart contracts, and Web3 technologies. I love turning ideas into reality through clean code and thoughtful design.
//         </motion.p>
//       </section>

//       {/* Experience Section */}
//       <section id="experience" className="bg-gray-900 py-16">
//         <div className="container mx-auto px-6">
//           <motion.h3 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold mb-8 text-white">Experience</motion.h3>
//           <div className="space-y-6">
//             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gray-800 p-6 rounded-lg shadow">
//               <h4 className="text-xl font-semibold text-white">Bharat Electronics Limited (BEL) - Software Intern</h4>
//               <p className="text-sm text-gray-400">June 2025 - July 2025 | Bangalore, India</p>
//               <p className="text-gray-300">Developed a blockchain-based certificate management system using Hyperledger Fabric, ensuring secure issuance, verification, and auditability of records.</p>
//             </motion.div>
//             <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gray-800 p-6 rounded-lg shadow">
//               <h4 className="text-xl font-semibold text-white">QuadB Technologies - Blockchain Trainee</h4>
//               <p className="text-sm text-gray-400">Feb 2025 - April 2025 | Remote</p>
//               <p className="text-gray-300">Built and deployed decentralized applications on the Internet Computer Protocol, implementing secure authentication and identity management layers.</p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="container mx-auto px-6 py-16">
//         <motion.h3 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold mb-8 text-white">Projects</motion.h3>
//         <div className="grid md:grid-cols-2 gap-6">
//           {projects.map((p, idx) => (
//             <motion.div
//               key={p.name}
//               className="bg-gray-800 p-6 rounded-lg shadow-md"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.12, duration: 0.5 }}
//               whileHover={{ scale: 1.03, boxShadow: '0 10px 25px rgba(255,255,255,0.05)' }}
//             >
//               <h4 className="text-xl font-semibold text-white">{p.name}</h4>
//               <p className="mt-2 text-gray-400">{p.description}</p>
//               <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-400 hover:underline">
//                 View Project
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="bg-gray-900 py-16">
//         <div className="container mx-auto px-6 text-center">
//           <motion.h3 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold mb-4 text-white">Get In Touch</motion.h3>
//           <p className="text-gray-400">Feel free to reach out for collaborations or just a friendly chat.</p>
//           <p className="mt-4">📧 <a href="mailto:vishal.2022ug1068@iiitranchi.ac.in" className="text-blue-400 hover:underline">vishal.2022ug1068@iiitranchi.ac.in</a></p>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-950 py-6 text-center text-gray-500">
//         © {new Date().getFullYear()} Vishal Verma. All rights reserved.
//       </footer>
//     </div>
//   );
// }

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaUserAlt, FaBriefcase, FaCode, FaEnvelope } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const projects = [
  {
    name: 'Yield Staking DApp',
    description: 'Decentralized staking platform for ERC-20 tokens with automated reward calculation and distribution. Built with Solidity, React.js, and Truffle.',
    url: 'https://github.com/VishalVermaa01/Yield-Staking--Decentralized-Banking'
  },
  {
    name: 'EstateChain',
    description: 'Blockchain-powered real estate marketplace enabling property listing, transactions, and fractional ownership using Solidity and Hardhat.',
    url: 'https://github.com/VishalVermaa01/estateChain'
  },
  {
    name: 'VerdictXR',
    description: 'Decentralized, immersive courtroom simulation with AI-powered roles and WebXR integration. Built using Motoko, JS/TS, Three.js.',
    url: 'https://github.com/VishalVermaa01/verdictXR'
  },
  {
    name: 'JobVault',
    description: 'Blockchain-based job verification and portfolio management ensuring authenticity of credentials.',
    url: 'https://github.com/VishalVermaa01/JobVault'
  },
  {
    name: 'Blockchain Simulation',
    description: 'Simulates blockchain fundamentals in Python, including mining, proof-of-work, and chain validation.',
    url: 'https://github.com/VishalVermaa01/Blockchain-Simulation'
  }
];

export default function Portfolio() {
  return (
    <div className="bg-black text-gray-200 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-gray-900/80 shadow-lg shadow-gray-800/50 sticky top-0 z-50 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/profile.jpg" alt="Vishal Verma" className="w-12 h-12 rounded-full object-cover border-2 border-blue-500" />
            <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-extrabold text-white tracking-wide hover:text-blue-400 transition-colors">Vishal Verma</motion.h1>
          </div>
          <nav className="hidden md:flex space-x-8 text-gray-300 font-medium">
            {[
              { id: 'about', icon: <FaUserAlt />, label: 'About' },
              { id: 'experience', icon: <FaBriefcase />, label: 'Experience' },
              { id: 'projects', icon: <FaCode />, label: 'Projects' },
              { id: 'contact', icon: <FaEnvelope />, label: 'Contact' }
            ].map(link => (
              <a key={link.id} href={`#${link.id}`} className="hover:text-white flex items-center space-x-1 transition-all duration-200 hover:scale-105">
                {link.icon} <span>{link.label}</span>
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <a href="https://www.linkedin.com/in/vishalverma123/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition-colors"><FaLinkedin /></a>
            <a href="https://github.com/VishalVermaa01" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 hover:bg-gray-600 transition-colors"><FaGithub /></a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 animate-pulse"></div>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-10 relative z-10">
          <img src="/profile.jpg" alt="Vishal Verma" className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg" />
          <div className="text-center md:text-left">
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-6xl font-extrabold mb-6">Vishal Verma</motion.h1>
            <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-3xl font-bold mb-4 text-blue-400">
              <TypeAnimation
                sequence={['Blockchain & Web3 Developer', 2000, 'Full-Stack DApp Builder', 2000, 'Smart Contract Engineer', 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="max-w-xl mb-8 text-gray-300">
              Passionate about building secure, scalable, and decentralized solutions. Skilled in Solidity, React.js, and blockchain architecture.
            </motion.p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.linkedin.com/in/vishalverma123/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-3 rounded-full flex items-center space-x-2 hover:scale-105 hover:shadow-lg transition">
                <FaLinkedin /> <span>LinkedIn</span>
              </a>
              <a href="https://github.com/VishalVermaa01" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-gray-200 to-gray-400 text-black px-6 py-3 rounded-full flex items-center space-x-2 hover:scale-105 hover:shadow-lg transition">
                <FaGithub /> <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-24">
        <motion.h3 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-5xl font-bold mb-6 text-white border-l-4 border-blue-500 pl-4">About Me</motion.h3>
        <motion.p initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl text-gray-400 leading-relaxed">
          I'm a B.Tech Computer Science student at IIIT Ranchi (2022-2026) with a strong foundation in blockchain development, smart contracts, and Web3 technologies. I love turning ideas into reality through clean code and thoughtful design.
        </motion.p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-gray-900 py-24">
        <div className="container mx-auto px-6">
          <motion.h3 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-5xl font-bold mb-10 text-white border-l-4 border-blue-500 pl-4">Experience</motion.h3>
          <div className="grid md:grid-cols-2 gap-10">
            {[{
              title: 'Bharat Electronics Limited (BEL) - Software Intern',
              period: 'June 2025 - July 2025 | Bangalore, India',
              details: 'Developed a blockchain-based certificate management system using Hyperledger Fabric, ensuring secure issuance, verification, and auditability of records.'
            }, {
              title: 'QuadB Technologies - Blockchain Trainee',
              period: 'Feb 2025 - April 2025 | Remote',
              details: 'Built and deployed decentralized applications on the Internet Computer Protocol, implementing secure authentication and identity management layers.'
            }].map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-transform">
                <h4 className="text-2xl font-semibold text-white mb-2">{exp.title}</h4>
                <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
                <p className="text-gray-300">{exp.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-6 py-24">
        <motion.h3 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-5xl font-bold mb-10 text-white border-l-4 border-blue-500 pl-4">Projects</motion.h3>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, idx) => (
            <motion.div key={p.name} className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-transform" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.12, duration: 0.5 }}>
              <h4 className="text-2xl font-semibold text-white mb-2">{p.name}</h4>
              <p className="mt-2 text-gray-400 mb-4">{p.description}</p>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-400 hover:underline">View Project</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.h3 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-5xl font-bold mb-6 text-white border-l-4 border-blue-500 pl-4 inline-block">Get In Touch</motion.h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-6">Feel free to reach out for collaborations or just a friendly chat.</p>
          <p className="mt-4">📧 <a href="mailto:vermavishal6020@gmail.com" className="text-blue-400 hover:underline">vermavishal6020@gmail.com</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 text-center text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Vishal Verma. All rights reserved.
      </footer>
    </div>
  );
}
