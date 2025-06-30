import  React from "react"
import { useState, useEffect,useRef} from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaCertificate,
  FaEnvelope,
  FaProjectDiagram,
  FaInfoCircle,
  FaGithub,
  FaPalette,
  FaEye,
  FaTimes,
  FaPhoneAlt,
  FaPaperPlane,
  FaDownload,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaGitAlt,
  FaReact,
  FaBootstrap,
  FaSass,
  FaBrain,
  FaComments,
  FaClock,
  FaSyncAlt,
  FaCode,
  FaArrowRight,
  FaBars,
  FaLinkedin,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaStar,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaChevronRight,
  FaHeart,
  FaRocket,
  FaLightbulb,
  FaAward,
} from "react-icons/fa"
import {
  SiCplusplus,
  SiTailwindcss,
  SiGreensock,
  SiVercel,
  SiFirebase,
  SiFigma,
  SiLeetcode,
  SiCodechef,
  SiHackerrank,
} from "react-icons/si"
import { SiShadcnui } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { TbApi } from "react-icons/tb";
// import { Link } from "react-router-dom";
import { VscVscode } from "react-icons/vsc";
import emailjs from 'emailjs-com';
import ninjas from '@/assets/ninjas.jpg';
import ten from '@/assets/The Entrepreneurship Network.jpg';
import vertx from '@/assets/vertx ai.png'
import udemy from '@/assets/udemy.png'
import cpp from '@/assets/cpp.png'
import figma from '@/assets/figma.png'
import ccna from '@/assets/ccna.png'
// import gfg from '../src/assets/gfg.png'
import python from '@/assets/python.png'
// import random from '@/assets/randompic.jpg'
import dummyuser from '@/assets/dummyuser.jpg'
import cppcert from '@/assets/CPP CERTIFICATION.pdf'
import dsacert from '@/assets/DSA certification.pdf'
import udemycert from '@/assets/UDEMY WEB DEVELOPMENT.pdf'
import pythoncert from '@/assets/IRFANABDUL-Python_All_2021_-certificate (1).pdf'
// import cn from '../src/assets/cn.png'
// import cisco from '../src/assets/cisco.png'
// import c from '../src/assets/c.png'
// import figma from '../src/assets/figma.png'
// import backend from '../src/assets/backend.png'
import anime1 from '@/assets/anime-1.png'
import anime2 from '@/assets/anime-2.png'
import crud from '@/assets/crud-app.png'
import social from '@/assets/social-bond.png'

const sections = [
  { id: "about", label: "About", icon: <FaInfoCircle size={20} /> },
  { id: "skills", label: "Skills", icon: <FaCode size={20} /> },
  { id: "projects", label: "Projects", icon: <FaProjectDiagram size={20} /> },
  { id: "certifications", label: "Certifications", icon: <FaCertificate size={20} /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope size={20} /> },
]

const projects = [
  {
    id: 1,
    title: "Social Connect",
    image: social,
    livelink: "https://social-connect-brown.vercel.app/",
    githublink: "https://github.com/Irfanabdul1108/SOCIAL-CONNECT",
    description:
      "A comprehensive social networking platform built with React and modern web technologies. Features real-time messaging, user profiles, and dynamic content sharing.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    category: "Web Application",
  },
  {
    id: 2,
    title: "Animated Website 02",
    image: anime2,
    livelink: "https://animatedwebsite02.netlify.app/",
    githublink: "https://github.com/Irfanabdul1108/ANIMATED_WEBSITE-02",
    description:
      "An immersive animated website showcasing advanced CSS animations and JavaScript interactions. Features smooth scrolling, parallax effects, and responsive design.",
    tech: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    category: "Animation",
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: "/placeholder.svg?height=300&width=400",
    livelink: "https://animatedwebsite01.netlify.app/",
    githublink: "https://github.com/Irfanabdul1108/ANIMATED_WEBSITE-01",
    description:
      "A creative portfolio website with stunning animations and modern design principles. Showcases projects and skills with interactive elements.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Portfolio",
  },
  {
    id: 4,
    title: "CRUD Application",
    image: crud,
    livelink: "https://miniprojectcrud.netlify.app/",
    githublink: "https://github.com/Irfanabdul1108/CRUD-APPLICATION",
    description:
      "A full-featured CRUD application with user authentication, data validation, and responsive design. Built with modern web technologies.",
    tech: ["React", "Express.js", "MongoDB", "JWT"],
    category: "Full Stack",
  },
]

const certifications = [
  {
    id: 1,
    title: "C++ Programming",
    image: cpp,
    organization: "Great Learning",
    date: "2024",
    file:cppcert,
    description: "Advanced C++ programming concepts including OOP, data structures, and algorithms.",
    skills: ["C++", "OOP", "Data Structures"],
  },
  {
    id: 2,
    title: "Full Stack Development",
    image: udemy,
    organization: "Udemy",
    date: "2024",
    file:udemycert,
    description: "Comprehensive full-stack development course covering frontend and backend technologies.",
    skills: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: 3,
    title: "Python Programming",
    image: python,
    file:pythoncert,
    organization: "OpenEDG Python Institute",
    date: "2024",
    description: "Programming essentials in Python covering syntax, data structures, and algorithms.",
    skills: ["Python", "Data Structures", "Algorithms"],
  },
  {
    id: 4,
    title: "Data Structures & Algorithms",
    image:ninjas,
    file:dsacert,
    organization: "Coding Ninjas",
    date: "2025",
    description: "Comprehensive course on data structures and algorithms with practical implementations.",
    skills: ["DSA", "Problem Solving", "Optimization"],
  },
  {
    id: 5,
    title: "Figma",
    image:figma,
    file:figma,
    organization: "LinkedIn Learning",
    date: "2023",
    description: "A Course on Figma for designing user interfaces and prototypes.",
    skills: ["Designing","Creative Thinking", "UI/UX"],
  },
  {
    id: 6,
    title: "CCNA(All Modules)",
    image:ccna,
    file:ccna,
    organization: "Cisco Networking Academy",
    date: "2024",
    description: "Comprehensive course on networking, including routing, switching and many more.",
    skills: ["Networking", "CCNA"],
  }
]

const skillsData = {
  Languages: [
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", level: 90 },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6", level: 85 },
    { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E", level: 88 },
    { name: "Python", icon: <FaPython />, color: "#3776AB", level: 82 },
    { name: "C++", icon: <SiCplusplus />, color: "#00599C", level: 80 },
  ],
  "Libraries and Frameworks": [
    { name: "React", icon: <FaReact />, color: "#61DAFB", level: 90 },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3", level: 85 },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4", level: 92 },
    { name: "Next.js", icon: <RiNextjsFill />, color: "#181717", level: 85 },
    { name: "Shadcn", icon: <SiShadcnui />, color: "#181717", level: 92 },
    { name: "SCSS", icon: <FaSass />, color: "#CC6699", level: 90 },
    { name: "Express.js", icon: <SiExpress />, color: "#88CE02", level: 85 },
    { name: "Node.js", icon: <FaNodeJs />, color: "#88CE02", level: 85 },
  ],
  "Tools and Platforms": [
    { name: "Git", icon: <FaGitAlt />, color: "#F05032", level: 85 },
    { name: "GitHub", icon: <FaGithub />, color: "#181717", level: 88 },
    { name: "VS Code", icon: <VscVscode />, color: "#007ACC", level: 90 },
    { name: "Vercel", icon: <SiVercel />, color: "#000000", level: 85 },
    { name: "REST APi's", icon: <TbApi />, color: "#000000", level: 85 },
    { name: "Figma", icon: <SiFigma />, color: "#F24E1E", level: 85 },
    { name: "Canva", icon: <SiCanva />, color: "#007ACC", level: 85 },
    { name: "Postman", icon: <SiPostman />, color: "#F24E1E", level: 85 },
  ],
  Databases: [
    { name: "Firebase", icon: <SiFirebase />, color: "#F05032", level: 85 },
    { name: "MongoDB", icon: <SiMongodb />, color: "#10B981", level: 88 },
  ],
  "Soft Skills": [
    { name: "Problem Solving", icon: <FaBrain />, color: "#8B5CF6", level: 90 },
    { name: "Communication", icon: <FaComments />, color: "#10B981", level: 85 },
    { name: "Time Management", icon: <FaClock />, color: "#F59E0B", level: 88 },
    { name: "Adaptability", icon: <FaSyncAlt />, color: "#EF4444", level: 87 },
  ],
}

const profiles = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    color: "#0077B5",
    link: "https://www.linkedin.com/in/abdul-irfan-53728a270/",
    followers: "250+",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "#181717",
    link: "https://github.com/irfanabdul1108",
    followers: "200+",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode />,
    color: "#FFA116",
    link: "https://leetcode.com/u/abdulirfan1108/",
    followers: "1600+ Rating",
  },
   {
    name: "HackerRank",
    icon: <SiHackerrank />,
    color: "#2EC866",
    link: "https://www.hackerrank.com/profile/abdulirfan1108",
    followers: "3⭐",
  },
  {
    name: "CodeChef",
    icon: <SiCodechef />,
    color: "#5B4638",
    link: "https://www.codechef.com/users/abdulirfan1108",
    followers: "2⭐",
  },
]

const themes = [
  {
    name: "Purple Gradient",
    primary: "from-purple-600 to-blue-600",
    secondary: "from-purple-100 to-blue-100",
    accent: "purple-600",
    text: "purple-900",
  },
  {
    name: "Ocean Blue",
    primary: "from-blue-600 to-cyan-600",
    secondary: "from-blue-100 to-cyan-100",
    accent: "blue-600",
    text: "blue-900",
  },
  {
    name: "Sunset Orange",
    primary: "from-orange-500 to-red-500",
    secondary: "from-orange-100 to-red-100",
    accent: "orange-500",
    text: "orange-900",
  },
  {
    name: "Forest Green",
    primary: "from-green-600 to-emerald-600",
    secondary: "from-green-100 to-emerald-100",
    accent: "green-600",
    text: "green-900",
  },
  {
    name: "Rose Gold",
    primary: "from-pink-500 to-rose-500",
    secondary: "from-pink-100 to-rose-100",
    accent: "pink-500",
    text: "pink-900",
  },
]

// Components
function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20"
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}

function AboutSection({ theme }: { theme: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 sm:space-y-8"
    >
      {/* Hero Section */}
      <div
        className={`relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br ${theme.primary} p-4 sm:p-6 lg:p-8 text-white`}
      >
        <motion.div
          className="absolute inset-0 bg-black/20"
          animate={{ opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
        <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 lg:flex-row lg:gap-8">
          <motion.div whileHover={{ scale: 1.05, rotate: 5 }} className="relative flex-shrink-0">
            <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
              <img src={dummyuser} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <motion.div
              className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full border-2 border-white"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Abdul Irfan
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 opacity-90"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Full-Stack Developer & Problem Solver
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {["React", "Node.js", "Python", "C++"].map((tech, index) => (
                <span
                  key={tech}
                  className="px-2 sm:px-3 py-1 bg-white/20 rounded-full text-xs sm:text-sm backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
  href="https://www.linkedin.com/in/abdul-irfan-53728a270/"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border-2 border-white/30 rounded-full font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base">
    <FaRocket /> Let's Connect
  </button>
</a>         
   </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}


      {/* About Content */}
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        {/* Profile Summary */}
        <motion.div
          className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <FaUser className={`text-xl sm:text-2xl text-${theme.accent}`} />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">About Me</h2>
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
            🚀 Passionate Full-Stack Developer with expertise in MERN stack, creating scalable and user-friendly web
            applications. Strong problem-solving skills with 1600+ LeetCode rating and 3⭐ HackerRank rating. Experienced
            in React.js, Node.js, Python, and modern web technologies.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Problem Solving", "Team Work", "Leadership", "Innovation"].map((skill) => (
              <span
                key={skill}
                className={`px-2 sm:px-3 py-1 bg-gradient-to-r ${theme.secondary} text-${theme.text} rounded-full text-xs sm:text-sm font-medium`}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <FaGraduationCap className={`text-xl sm:text-2xl text-${theme.accent}`} />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Education</h2>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-black-500 pl-4">
              <h3 className="font-bold text-base sm:text-lg text-gray-800">B.Tech Computer Science</h3>
              <p className="font-medium text-sm sm:text-base">
                Vignan's Institute of Information Technology
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mt-2">
                <span className="flex items-center gap-1">
                  <FaCalendarAlt /> 2022 - 2026
                </span>
                <span className="flex items-center gap-1">
                  <FaStar /> CGPA: 9.00
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Experience */}
      <motion.div
        className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <FaBriefcase className={`text-xl sm:text-2xl text-${theme.accent}`} />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Experience</h2>
        </div>
        <div className="space-y-6 sm:space-y-8">
          {[
            {
              company: "Vertx AI",
              role: "Web Developer Intern",
              period: "March 2025 – July 2025",
              location: "Remote",
              logo:vertx,
              achievements: [
                "Worked on GoVertx, a networking platform designed to connect startups and entrepreneurs with verified investors.",
                "Developed features for searching, viewing, and connecting with investorprofiles.",
                "Collaborated with design and backend teams to enhance performance and scalability of the platform.",
                "Techstack: MongoDB, Express, Node.js, React, and Socket.io.",
              ],
            },
            {
              company: "The Entrepreneurship Network",
              role: "React Developer Intern",
              period: "Jan 2025 – April 2025",
              location: "Remote",
              logo: ten,
              achievements: [
                "Contributed to a platform supporting aspiring entrepreneurs through expertmentorship, co-workingspaces, and a collaborative startup community.",
                "Assisted in designing and developing frontend features, writing cleancode using HTML, CSS, and JavaScript, and integrating seamlessly with backend components.",
                "Participated in the VirtualIncubator Program, helping guide entrepreneurs from idea to launch through workshops, mentorship, and curated resources",
                "Techstack: HTML, CSS, JavaScript, React, Tailwind CSS, Git."
              ],
            },
          ].map((exp, index) => (
            <motion.div
              key={index}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ x: 5 }}
            >
              <div className="flex-shrink-0 self-center sm:self-start">
                <img
                  src={exp.logo || "/placeholder.svg"}
                  alt={exp.company}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base sm:text-lg text-gray-800">{exp.role}</h3>
                <p className={`font-medium text-sm sm:text-base`}>{exp.company}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-3">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                </div>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                      <FaChevronRight className="mt-1 flex-shrink-0" size={10} />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Profiles */}
      <motion.div
        className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <FaGithub className={`text-xl sm:text-2xl text-${theme.accent}`} />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Connect With Me</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-3 sm:p-4 lg:p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div
                className="text-2xl sm:text-3xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform"
                style={{ color: profile.color }}
              >
                {profile.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mb-1 text-xs sm:text-sm text-center">{profile.name}</h3>
              <p className="text-xs text-gray-600 text-center">{profile.followers}</p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

function SkillsSection({ theme }: { theme: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 sm:space-y-8"
    >
      <div className="text-center mb-8 sm:mb-12">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Skills
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          A comprehensive overview of my technical expertise and professional capabilities
        </motion.p>
      </div>

      {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
        <motion.div
          key={category}
          className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg"
          initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * categoryIndex }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 flex items-center gap-3">
            <div className={`w-2 sm:w-3 h-6 sm:h-8 bg-gradient-to-b ${theme.primary} rounded-full`} />
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group relative overflow-hidden rounded-xl border border-gray-100 p-4 sm:p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div
                    className="text-2xl sm:text-3xl transition-transform group-hover:scale-110"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{skill.name}</h3>
                    {/* <p className="text-xs sm:text-sm text-gray-600">{skill.level}% Proficiency</p> */}
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.5 + 0.05 * index, duration: 1 }}
                    />
                  </div>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  style={{ background: `linear-gradient(90deg, transparent, ${skill.color}20, transparent)` }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

function ProjectsSection({ theme }: { theme: any }) {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [filter, setFilter] = useState("All")

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]

  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 sm:space-y-8"
    >
      <div className="text-center mb-8 sm:mb-12">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Projects
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Showcasing my latest work and creative solutions
        </motion.p>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-3 sm:px-6 py-2 rounded-full font-medium transition-all text-sm sm:text-base ${
                filter === category
                  ? `bg-gradient-to-r ${theme.primary} text-white shadow-lg`
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.1 * index }}
              className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <span
                    className={`px-2 sm:px-3 py-1 bg-gradient-to-r ${theme.primary} text-white text-xs font-medium rounded-full`}
                  >
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <motion.a
                      href={project.livelink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-gray-800 hover:bg-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt size={10} /> Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githublink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gray-800/90 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-white hover:bg-gray-800 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub size={10} /> Code
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition-colors text-sm"
                >
                  Learn More <FaArrowRight size={10} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-48 sm:h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <FaTimes size={14} />
                </button>
              </div>
              <div className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">{selectedProject.title}</h2>
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {selectedProject.description}
                </p>
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech: string) => (
                      <span
                        key={tech}
                        className={`px-2 sm:px-3 py-1 bg-gradient-to-r ${theme.secondary} text-${theme.text} rounded-full text-xs sm:text-sm font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={selectedProject.livelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${theme.primary} text-white rounded-full font-semibold hover:shadow-lg transition-all text-sm sm:text-base`}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={selectedProject.githublink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border-2 border-gray-300 rounded-full font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base"
                  >
                    <FaGithub /> View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function CertificationsSection({ theme }: { theme: any }) {
  const [selectedCert, setSelectedCert] = useState<any>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 sm:space-y-8"
    >
      <div className="text-center mb-8 sm:mb-12">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Core Certifications
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Professional certifications and achievements that validate my expertise
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ y: -10 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={cert.image || "/placeholder.svg"}
                alt={cert.title}
                className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                <span
                  className={`px-2 sm:px-3 py-1 bg-gradient-to-r ${theme.primary} text-white text-xs font-medium rounded-full`}
                >
                  {cert.date}
                </span>
              </div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex flex-col sm:flex-row gap-2">
                  <motion.button
                    onClick={() => setSelectedCert(cert)}
                    className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-gray-800 hover:bg-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEye size={10} /> View Details
                  </motion.button>
                  <a href={cert.file} download>
  <motion.button
    className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-green-600/90 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-white hover:bg-green-600 transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <FaDownload size={10} /> Download
  </motion.button>
</a>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                {cert.title}
              </h3>
              <p className={`font-medium mb-2 text-sm sm:text-base`}>{cert.organization}</p>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{cert.description}</p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certification Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="bg-white rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedCert.image || "/placeholder.svg"}
                  alt={selectedCert.title}
                  className="w-full h-48 sm:h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <FaTimes size={14} />
                </button>
              </div>
              <div className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">{selectedCert.title}</h2>
                <p className={`text-lg sm:text-xl text-${theme.accent} font-medium mb-4`}>
                  {selectedCert.organization}
                </p>
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {selectedCert.description}
                </p>
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Skills Covered</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill: string) => (
                      <span
                        key={skill}
                        className={`px-2 sm:px-3 py-1 bg-gradient-to-r ${theme.secondary} text-${theme.text} rounded-full text-xs sm:text-sm font-medium`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
                    <FaCalendarAlt />
                    <span>Issued: {selectedCert.date}</span>
                  </div>
<a href={selectedCert.file} download>
  <button
    className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${theme.primary} text-white rounded-full font-semibold hover:shadow-lg transition-all text-sm sm:text-base`}
  >
    <FaDownload /> Download Certificate
  </button>
</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function ContactSection({ theme }: { theme: any }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  emailjs.sendForm('service_c3iamzn', 'template_8exg1xb', formRef.current, 'lDovMhwSr-xEKJXGD')
    .then((result) => {
      console.log(result.text);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error(error.text);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
};


const formRef = useRef(null);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 sm:space-y-8"
    >
      <div className="text-center mb-8 sm:mb-12">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Get In Touch
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Let's discuss your next project or just say hello!
        </motion.p>
      </div>

      <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
        {/* Contact Info */}
        <motion.div
          className="space-y-6 sm:space-y-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className={`bg-gradient-to-br ${theme.primary} rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white`}>
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Let's Connect</h2>
            <div className="space-y-4 sm:space-y-6">
              <motion.div className="flex items-center gap-3 sm:gap-4" whileHover={{ x: 5 }}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-lg sm:text-xl" />
                </div>
                <div className="min-w-0">
                  <p className="font-medium text-sm sm:text-base">Email</p>
                  <a
                    href="mailto:abdulirfan1108@gmail.com"
                    className="text-white/80 hover:text-white transition-colors text-sm sm:text-base break-all"
                  >
                    abdulirfan1108@gmail.com
                  </a>
                </div>
              </motion.div>
              <motion.div className="flex items-center gap-3 sm:gap-4" whileHover={{ x: 5 }}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhoneAlt className="text-lg sm:text-xl" />
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base">Phone</p>
                  <a
                    href="tel:+919100929313"
                    className="text-white/80 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    +91 9100929313
                  </a>
                </div>
              </motion.div>
              <motion.div className="flex items-center gap-3 sm:gap-4" whileHover={{ x: 5 }}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-lg sm:text-xl" />
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base">Location</p>
                  <p className="text-white/80 text-sm sm:text-base">Visakhapatnam, India</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">Follow Me</h3>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {profiles.slice(0, 3).map((profile, index) => (
                <motion.a
                  key={profile.name}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-3 sm:p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all"
                  whileHover={{ y: -5, scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="text-xl sm:text-2xl mb-2" style={{ color: profile.color }}>
                    {profile.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700 text-center">{profile.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Send Message</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-sm sm:text-base"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r ${theme.primary} text-white font-semibold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base`}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </motion.button>
          </form>

          {/* Success Message */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                className="mt-4 sm:mt-6 p-3 sm:p-4 bg-green-100 border border-green-300 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="flex items-center gap-2 text-green-800">
                  <FaHeart className="text-green-600" />

                  <span className="font-medium text-sm sm:text-base">Message sent successfully!</span>
                </div>
                <p className="text-green-700 text-xs sm:text-sm mt-1">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Main Portfolio Component
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about")
  const [currentTheme, setCurrentTheme] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const theme = themes[currentTheme]

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const nextTheme = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <FloatingParticles />

      {/* Sidebar */}
      <motion.aside
        className={`fixed left-0 top-0 h-full w-16 sm:w-20 lg:w-64 bg-gradient-to-b ${theme.primary} shadow-2xl z-40 transition-all duration-300 ${
          isMobileMenuOpen && isMobile ? "translate-x-0" : isMobile ? "-translate-x-full" : "translate-x-0"
        }`}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
      >
        <div className="p-3 sm:p-4 lg:p-6">
          {/* Profile Section */}
          <motion.div
            className="text-center mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-2 sm:mb-4 rounded-full overflow-hidden border-4 border-white/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <img src={dummyuser} alt="Profile" className="w-full h-full object-cover" />
            </motion.div>
            <div className="hidden lg:block">
              <h2 className="text-white font-bold text-lg">Abdul Irfan</h2>
              <p className="text-white/80 text-sm">Full-Stack Developer</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="space-y-1 sm:space-y-2">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id)
                  setIsMobileMenuOpen(false)
                }}
                className={`w-full flex items-center gap-2 sm:gap-4 px-2 sm:px-4 py-2 sm:py-3 rounded-xl transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-white/20 text-white shadow-lg"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ x: 5 }}
              >
                <div className="text-lg sm:text-xl flex-shrink-0">{section.icon}</div>
                <span className="hidden lg:block font-medium text-sm">{section.label}</span>
              </motion.button>
            ))}
          </nav>

          {/* Theme Controls */}
          <div className="absolute bottom-4 sm:bottom-6 left-3 sm:left-4 lg:left-6 right-3 sm:right-4 lg:right-6 space-y-2 sm:space-y-3">
            <motion.button
              onClick={nextTheme}
              className="w-full flex items-center justify-center gap-2 px-2 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPalette className="text-sm sm:text-base" />
              <span className="hidden lg:block text-sm">Change Theme</span>
            </motion.button>
            <motion.button
              onClick={toggleDarkMode}
              className="w-full flex items-center justify-center gap-2 px-2 sm:px-4 py-2 sm:py-3 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLightbulb className="text-sm sm:text-base" />
              <span className="hidden lg:block text-sm">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
            </motion.button>
          </div>
        </div>
      </motion.aside>

      {/* Mobile Menu Button */}
      <motion.button
        className={`fixed top-4 sm:top-6 left-4 sm:left-6 z-50 lg:hidden w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${theme.primary} rounded-full flex items-center justify-center text-white shadow-lg`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
          {isMobileMenuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
        </motion.div>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && isMobile && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="ml-16 sm:ml-20 lg:ml-64 min-h-screen">
        <div className="p-4 sm:p-6 lg:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeSection === "about" && <AboutSection theme={theme} />}
              {activeSection === "skills" && <SkillsSection theme={theme} />}
              {activeSection === "projects" && <ProjectsSection theme={theme} />}
              {activeSection === "certifications" && <CertificationsSection theme={theme} />}
              {activeSection === "contact" && <ContactSection theme={theme} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Scroll to Top Button */}
      <motion.button
        className={`fixed bottom-6 sm:bottom-8 right-6 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r ${theme.primary} rounded-full flex items-center justify-center text-white shadow-lg z-30`}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.div animate={{ y: [-2, 2, -2] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          <FaArrowRight className="rotate-[-90deg]" size={16} />
        </motion.div>
      </motion.button>

      {/* Theme Indicator */}
      <motion.div
        className="fixed top-4 sm:top-6 right-4 sm:right-6 z-30"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div
          className={`px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r ${theme.primary} rounded-full text-white text-xs sm:text-sm font-medium shadow-lg`}
        >
          {theme.name}
        </div>
      </motion.div>
    </div>
  )
}
