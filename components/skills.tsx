"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
export default function Skills() {
  const skills = {
    Languages: ["JavaScript", "TypeScript", "HTML5", "CSS", "Python"],
    "Frameworks / Libraries": [
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Node.js",
    ],
    "Tools / Platforms": [
      "Git",
      "GitHub",
      "Docker",
      "Vercel",
      "VS Code",
      "Linux",
      "Cursor",
    ],
    Databases: ["MongoDB", "MySQL"],
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent inline-flex items-center gap-2">
            Technical Skills <Sparkles className="w-6 h-6" />
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-white to-transparent mx-auto" />
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="group-hover:animate-pulse transition-all duration-300 hover:bg-primary hover:text-primary-foreground cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
