"use client";

import { motion } from 'framer-motion';
import { UserPlus, Users, Rocket, MessageSquare, Trophy } from 'lucide-react';

const steps = [
  {
    title: "Create an Account",
    description: "Sign up in seconds and set up your profile.",
    icon: UserPlus,
  },
  {
    title: "Form or Join a Team",
    description: "Connect with developers who share your interests.",
    icon: Users,
  },
  {
    title: "Start a Project",
    description: "Use our built-in tools to manage your work.",
    icon: Rocket,
  },
  {
    title: "Collaborate",
    description: "Work together using video calls and chat.",
    icon: MessageSquare,
  },
  {
    title: "Earn Recognition",
    description: "Complete projects and earn certificates.",
    icon: Trophy,
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get started with TeamSync in just a few simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border" />
              )}
              <div className="text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}