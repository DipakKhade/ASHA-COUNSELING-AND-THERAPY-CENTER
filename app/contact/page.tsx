"use client";

import { motion } from "framer-motion";
import CtaSection from "@/components/CtaSection";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactForm from "@/components/ContactForm";

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function ContactPage() {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
                Contact
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
                Get In Touch
              </h1>
              <p className="text-xl text-gray-warm max-w-3xl mx-auto">
                Strengthening mental and emotional health through professional
                counseling. Have questions or need more information? Contact me to
                begin your journey toward a healthy, balanced mental and emotional
                life.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <AnimateOnScroll>
                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, backgroundColor: "#029ee3", color: "#fff" }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-1">Phone</h3>
                    <a href="tel:917888000986" className="text-gray-warm hover:text-primary transition-colors">
                      91-7888000986
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.1}>
                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, backgroundColor: "#029ee3", color: "#fff" }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-1">Email</h3>
                    <a href="mailto:ashacounsellingandtherapycenter@gmail.com" className="text-gray-warm hover:text-primary transition-colors break-all">
                      ashacounsellingandtherapycenter@gmail.com
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.2}>
                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, backgroundColor: "#029ee3", color: "#fff" }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark mb-1">Address</h3>
                    <p className="text-gray-warm leading-relaxed">
                      Office No.2, 1st Floor, Shalimar Corner, Above Hotel Leelas,
                      Near Court, Baramati, Pune. 413102
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={0.3}>
                <div className="pt-4">
                  <motion.a
                    href="https://forms.gle/Xb9czAvvSkdRkN8V7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
                    whileHover={{ scale: 1.04, boxShadow: "0 20px 25px -5px rgba(2, 158, 227, 0.3)" }}
                    whileTap={{ scale: 0.96 }}
                  >
                    Start Your Healing Journey
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                </div>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll variant="scaleIn">
              <ContactForm />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <CtaSection />
    </motion.div>
  );
}
