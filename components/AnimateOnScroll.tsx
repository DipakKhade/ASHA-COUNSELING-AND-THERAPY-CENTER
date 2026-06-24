"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const variantConfig = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -16 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
  none: {
    hidden: {},
    visible: {},
    transition: {},
  },
};

type Variant = keyof typeof variantConfig;

export default function AnimateOnScroll({
  children,
  className = "",
  variant = "fadeInUp",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const cfg = variantConfig[variant];
  const transition = delay ? { ...cfg.transition, delay } : cfg.transition;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={cfg.hidden}
      animate={inView ? cfg.visible : cfg.hidden}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
