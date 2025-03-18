"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export function DemoSection() {
  return (
    <section id="demo" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See TeamSync in Action
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience our powerful collaboration tools and intuitive interface.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="relative overflow-hidden rounded-xl border border-border/50 backdrop-blur-sm bg-card/50">
            <div className="aspect-video w-full">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                alt="TeamSync Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}