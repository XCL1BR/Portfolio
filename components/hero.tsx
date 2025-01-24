"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, FileUser } from "lucide-react";
import Link from "next/link";
import FloatingShapes from "./floating-shapes";
import Profile from "@/components/ui/giphy.gif";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 text-white overflow-hidden">
      <FloatingShapes />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mix-blend-difference"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif mb-6 bg-black">
            Hi, I&apos;m <span className="font-serif italic">Ashwarya</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-400 mb-8">
            Frontend Developer specializing in building exceptional digital
            experiences
          </h2>
          <div className="flex gap-4">
            <Link
              href="https://github.com/XCL1BR"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:text-white transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/ashwarya-856265206/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:text-white transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="#" //Yaha RESUME KA DRIVE LINK AAYEGA (RESUME STRONG KARO &apos;)
              className="p-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:text-white transform hover:scale-110"
            >
              <FileUser className="w-6 h-6" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-[400px] hidden lg:block"
        >
          <Image
            src={Profile}
            alt="Decorative illustration"
            fill
            unoptimized
            className="object-contain mix-blend-difference"
          />
        </motion.div>
      </div>
    </section>
  );
}
