"use client";

import { motion } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

interface FeelingThinkingSectionProps {
  title: string;
  subtitle: string;
  feelings: string[];
  thoughts: string[];
}

export default function FeelingThinkingSection({
  title,
  subtitle,
  feelings,
  thoughts,
}: FeelingThinkingSectionProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark text-center mb-3">
            {title}
          </h2>
          <p className="text-lg text-gray-warm text-center leading-relaxed mb-12 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimateOnScroll>
            <motion.div
              className="bg-primary-light/50 rounded-2xl p-8 border border-primary/10"
              whileHover={{ y: -4, boxShadow: "0 12px 24px -8px rgba(2, 158, 227, 0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-2">
                <span className="text-primary">🔍</span> You may be feeling&hellip;
              </h3>
              <motion.ul
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
              >
                {feelings.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={itemVariants}
                    className="flex items-start gap-3 text-gray-warm"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-primary mt-1.5 flex-shrink-0">◆</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <motion.div
              className="bg-accent-light/50 rounded-2xl p-8 border border-accent/10"
              whileHover={{ y: -4, boxShadow: "0 12px 24px -8px rgba(226, 2, 16, 0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-2">
                <span className="text-accent">💭</span> You may be thinking&hellip;
              </h3>
              <motion.ul
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
              >
                {thoughts.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={itemVariants}
                    className="flex items-start gap-3 text-gray-warm"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-accent mt-1.5 flex-shrink-0">◆</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
