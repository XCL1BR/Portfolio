"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Scratch-like Animation Playground",
      description:
        "A project inspired by the MIT Scratch app, built using React, TailwindCSS, npm Blockly, and Phaser. Implemented advanced features like collision-based animation swaps and motion controls.",
      tech: ["React", "Tailwind CSS", "npm Blockly", "API", "AWS", "Socket.io"],
      github: "https://github.com/XCL1BR/Scratch-like-Animation-Playground",
      live: "https://scratch-like-animation-playground.vercel.app/",
    },
    {
      title: "Zentry Website Clone",
      description:
        "Developed a visually stunning and responsive clone of Zentry.com using React, Tailwind CSS, and GSAP, showcasing proficiency in modern web development technologies and animation techniques.",
      tech: ["React", "TailWind", "GSAP"],
      github: "https://github.com/XCL1BR/GamingWebSite",
      live: "https://gaming-web-site-hazel.vercel.app/",
    },
    {
      title: "Tesla Car Configurator",
      description:
        "A simple, responsive Tesla Car Configurator built with vanilla JavaScript, HTML, and CSS. This application allows users to customize a Tesla car by selecting different models, colors, wheels, and interior options.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/XCL1BR/Tesla-Car-Configurator",
      live: "https://teslaconfig.netlify.app/",
    },
    {
      title: "React E-Commerce",
      description:
        "This is a React-based e-commerce application that provides users with a seamless shopping experience. The project is structured with reusable components, a centralized state management system using Redux, and dynamic pages to enhance the user experience.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/XCL1BR/E-Commerce-react-",
      live: "https://e-commerce-react-orpin.vercel.app/",
    },
    // Yaha project add kar dena
    // {
    //   title: "Tesla Car Configurator",
    //   description:
    //     "A simple, responsive Tesla Car Configurator built with vanilla JavaScript, HTML, and CSS. This application allows users to customize a Tesla car by selecting different models, colors, wheels, and interior options.",
    //   tech: ["HTML", "CSS", "JavaScript", "API", "AWS", "Socket.io"],
    //   github: "#",
    //   live: "#",
    // },
  ];

  return (
    <section id="projects" className="py-20 bg-black-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent inline-flex items-center gap-2">
            Projects <Sparkles className="w-6 h-6" />
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-white to-transparent mx-auto" />
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-black rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600 transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-emerald-600 hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </Link>
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-emerald-600 hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
