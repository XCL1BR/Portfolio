"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Building2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Software Development Engineer Intern",
      company: "Bluestock™",
      location: "Bangalore, Karnataka",
      period: "Jan 2025 - Present",
      points: [
        "Team Leadership: Successfully led a team to deliver a feature-rich web application and REST API for IPO-related information.",
        "Backend Development: Engineered a robust backend with Django 5.0.6 and PostgreSQL.",
        "Frontend Design: Designed a responsive and user-friendly interface using HTML, CSS, JavaScript, and Bootstrap 5.",
      ],
    },
    {
      title: "Penetration Testing Intern",
      company: "HackersForYou",
      location: "Bangalore, Karnataka",
      period: "Sep 2023 – Oct 2023",
      points: [
        "Penetration Testing Fundamentals: Mastered key stages of penetration testing.",
        "Hands-on Experience in Vulnerability Exploitation: Successfully identified and exploited system vulnerabilities.",
        "Network and Web Application Testing Expertise: Conducted detailed penetration tests.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-white to-transparent mx-auto" />
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-white/50 to-transparent group-hover:from-white group-hover:to-white/50 transition-all duration-300" />

              <div className="pl-8 relative">
                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-white transform -translate-x-[0.4rem] group-hover:scale-150 transition-transform duration-300" />

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors duration-300">
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="flex items-start gap-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <span className="text-white mt-2">•</span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
