"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ParticlesBackground } from '@/components/particles-background';
import { WorkspaceScene } from '@/components/3d/workspace-scene';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      
      <div className="absolute inset-0 z-10">
        <WorkspaceScene />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Build. Collaborate. Innovate
          </span>
          <br />
          <span className="text-foreground">Your Team, Your Projects.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Join the future of team collaboration. Connect with developers worldwide,
          participate in hackathons, and build amazing projects together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/80 hover:to-purple-600/80 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started for Free
          </Button>
        </motion.div>
      </div>
    </section>
  );
}