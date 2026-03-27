import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden pt-16">
      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-leaf-light opacity-60 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-ocean-light opacity-50 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block gradient-leaf text-primary-foreground text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8">
            Industrial Sustainability Redefined
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
        >
          Intelligent Waste.
          <br />
          <span className="text-gradient-leaf">Living Buildings.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 font-body"
        >
          Two complementary platforms transforming industrial infrastructure—from
          AI-powered waste diversion to biotech-integrated architecture that breathes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#ecovision"
            className="gradient-leaf text-primary-foreground font-semibold px-8 py-3.5 rounded-full text-base hover:opacity-90 transition-opacity"
          >
            Explore EcoVision AI
          </a>
          <a
            href="#bioenvelope"
            className="gradient-ocean text-secondary-foreground font-semibold px-8 py-3.5 rounded-full text-base hover:opacity-90 transition-opacity"
          >
            Discover BioEnvelope
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-muted-foreground" size={28} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
