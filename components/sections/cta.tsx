"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Team&apos;s Workflow?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of teams already using TeamSync to collaborate, innovate, and succeed together.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/80 hover:to-purple-600/80 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Get Started for Free
          </Button>
        </motion.div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
    </section>
  );
}