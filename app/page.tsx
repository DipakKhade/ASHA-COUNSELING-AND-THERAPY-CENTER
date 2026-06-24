"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import FeelingThinkingSection from "@/components/FeelingThinkingSection";
import CtaSection from "@/components/CtaSection";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const homeFeelings = [
  "You're always the one initiating (calls, messages, plans)",
  "You invest more, but receive less effort in return",
  "You feel ignored or taken for granted",
  "You feel emotionally drained and disappointed",
  "The same pattern keeps repeating despite your efforts",
  "You start doubting your own worth",
];

const homeThoughts = [
  "\"Am I the only one doing everything?\"",
  "\"Why don't they care about me the same way?\"",
  "\"If I stop trying, will this relationship end?\"",
  "\"Maybe I'm not enough\u2026\"",
  "\"Why do I have to try so hard?\"",
  "\"Should I even stay in this?\"",
];

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function HomePage() {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
      <HeroSection />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6">
              ONE-SIDED EFFORTS
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <p className="text-lg text-gray-warm leading-relaxed max-w-3xl mx-auto">
              Do you feel like you&rsquo;re the only one putting effort into the
              relationship?
              <br />
              You try to understand, adjust, and make things work&hellip; but the
              same energy isn&rsquo;t coming back?
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-lg text-gray-warm leading-relaxed max-w-3xl mx-auto mt-4">
              Slowly, this can turn into hurt, frustration, and emotional
              exhaustion.
              <br />
              And one question keeps coming up&nbsp;&mdash;&nbsp;
              <em className="text-primary font-medium">
                &ldquo;Am I the only one trying?&rdquo;
              </em>
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.3}>
            <p className="text-lg text-gray-warm leading-relaxed max-w-3xl mx-auto mt-4 font-medium">
              You are not alone. With the right understanding, you can recognize
              your worth and set healthy boundaries.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <FeelingThinkingSection
        title="ONE-SIDED EFFORTS"
        subtitle="You are not alone. With the right understanding, you can recognize your worth and set healthy boundaries."
        feelings={homeFeelings}
        thoughts={homeThoughts}
      />

      <CtaSection subtitle="Take the first step toward emotional well-being. Book your session today." />
    </motion.div>
  );
}
